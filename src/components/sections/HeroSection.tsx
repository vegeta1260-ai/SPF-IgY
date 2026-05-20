import { ProductImage } from '../common/ProductImage';
import { SectionShell } from '../common/SectionShell';
import { landingContent as c } from '../../data/landingContent';
import { productImages } from '../../data/productImages';

const featureIcons = ['◉', '✶', '⬢', '✓'];

export function HeroSection() {
  return (
    <SectionShell id="hero" className="hero hero-poster">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="brand-kicker">淨旦生技｜護衛君</p>
          <p className="hero-tagline">日常保養支持・關鍵時刻應援</p>
          <h1>
            <span className="txt-blue">護衛</span>新境界，<span className="txt-blue">守衛</span>更<span className="txt-orange">全面</span>
          </h1>
          <p className="lead">{c.hero.subtitle}</p>
          <p className="hero-support-copy">{c.hero.description}</p>
          <div className="hero-badges">
            {c.hero.bullets.map((b, i) => (
              <div className="glass-tile" key={b}>
                <span className="chip-icon">{featureIcons[i]}</span>
                <span>{b}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-stage" aria-label="產品主視覺舞台">
          <div className="hero-orb" />
          <div className="hero-warm-glow" />
          <div className="hero-y-pattern" />
          <div className="hero-swoosh hero-swoosh-a" />
          <div className="hero-swoosh hero-swoosh-b" />
          <div className="hero-product-stack">
            <ProductImage src={productImages.heroMain} alt="護衛君產品主圖" className="hero-main" />
            <ProductImage src={productImages.heroSupport} alt="護衛君產品輔圖" className="hero-support" />
            <ProductImage src={productImages.heroAlt} alt="護衛君產品情境圖" className="hero-alt" />
          </div>
          <div className="hero-base" />
        </div>
      </div>
      <div className="hero-wave" aria-hidden="true" />
    </SectionShell>
  );
}
