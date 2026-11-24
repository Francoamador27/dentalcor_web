import Icon from "../Icon";
import { HOME } from "@/content/content";
import { TONES } from "@/lib/tones";

/** Mockup del panel (HTML/CSS, sin imágenes ni JS). Datos ficticios. */
export default function DashboardMockup() {
  const d = HOME.dashboard;
  return (
    <div className="relative animate-fade-up [animation-delay:150ms]" aria-hidden="true">
      <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-blue-500/20 to-cyan-400/20 blur-3xl" />
      <div className="relative overflow-hidden rounded-3xl border border-slate-200/60 bg-white shadow-2xl">
        <div className="bg-brand-gradient flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-white/20 text-white">
              <Icon name="tooth" className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm font-extrabold text-white">{d.title}</p>
              <p className="text-xs text-white/70">{d.subtitle}</p>
            </div>
          </div>
          <div className="flex gap-1.5">
            <span className="h-3 w-3 animate-pulse rounded-full bg-emerald-400" />
            <span className="h-3 w-3 rounded-full bg-white/30" />
            <span className="h-3 w-3 rounded-full bg-white/30" />
          </div>
        </div>

        <div className="space-y-4 p-5">
          <div className="grid grid-cols-3 gap-3">
            {d.stats.map((s) => (
              <div key={s.label} className={`${TONES[s.tone].bg} rounded-2xl p-3 text-center`}>
                <Icon name={s.icon} className={`mx-auto mb-1 h-5 w-5 ${TONES[s.tone].text}`} />
                <p className={`text-lg font-extrabold ${TONES[s.tone].text}`}>{s.value}</p>
                <p className="text-xs font-medium text-slate-500">{s.label}</p>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
            <p className="mb-3 flex items-center gap-2 text-xs font-extrabold text-slate-800">
              <Icon name="calendar" className="h-4 w-4 text-brand-600" />
              Agenda de hoy
            </p>
            <ul className="space-y-2">
              {d.appointments.map((a, i) => (
                <li
                  key={a.time}
                  className="mockup-cycle flex items-center gap-3 rounded-xl border border-transparent bg-white/60 p-2.5"
                  style={{ animationDelay: `${i * 2}s` }}
                >
                  <span className={`h-10 w-1.5 shrink-0 rounded-full ${a.color}`} />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between">
                      <span className="truncate text-xs font-bold text-slate-800">{a.patient}</span>
                      <span className="ml-2 shrink-0 text-[10px] text-slate-400">{a.time}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] text-slate-500">
                        {a.treatment} · {a.doctor}
                      </span>
                      <span
                        className={`ml-1 shrink-0 rounded-full px-1.5 py-0.5 text-[10px] font-bold ${
                          a.paid ? "bg-emerald-100 text-emerald-700" : "bg-orange-100 text-orange-700"
                        }`}
                      >
                        {a.paid ? "Cobrado" : "Pendiente"}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
            <p className="mb-3 flex items-center gap-2 text-xs font-extrabold text-slate-800">
              <Icon name="bell" className="h-4 w-4 animate-pulse text-pink-500" />
              Notificaciones automáticas
            </p>
            <ul className="space-y-2">
              {d.notifications.map((n) => (
                <li key={n.text} className="flex items-start gap-3 rounded-xl border border-slate-100 bg-white p-3">
                  <Icon name={n.icon} className={`mt-0.5 h-4 w-4 shrink-0 ${TONES[n.tone].text}`} />
                  <div className="min-w-0">
                    <p className="text-xs leading-tight font-bold text-slate-800">{n.text}</p>
                    <p className="mt-0.5 text-[10px] leading-tight text-slate-500">{n.sub}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-emerald-100 bg-gradient-to-br from-emerald-50 to-teal-50 p-4">
            <div className="mb-3 flex items-center justify-between">
              <p className="flex items-center gap-2 text-xs font-extrabold text-slate-800">
                <Icon name="trending" className="h-4 w-4 text-emerald-600" />
                Resumen financiero
              </p>
              <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-bold text-emerald-600">Este mes</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-600">Ingresos cobrados</span>
              <span className="text-sm font-extrabold text-emerald-600">$362.000</span>
            </div>
            <div className="mt-2 h-2 w-full rounded-full bg-emerald-200">
              <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500" />
            </div>
            <div className="mt-2 flex justify-between text-[10px]">
              <span className="text-slate-500">Cobrado: 75%</span>
              <span className="font-bold text-orange-600">Pendiente: $120.000</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
