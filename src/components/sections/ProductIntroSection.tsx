import { ProductImage } from '../common/ProductImage';
import { SectionShell } from '../common/SectionShell';
import { productImages } from '../../data/productImages';

const summaryTags = ['高活性 IgY 蛋黃粉', '益生菌複方', '日常保養支持', '關鍵時刻補給'];

const benefits = [
  {
    icon: '⏱️',
    title: '餐後品質',
    subtitle: '找回日常節奏、規律順暢',
    desc: '幫助你在忙碌生活中，建立更穩定的日常補給節奏。',
  },
  {
    icon: '🍜',
    title: '餐餐外食',
    subtitle: '安心享受美食、自在輕盈',
    desc: '面對多變飲食型態，提供溫和且可持續的保養支持。',
  },
  {
    icon: '🧭',
    title: '緊張壓力',
    subtitle: '穩定關鍵時刻，沉著應對',
    desc: '在高壓與節奏切換中，維持更有秩序的補給安排。',
  },
  {
    icon: '🌿',
    title: '啟動保養',
    subtitle: '消化道機能維持最佳狀態',
    desc: '從日常開始累積，讓每一天都更容易持續舒活節奏。',
  },
];

export function ProductIntroSection() {
  return (
    <SectionShell id="product-intro" className="intro-stage intro-poster">
      <div className="container">
        <p className="intro-kicker">產品登場</p>
        <h2>常舒新選擇 → 護衛君常舒 IgY 益生菌</h2>
        <p className="intro-subtitle">每天一包，舒活穩定；一次兩包，平順有感</p>

        <div className="intro-summary-row">
          {summaryTags.map((tag) => (
            <span key={tag} className="intro-summary-chip">{tag}</span>
          ))}
        </div>

        <div className="intro-banner">
          <div className="intro-disc" />
          <div className="intro-halo" />
          <ProductImage src={productImages.introMain} alt="護衛君常舒主產品" className="intro-main" />
          <ProductImage src={productImages.introSupport} alt="護衛君常舒輔助產品" className="intro-support" />
        </div>

        <p className="intro-midline">從日常到關鍵時刻，打造更穩定的守護節奏</p>

        <div className="intro-benefits">
          {benefits.map((x) => (
            <article className="benefit-module" key={x.title}>
              <span className="benefit-icon">{x.icon}</span>
              <h3>{x.title}</h3>
              <p className="benefit-subtitle">{x.subtitle}</p>
              <p className="benefit-desc">{x.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
