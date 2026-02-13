import type { ReactNode } from "react";

export default function PageShell(props: { children: ReactNode }) {
  return (
    <main className="container mx-auto">
      <div className="py-12 md:py-16">{props.children}</div>
    </main>
  );
}
