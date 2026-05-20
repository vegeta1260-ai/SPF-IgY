import { SectionShell } from '../common/SectionShell';
import { landingContent as c } from '../../data/landingContent';

export function GoldenFormulaSection() {
  return (
    <SectionShell id="golden-formula" className="formula-galaxy">
      <div className="container">
        <h2>六大黃金複方再升級</h2>
        <p>護衛新境界，守衛更全面</p>
        <div className="galaxy-core">六大黃金複方</div>
        <div className="formula-orbit">
          {c.goldenFormula.map(([n, d]) => (
            <article className="orbit-item" key={n}>
              <h3>{n}</h3>
              <p>{d}</p>
            </article>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
