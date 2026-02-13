import type { ReactNode } from "react";

export default function Section(props: { title: string; children: ReactNode }) {
  return (
    <section className="mt-10 first:mt-0">
      <h2 className="text-xl font-semibold tracking-tight text-zinc-900">{props.title}</h2>
      <div className="mt-3 text-base leading-relaxed text-zinc-700">{props.children}</div>
    </section>
  );
}
