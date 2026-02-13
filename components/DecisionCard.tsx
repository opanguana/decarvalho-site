import Link from "next/link";

export type DecisionCardProps = {
  title: string;
  description: string;
  audience: string;
  whenToChoose: string[];
  href: string;
};

export default function DecisionCard(props: DecisionCardProps) {
  return (
    <Link
      href={props.href}
      className="group block h-full rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-opacity hover:opacity-95"
    >
      <div className="flex h-full flex-col">
        <div>
          <h3 className="text-lg font-semibold tracking-tight text-zinc-900">{props.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-zinc-700">{props.description}</p>
        </div>

        <div className="mt-5">
          <div className="text-xs font-semibold uppercase tracking-wide text-zinc-500">Best for</div>
          <p className="mt-2 text-sm text-zinc-700">{props.audience}</p>
        </div>

        <div className="mt-5">
          <div className="text-xs font-semibold uppercase tracking-wide text-zinc-500">Choose this when</div>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700">
            {props.whenToChoose.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="mt-6 text-sm font-medium text-zinc-900">
          Explore <span className="inline-block translate-x-0 transition-transform group-hover:translate-x-1">→</span>
        </div>
      </div>
    </Link>
  );
}
