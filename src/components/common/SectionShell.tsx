import { ReactNode } from 'react';

export function SectionShell({ id, className = '', children }: { id?: string; className?: string; children: ReactNode }) {
  return <section id={id} className={`section-shell ${className}`}>{children}</section>;
}
