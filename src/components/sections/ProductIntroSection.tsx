import { ProductImage } from '../common/ProductImage';
import { SectionShell } from '../common/SectionShell';
import { landingContent as c } from '../../data/landingContent';
import { productImages } from '../../data/productImages';

export function ProductIntroSection() {
  return (
    <SectionShell id="product-intro" className="intro-stage">
      <div className="container">
        <h2>常舒新選擇 → 護衛君常舒 IgY 益生菌</h2>
        <p>每天一包，舒活穩定；一次兩包，平順有感</p>
        <div className="intro-banner">
          <ProductImage src={productImages.introMain} alt="intro-main" className="intro-main" />
          <ProductImage src={productImages.introSupport} alt="intro-support" className="intro-support" />
        </div>
        <div className="intro-benefits">
          {c.introBenefits.map((x) => (
            <div className="benefit-chip" key={x}>
              <span>✓</span>
              {x}
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
