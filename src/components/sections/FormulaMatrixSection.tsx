import { SectionShell } from '../common/SectionShell';
import { landingContent as c } from '../../data/landingContent';
import { ProductImage } from '../common/ProductImage';
import { productImages } from '../../data/productImages';

export function FormulaMatrixSection() {
  const icons = ['🛡️', '🧬', '🫧'];
  return (
    <SectionShell className="matrix-infographic">
      <div className="container">
        <h2>3X3 完整核心配方</h2>
        <p>三效守護，精準捍衛</p>
        <div className="matrix-core">3×3</div>
        <div className="matrix-cards">
          {c.core33.map((x, i) => (
            <article className="matrix-module" key={x}>
              <div>{icons[i]}</div>
              <p>{x}</p>
            </article>
          ))}
        </div>
        <ProductImage src={productImages.formulaMain} alt="formula-main" className="matrix-product" />
      </div>
    </SectionShell>
  );
}
