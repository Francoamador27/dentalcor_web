"use client";

import { useState } from "react";

/** Carga el iframe de YouTube recién al hacer clic (más liviano). */
export default function YouTubeFacade({ videoId, title }: { videoId: string; title: string }) {
  const [active, setActive] = useState(false);

  if (active) {
    return (
      <iframe
        className="h-full w-full"
        src={`https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1&autoplay=1`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    );
  }

  return (
    <button type="button" className="group relative block h-full w-full cursor-pointer" onClick={() => setActive(true)} aria-label={`Reproducir ${title}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
        alt={title}
        className="h-full w-full object-cover"
        loading="lazy"
        width={480}
        height={360}
      />
      <span className="absolute inset-0 grid place-items-center bg-black/20">
        <span className="grid h-16 w-16 place-items-center rounded-full bg-red-600 shadow-lg transition-colors group-hover:bg-red-700">
          <svg className="ml-1 h-7 w-7 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
      </span>
    </button>
  );
}
