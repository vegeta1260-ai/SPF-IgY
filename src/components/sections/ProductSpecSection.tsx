import { SectionShell } from '../common/SectionShell';
import { ProductImage } from '../common/ProductImage';
import { productImages } from '../../data/productImages';
import { landingContent as c } from '../../data/landingContent';

export function ProductSpecSection() {
  return (
    <SectionShell>
      <div className="container two-col spec-showcase">
        <ProductImage src={productImages.specMain} alt="spec" />
        <div className="spec-card">
          <h2>產品規格與價格</h2>
          <div className="spec-table">
            {c.specs.map(([k, v]) => (
              <div key={k}>
                <b>{k}</b>
                <span className={k === '原價' ? 'old-price' : k === '售價' ? 'new-price' : ''}>{v}</span>
              </div>
            ))}
          </div>
          <a href="TODO_LINK" className="btn">立即了解</a>
        </div>
      </div>
    </SectionShell>
  );
}
