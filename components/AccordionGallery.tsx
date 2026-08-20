"use client";

import { useRef, useEffect, useState, useCallback, CSSProperties, KeyboardEvent, MouseEvent } from 'react';
import { gsap } from 'gsap';

export interface AccordionGalleryItem {
  image: string;
  label?: string;
  link?: string;
  alt?: string;
  subtitle?: string;
  description?: string;
  features?: string[];
}

export interface AccordionGalleryProps {
  items?: AccordionGalleryItem[];
  defaultIndex?: number;
  accentColor?: string;
  overlayColor?: string;
  textColor?: string;
  height?: number;
  gap?: number;
  radius?: number;
  expandRatio?: number;
  orientation?: 'horizontal' | 'vertical';
  duration?: number;
  ease?: string;
  parallax?: number;
  tilt?: number;
  stagger?: number;
  trigger?: 'hover' | 'click';
  showLabels?: boolean;
  grayscale?: boolean;
  className?: string;
}

const DEFAULT_ITEMS: AccordionGalleryItem[] = [
  { image: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=900&q=80', label: 'ESSENTIAL' },
  { image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=900&q=80', label: 'SMART' },
  { image: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=900&q=80', label: 'CITY 1' },
  { image: 'https://images.unsplash.com/photo-1508873696983-2df515122519?auto=format&fit=crop&w=900&q=80', label: 'URBAN PRO' }
];

const AccordionGallery = ({
  items = DEFAULT_ITEMS,
  defaultIndex = 0,
  accentColor = '#FFB703',
  overlayColor = '#000000',
  textColor = '#ffffff',
  height = 520,
  gap = 12,
  radius = 20,
  expandRatio = 0.55,
  orientation = 'horizontal',
  duration = 0.6,
  ease = 'power3.out',
  parallax = 0.5,
  tilt = 6,
  stagger = 0.06,
  trigger = 'hover',
  showLabels = true,
  grayscale = false,
  className = ''
}: AccordionGalleryProps) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const panelRefs = useRef<(HTMLElement | null)[]>([]);
  const mediaRefs = useRef<(HTMLElement | null)[]>([]);
  const barRefs = useRef<(HTMLElement | null)[]>([]);
  const textRefs = useRef<(HTMLElement | null)[]>([]);
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const firstRunRef = useRef(true);
  const mediaSizeRef = useRef(320);

  const [isMobile, setIsMobile] = useState<boolean>(false);
  const count = items.length;
  const [active, setActive] = useState<number>(Math.min(Math.max(defaultIndex, 0), count - 1));

  // Detect mobile viewport on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const prefersReduced =
    typeof window !== 'undefined' && window.matchMedia
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false;

  const overlayBg = `linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.75) 50%, color-mix(in srgb, ${overlayColor} 95%, transparent) 100%), color-mix(in srgb, ${overlayColor} calc(var(--ag-dim, 0.35) * 100%), transparent)`;

  const applyLayout = useCallback(
    (animate: boolean) => {
      if (isMobile) return;
      const panels = panelRefs.current;
      if (!panels.length) return;

      const r = Math.min(Math.max(expandRatio, 0.2), 0.9);
      const grow = count > 1 ? (r * (count - 1)) / (1 - r) : 1;
      const mediaSize = mediaSizeRef.current;

      tlRef.current?.kill();
      const dur = animate && !prefersReduced ? duration : 0;
      const tl = gsap.timeline();

      panels.forEach((panel, i) => {
        if (!panel) return;
        const isActive = i === active;
        const media = mediaRefs.current[i];
        const bar = barRefs.current[i];
        const text = textRefs.current[i];

        const rot = isActive ? 0 : i < active ? tilt : -tilt;

        tl.to(panel, { flexGrow: isActive ? grow : 1, rotateY: rot, duration: dur, ease }, 0);

        if (media) {
          const drift = Math.max(-1.5, Math.min(1.5, active - i));
          const shift = drift * parallax * mediaSize * 0.06;
          const gray = grayscale ? (isActive ? 0 : 1) : 0;
          tl.to(
            media,
            {
              xPercent: -50,
              yPercent: -50,
              x: isActive ? 0 : shift,
              y: 0,
              '--ag-gray': gray,
              '--ag-dim': isActive ? 0 : 0.45,
              duration: dur,
              ease
            },
            0
          );
        }

        if (showLabels && bar && text) {
          if (isActive) {
            tl.to([bar, text], { opacity: 1, x: 0, duration: dur, ease, stagger: prefersReduced ? 0 : stagger }, 0);
          } else {
            tl.to([bar, text], { opacity: 0, x: -14, duration: dur * 0.6, ease }, 0);
          }
        }
      });

      tlRef.current = tl;
    },
    [
      active,
      count,
      expandRatio,
      duration,
      ease,
      tilt,
      parallax,
      grayscale,
      showLabels,
      stagger,
      prefersReduced,
      isMobile
    ]
  );

  useEffect(() => {
    if (isMobile) return;
    const el = rootRef.current;
    if (!el) return;

    const measure = () => {
      const rect = el.getBoundingClientRect();
      const usable = Math.max(rect.width - gap * (count - 1), 120);
      const size = Math.max(140, usable * Math.min(Math.max(expandRatio, 0.2), 0.9) * 1.22);
      mediaSizeRef.current = size;
      el.style.setProperty('--ag-media-size', `${size}px`);
      applyLayout(!firstRunRef.current);
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [applyLayout, gap, count, expandRatio, isMobile]);

  useEffect(() => {
    if (!isMobile) {
      applyLayout(!firstRunRef.current);
      firstRunRef.current = false;
    }
  }, [applyLayout, isMobile]);

  useEffect(
    () => () => {
      tlRef.current?.kill();
    },
    []
  );

  const handleEnter = (i: number) => {
    if (trigger === 'hover' && !isMobile) setActive(i);
  };

  const handleClick = (i: number, e: MouseEvent) => {
    e.preventDefault();
    if (isMobile) {
      // Toggle: if clicking active item, collapse it (-1); otherwise expand it
      setActive(prev => (prev === i ? -1 : i));
    } else {
      if (i !== active) {
        setActive(i);
      }
    }
  };

  const handleKeyDown = (i: number, e: KeyboardEvent) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      setActive((i + 1) % count);
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      setActive((i - 1 + count) % count);
    }
  };

  // Dedicated Mobile View (Perfectly synchronized, uniform card rows)
  if (isMobile) {
    return (
      <div className={`flex flex-col w-full space-y-3 ${className}`} role="list" aria-label="Econecta Mobile Gallery">
        {items.map((item, i) => {
          const isActive = i === active;
          return (
            <div
              key={i}
              onClick={e => handleClick(i, e)}
              className={`group relative block w-full overflow-hidden bg-[#0a0a0c] border rounded-xl transition-all duration-300 cursor-pointer ${
                isActive
                  ? 'border-[#FFB703]/70 shadow-[0_0_25px_rgba(255,183,3,0.25)] ring-1 ring-[#FFB703]/40 bg-zinc-950'
                  : 'border-zinc-800/80 hover:border-zinc-700'
              }`}
              role="listitem"
              tabIndex={0}
            >
              {/* Perfectly Synchronized Uniform Header Row */}
              <div className="p-4 sm:p-5 flex items-center justify-between gap-3 h-16 w-full relative z-10">
                <div className="flex items-center gap-3 min-w-0">
                  <span
                    className="h-6 w-1 rounded-full shrink-0"
                    style={{
                      background: accentColor,
                      boxShadow: `0 0 10px ${accentColor}`
                    }}
                  />
                  <h3 className="font-mono text-base sm:text-lg font-extrabold tracking-tight text-white uppercase leading-none truncate">
                    {item.label}
                  </h3>
                </div>

                <span className="font-mono text-xs text-[#FFB703] font-semibold uppercase tracking-wider shrink-0 pl-2">
                  {isActive ? '▲ Plegar' : '▼ Ver detalles'}
                </span>
              </div>

              {/* Expanded Card Content (Image + Subtitle + Features) */}
              {isActive && (
                <div className="px-4 pb-5 pt-1 space-y-4 animate-in fade-in duration-300 relative z-10 border-t border-zinc-800/60">
                  {/* Image Banner when expanded */}
                  <div className="relative w-full h-44 rounded-lg overflow-hidden border border-white/10">
                    <img
                      src={item.image}
                      alt=""
                      draggable={false}
                      onError={e => {
                        (e.currentTarget as HTMLElement).style.display = 'none';
                      }}
                      className="block h-full w-full select-none object-cover opacity-80"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                  </div>

                  {item.subtitle && (
                    <p className="font-mono text-xs text-[#FFB703] font-semibold tracking-wider">
                      {item.subtitle}
                    </p>
                  )}

                  {item.description && (
                    <p className="font-sans text-xs text-zinc-200 leading-relaxed bg-black/60 backdrop-blur-md p-3.5 rounded-xl border border-white/10">
                      {item.description}
                    </p>
                  )}

                  {item.features && item.features.length > 0 && (
                    <ul className="space-y-2.5 pt-1 bg-black/60 backdrop-blur-md p-4 rounded-xl border border-white/10">
                      {item.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-2.5 text-xs font-mono text-zinc-200">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#FFB703] shrink-0 shadow-[0_0_6px_#FFB703]" />
                          <span className="leading-tight">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    );
  }

  // Desktop View (Interactive GSAP 3D perspective gallery)
  return (
    <div
      ref={rootRef}
      className={`flex flex-row w-full max-w-full [perspective:1400px] ${className}`}
      style={{ gap: `${gap}px`, height: `${height}px` }}
      role="list"
      aria-label="Econecta Accordion Gallery"
    >
      {items.map((item, i) => {
        const isActive = i === active;
        const Tag = (item.link ? 'a' : 'div') as 'a';
        return (
          <Tag
            key={i}
            ref={(el: HTMLElement | null) => {
              panelRefs.current[i] = el;
            }}
            className={`group relative block min-w-0 min-h-0 flex-[1_1_0] cursor-pointer overflow-hidden bg-[#09090b] border transition-colors ${
              isActive ? 'border-[#FFB703]/60 shadow-[0_0_25px_rgba(255,183,3,0.2)]' : 'border-zinc-800/80 hover:border-zinc-700'
            } no-underline outline-none [transform-style:preserve-3d] [transform-origin:center]`}
            style={
              {
                borderRadius: `${radius}px`,
                '--ag-accent': accentColor,
                willChange: 'flex-grow, transform'
              } as CSSProperties
            }
            href={item.link || undefined}
            onClick={e => handleClick(i, e)}
            onMouseEnter={() => handleEnter(i)}
            onFocus={() => setActive(i)}
            onKeyDown={e => handleKeyDown(i, e)}
            role="listitem"
            tabIndex={0}
            aria-current={isActive ? 'true' : undefined}
            aria-label={item.label}
          >
            <span className="absolute inset-0 overflow-hidden [border-radius:inherit]">
              <span
                ref={(el: HTMLElement | null) => {
                  mediaRefs.current[i] = el;
                }}
                className="absolute top-1/2 left-1/2 [filter:grayscale(var(--ag-gray,0))]"
                style={{
                  width: 'var(--ag-media-size, 320px)',
                  height: '100%',
                  willChange: 'transform, filter'
                }}
              >
                <img
                  src={item.image}
                  alt=""
                  draggable={false}
                  onError={e => {
                    (e.currentTarget as HTMLElement).style.display = 'none';
                  }}
                  className="block h-full w-full select-none object-cover opacity-60 group-hover:opacity-85 transition-opacity duration-300"
                />
              </span>
              <span
                className="pointer-events-none absolute inset-0"
                style={{ background: overlayBg }}
                aria-hidden="true"
              />
            </span>

            {/* Panel Label & Info Overlay (Desktop) */}
            {showLabels && (
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 p-6 z-[2] flex flex-col justify-end"
                aria-hidden="true"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span
                    ref={(el: HTMLElement | null) => {
                      barRefs.current[i] = el;
                    }}
                    className="h-[28px] w-[4px] flex-none rounded-full"
                    style={{
                      background: accentColor,
                      boxShadow: `0 0 12px ${accentColor}`
                    }}
                  />
                  <h3
                    ref={(el: HTMLElement | null) => {
                      textRefs.current[i] = el;
                    }}
                    className="font-mono text-2xl sm:text-3xl font-extrabold tracking-tight text-white uppercase drop-shadow-md"
                    style={{ color: textColor }}
                  >
                    {item.label}
                  </h3>
                </div>

                {/* Subtitle / Description / Features when active */}
                {isActive && (
                  <div className="mt-2 space-y-2 animate-in fade-in duration-300">
                    {item.subtitle && (
                      <p className="font-mono text-xs text-[#FFB703] font-semibold tracking-wider">
                        {item.subtitle}
                      </p>
                    )}
                    {item.description && (
                      <p className="font-sans text-xs sm:text-sm text-zinc-200 leading-relaxed max-w-lg bg-black/40 backdrop-blur-sm p-3 rounded-lg border border-white/10">
                        {item.description}
                      </p>
                    )}
                    {item.features && item.features.length > 0 && (
                      <ul className="space-y-1.5 pt-1 bg-black/40 backdrop-blur-sm p-3.5 rounded-xl border border-white/10 max-w-lg">
                        {item.features.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-center gap-2 text-xs font-mono text-zinc-200">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#FFB703] shrink-0 shadow-[0_0_6px_#FFB703]" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
              </div>
            )}
          </Tag>
        );
      })}
    </div>
  );
};

export default AccordionGallery;
