import { SectionShell } from '../common/SectionShell';
import { SectionHeading } from '../common/SectionHeading';
import { landingContent as c } from '../../data/landingContent';

export function PainPointSection() {
  const icons = ['🍽️', '🥢', '🧠', '🫶'];
  return (
    <SectionShell id="pain" className="pain-wrap">
      <div className="container">
        <SectionHeading title="你是否也有這些日常困擾？" />
        <div className="pain-grid">
          {c.painPoints.map((p, i) => (
            <article className="pain-card" key={p}>
              <div className="pain-icon">{icons[i]}</div>
              <p>{p}</p>
            </article>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
