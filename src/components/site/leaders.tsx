import { ChevronDown, UserRound } from "lucide-react";
import { leaders } from "@/lib/site-content";

export function LeaderCards() {
  return <div className="grid gap-4 md:grid-cols-2">{leaders.map(l => <article key={l.name} className="border border-border bg-background p-6">
    <div className="flex items-start gap-4">
      {l.photo ? <img src={l.photo} alt={l.name} width={64} height={64} className="size-16 shrink-0 rounded-full object-cover object-top ring-1 ring-border" loading="lazy"/> : <div className="grid size-16 shrink-0 place-items-center rounded-sm bg-muted text-brand-navy/40" aria-hidden="true"><UserRound className="size-8"/></div>}
      <div><h3 className="font-display text-xl font-bold text-brand-navy">{l.name}</h3><p className="mt-1 text-sm font-semibold leading-6 text-brand-orange">{l.role}</p></div>
    </div>
    <p className="mt-4 text-sm leading-6 text-muted-foreground"><span className="font-semibold text-brand-navy">Role purpose: </span>{l.purpose}</p>
    <details className="group mt-4 border-t pt-3"><summary className="flex cursor-pointer list-none items-center justify-between text-sm font-bold text-brand-navy">Key focus areas<ChevronDown className="size-4 transition group-open:rotate-180"/></summary>
      <ul className="mt-3 grid gap-1.5 text-sm text-muted-foreground">{l.focus.map(f => <li key={f} className="flex gap-2"><span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-gold"/>{f}</li>)}</ul></details>
  </article>)}</div>;
}
