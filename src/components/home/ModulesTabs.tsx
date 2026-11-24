"use client";

import { useState } from "react";
import Icon from "../Icon";
import { SITE } from "@/config/site";
import { HOME, MODULES } from "@/content/content";
import { TONES } from "@/lib/tones";

/** Funcionalidades en pestañas (FuncionalidadesSaaS en producción). */
export default function ModulesTabs() {
  const m = HOME.modules;
  const [activeId, setActiveId] = useState(MODULES[0].id);
  const index = MODULES.findIndex((mod) => mod.id === activeId);
  const active = MODULES[index];
  const tone = TONES[active.tone];

  return (
    <section id="funcionalidades" className="section bg-white" aria-labelledby="modules-title">
      <div className="container-page">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="mb-4 inline-block rounded-full bg-brand-50 px-4 py-1.5 text-sm font-bold text-brand-700">{m.eyebrow}</span>
          <h2 id="modules-title" className="section-title">
            {m.title} <span className="text-brand-gradient">{m.titleHighlight}</span>
          </h2>
          <p className="mt-4 text-lg text-pretty text-muted">{m.subtitle}</p>
        </div>

        <div className="flex flex-col gap-6 lg:flex-row">
          <div className="flex flex-row flex-wrap gap-2 lg:w-72 lg:shrink-0 lg:flex-col" role="tablist" aria-label="Módulos del sistema">
            {MODULES.map((mod) => {
              const isActive = mod.id === activeId;
              const t = TONES[mod.tone];
              return (
                <button
                  key={mod.id}
                  type="button"
                  role="tab"
                  id={`tab-${mod.id}`}
                  aria-selected={isActive}
                  aria-controls="module-panel"
                  onClick={() => setActiveId(mod.id)}
                  className={`flex items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-semibold transition-all duration-200 lg:w-full ${
                    isActive
                      ? `bg-gradient-to-r ${t.gradient} text-white shadow-lg`
                      : "border border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-lg ${isActive ? "bg-white/20 text-white" : `${t.bg} ${t.text}`}`}>
                    <Icon name={mod.icon} className="h-4 w-4" />
                  </span>
                  <span className="hidden sm:inline">{mod.title}</span>
                  {isActive && <Icon name="chevron" className="ml-auto hidden h-4 w-4 lg:block" />}
                </button>
              );
            })}
          </div>

          <div className="min-w-0 flex-1">
            <div
              key={active.id}
              id="module-panel"
              role="tabpanel"
              aria-labelledby={`tab-${active.id}`}
              className={`animate-fade-in overflow-hidden rounded-2xl border-2 ${tone.border} shadow-lg`}
            >
              <div className={`bg-gradient-to-r ${tone.gradient} px-6 py-7 md:px-8`}>
                <div className="mb-3 flex items-center gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-white/20 text-white">
                    <Icon name={active.icon} className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-white md:text-2xl">{active.title}</h3>
                    <p className="text-sm text-white/80">{active.subtitle}</p>
                  </div>
                </div>
                <p className="leading-relaxed text-white/90">{active.description}</p>
              </div>
              <div className="bg-white p-6 md:p-8">
                <h4 className="mb-4 text-xs font-bold tracking-widest text-slate-400 uppercase">{m.includedLabel}</h4>
                <div className="grid gap-3 sm:grid-cols-2">
                  {active.features.map((f) => (
                    <div key={f} className={`flex items-start gap-3 rounded-xl border p-3 ${tone.bg} ${tone.border}`}>
                      <Icon name="check" className={`mt-0.5 h-4 w-4 shrink-0 ${tone.text}`} />
                      <span className="text-sm font-medium text-slate-700">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setActiveId(MODULES[index - 1].id)}
                disabled={index === 0}
                className="text-sm font-semibold text-slate-500 transition-colors hover:text-slate-800 disabled:cursor-not-allowed disabled:opacity-30"
              >
                ← Anterior
              </button>
              <span className="text-xs text-slate-400">
                {index + 1} / {MODULES.length} módulos
              </span>
              <button
                type="button"
                onClick={() => setActiveId(MODULES[index + 1].id)}
                disabled={index === MODULES.length - 1}
                className="text-sm font-semibold text-slate-500 transition-colors hover:text-slate-800 disabled:cursor-not-allowed disabled:opacity-30"
              >
                Siguiente →
              </button>
            </div>
          </div>
        </div>

        <div className="mt-14 rounded-3xl bg-gradient-to-br from-slate-50 to-blue-50 p-8 text-center">
          <p className="text-xl font-bold text-ink">{m.ctaTitle}</p>
          <p className="mt-1 mb-6 text-muted">{m.ctaText}</p>
          <a href={SITE.signupUrl} className="btn-primary btn-lg">
            {m.ctaButton}
            <Icon name="arrow" className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
