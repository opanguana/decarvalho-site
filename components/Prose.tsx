import type { ReactNode } from "react";

export default function Prose(props: { children: ReactNode }) {
  return <div className="max-w-3xl text-zinc-700 leading-relaxed">{props.children}</div>;
}
