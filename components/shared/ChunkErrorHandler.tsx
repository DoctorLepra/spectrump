"use client";

import { useEffect } from "react";

/**
 * Componente que intercepta errores de carga de chunks (ChunkLoadError)
 * en tiempo de desarrollo y producción.
 *
 * Cuando Next.js recompila o el navegador despierta de un estado inactivo,
 * los chunks antiguos pueden ser descartados por el servidor o tener hashes desactualizados.
 * Este manejador detecta dicho fallo y recarga automáticamente la página de forma limpia
 * para obtener los chunks actualizados, evitando bucles infinitos con un guard de tiempo.
 */
export function ChunkErrorHandler() {
  useEffect(() => {
    const handleChunkError = (error: any) => {
      const errorMessage =
        error?.message ||
        error?.reason?.message ||
        (typeof error === "string" ? error : "");

      const errorName = error?.name || error?.reason?.name || "";

      const isChunkLoadError =
        errorName === "ChunkLoadError" ||
        errorMessage.includes("Loading chunk") ||
        errorMessage.includes("ChunkLoadError") ||
        errorMessage.includes("loading chunk") ||
        (errorMessage.includes("/_next/static/chunks/") && errorMessage.includes("failed"));

      if (isChunkLoadError) {
        const lastReload = sessionStorage.getItem("chunk_reload_timestamp");
        const now = Date.now();

        // Evita bucles infinitos permitiendo recarga solo si han pasado más de 8 segundos
        if (!lastReload || now - parseInt(lastReload, 10) > 8000) {
          sessionStorage.setItem("chunk_reload_timestamp", now.toString());
          console.warn(
            "[ChunkErrorHandler] ChunkLoadError detectado tras inactividad. Sincronizando y recargando chunks frescos..."
          );
          window.location.reload();
        }
      }
    };

    const onError = (event: ErrorEvent) => {
      handleChunkError(event.error || event);
    };

    const onUnhandledRejection = (event: PromiseRejectionEvent) => {
      handleChunkError(event.reason);
    };

    window.addEventListener("error", onError);
    window.addEventListener("unhandledrejection", onUnhandledRejection);

    return () => {
      window.removeEventListener("error", onError);
      window.removeEventListener("unhandledrejection", onUnhandledRejection);
    };
  }, []);

  return null;
}
