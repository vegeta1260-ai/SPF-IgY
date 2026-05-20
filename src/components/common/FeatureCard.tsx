export function FeatureCard({ title, desc, icon }: { title: string; desc?: string; icon?: string }) {
  return <article className="feature-card"><div className="feature-icon">{icon || '✦'}</div><h3>{title}</h3>{desc && <p>{desc}</p>}</article>;
}
