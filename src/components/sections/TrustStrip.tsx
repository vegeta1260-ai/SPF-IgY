import { landingContent as c } from '../../data/landingContent';

export function TrustStrip() {
  const icons = ['🏅', '🩺', '🛡️', '✅'];
  return (
    <section className="trust-strip">
      <div className="container trust-grid">
        {c.trust.map((t, i) => (
          <article className="trust-badge" key={t}>
            <span>{icons[i]}</span>
            <p>{t}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
