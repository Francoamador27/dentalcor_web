"use client";

import { useState } from "react";
import SectionHeading from "./SectionHeading";
import { HOME } from "@/content/content";
import { formatARS } from "@/lib/contact";

const WEEKS_PER_MONTH = 4.3;

export default function CostCalculator() {
  const c = HOME.calculator;
  const [appointments, setAppointments] = useState(c.defaults.appointments);
  const [rate, setRate] = useState(c.defaults.noShowRate);
  const [fee, setFee] = useState(c.defaults.averageFee);

  const missed = appointments * WEEKS_PER_MONTH * (rate / 100);
  const monthly = Math.round(missed * fee);

  return (
    <section className="section" aria-labelledby="calc-title">
      <div className="container-page">
        <SectionHeading id="calc-title" title={c.title} subtitle={c.subtitle} />
        <div className="reveal mx-auto mt-10 grid max-w-4xl gap-6 rounded-3xl border border-line bg-white p-6 md:grid-cols-2 md:p-10">
          <div className="space-y-6">
            <NumberField id="calc-appointments" label={c.fields.appointments} value={appointments} onChange={setAppointments} min={1} max={500} />
            <div>
              <label htmlFor="calc-rate" className="flex justify-between text-sm font-medium text-ink">
                {c.fields.noShowRate} <span className="text-brand-700">{rate}%</span>
              </label>
              <input
                id="calc-rate"
                type="range"
                min={0}
                max={50}
                value={rate}
                onChange={(e) => setRate(Number(e.target.value))}
                className="mt-3 w-full accent-brand-600"
              />
            </div>
            <NumberField id="calc-fee" label={c.fields.averageFee} value={fee} onChange={setFee} min={0} max={10000000} step={1000} prefix="$" />
          </div>

          <div className="bg-brand-gradient flex flex-col justify-center rounded-2xl p-6 text-white" aria-live="polite">
            <p className="text-sm text-brand-100">{c.resultMonthly}</p>
            <p className="mt-1 text-4xl font-bold tracking-tight">{formatARS(monthly)}</p>
            <p className="mt-1 text-sm text-brand-100">≈ {Math.round(missed)} turnos perdidos por mes</p>
            <p className="mt-4 text-sm text-brand-100">
              {c.resultYearly}: <span className="font-semibold text-white">{formatARS(monthly * 12)}</span>
            </p>
            <p className="mt-6 border-t border-white/20 pt-4 text-sm">{c.resultHint}</p>
          </div>
          <p className="text-xs text-muted md:col-span-2">{c.disclaimer}</p>
        </div>
      </div>
    </section>
  );
}

type FieldProps = {
  id: string;
  label: string;
  value: number;
  onChange: (v: number) => void;
  min: number;
  max: number;
  step?: number;
  prefix?: string;
};

function NumberField({ id, label, value, onChange, min, max, step = 1, prefix }: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium text-ink">
        {label}
      </label>
      <div className="mt-2 flex items-center rounded-xl border border-line focus-within:ring-2 focus-within:ring-brand-500">
        {prefix && <span className="pl-3 text-muted">{prefix}</span>}
        <input
          id={id}
          type="number"
          inputMode="numeric"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Math.min(max, Math.max(min, Number(e.target.value) || 0)))}
          className="w-full rounded-xl bg-transparent px-3 py-2.5 text-ink outline-none"
        />
      </div>
    </div>
  );
}
