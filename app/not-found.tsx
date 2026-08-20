import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-20 text-center bg-black text-white">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-500/30 bg-red-500/10 text-red-400 font-mono text-xs mb-6 uppercase">
        // ERROR 404
      </div>
      <h1 className="text-4xl sm:text-6xl font-extrabold font-sans">
        Página no encontrada
      </h1>
      <p className="mt-4 text-zinc-400 font-mono text-sm max-w-md mx-auto">
        El recurso o enlace solicitado no existe en los servidores de SPRECTRUMP COLOMBIA.
      </p>
      <div className="mt-8">
        <Link
          href="/"
          className="px-6 py-3 rounded-lg bg-gradient-electric text-black font-semibold text-sm hover:opacity-90 transition-all shadow-glow-cyan-sm font-sans inline-block"
        >
          Volver al Inicio
        </Link>
      </div>
    </main>
  );
}
