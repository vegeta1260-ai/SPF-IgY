import { landingContent as c } from '../../data/landingContent';

const icons = ['🏅', '🥇', '🛡️', '✅'];

export function TrustStrip() {
  return (
    <section className="trust-strip trust-band" aria-label="品質背書">
      <div className="container">
        <p className="trust-kicker">品質背書</p>
        <div className="trust-grid">
          {c.trust.map((t, i) => (
            <article className="trust-badge" key={t}>
              <span className="trust-icon" aria-hidden="true">{icons[i]}</span>
              <p>{t}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
