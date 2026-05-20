import type { PropsWithChildren } from 'react';

type SectionContainerProps = PropsWithChildren<{ className?: string }>;

export function SectionContainer({ children, className = '' }: SectionContainerProps) {
  return <section className={`mx-auto w-full max-w-[1120px] px-4 sm:px-6 lg:px-8 ${className}`}>{children}</section>;
}
