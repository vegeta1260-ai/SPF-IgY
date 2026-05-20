import { ProductImage } from '../common/ProductImage';
import { SectionShell } from '../common/SectionShell';
import { landingContent as c } from '../../data/landingContent';
import { productImages } from '../../data/productImages';

export function HeroSection() {
  return (
    <SectionShell id="hero" className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="brand-kicker">淨旦生技｜護衛君</p>
          <h1>
            <span className="txt-blue">護衛</span>新境界，<span className="txt-blue">守衛</span>更<span className="txt-orange">全面</span>
          </h1>
          <p className="lead">{c.hero.subtitle}</p>
          <p>{c.hero.description}</p>
          <div className="hero-badges">
            {c.hero.bullets.map((b) => (
              <div className="glass-tile" key={b}>
                <span>✦</span>
                {b}
              </div>
            ))}
          </div>
        </div>

        <div className="hero-stage">
          <div className="hero-orb" />
          <div className="hero-y-pattern" />
          <div className="hero-product-stack">
            <ProductImage src={productImages.heroMain} alt="hero" className="hero-main" />
            <ProductImage src={productImages.heroSupport} alt="support" className="hero-support" />
            <ProductImage src={productImages.heroAlt} alt="alt" className="hero-alt" />
          </div>
          <div className="hero-base" />
        </div>
      </div>
    </SectionShell>
  );
}
