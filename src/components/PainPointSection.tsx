import { landingContent } from '../data/landingContent';
import { productImages } from '../data/productImages';
import { ProductImage } from './ProductImage';
import { SectionContainer } from './SectionContainer';

export function PainPointSection() {
  return (
    <SectionContainer className="py-12 sm:py-16">
      <h2 className="text-3xl font-bold text-[#1F6FB2] sm:text-4xl">{landingContent.painPoint.title}</h2>
      <p className="mt-3 text-[#243241]">{landingContent.painPoint.subtitle}</p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {landingContent.painPoint.cards.map((item, idx) => (
          <article key={item} className="rounded-3xl border border-[#D9ECF7] bg-gradient-to-b from-white to-[#F7FCFF] p-5 shadow-sm">
            <span className="text-sm font-semibold text-[#F59A23]">0{idx + 1}</span>
            <p className="mt-2 text-lg font-semibold text-[#243241]">{item}</p>
          </article>
        ))}
      </div>
      <div className="mt-8 grid gap-6 rounded-3xl border border-[#D9ECF7] bg-white p-6 shadow-sm lg:grid-cols-[1.3fr_1fr]">
        <div>
          <p className="text-xl font-bold text-[#1F6FB2]">{landingContent.painPoint.productEntrance}</p>
          <p className="mt-3 text-[#243241]">{landingContent.painPoint.usageLine}</p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
          <ProductImage src={productImages.heroAlt} alt="產品展示" className="w-full rounded-2xl bg-[#F7FCFF] p-2" />
          <ProductImage src={productImages.heroSupport} alt="開盒展示" className="w-full rounded-2xl bg-[#F7FCFF] p-2" />
        </div>
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {landingContent.painPoint.benefits.map((benefit) => (
          <div key={benefit} className="rounded-2xl border border-[#D9ECF7] bg-[#EEF8FF] px-4 py-3 text-sm font-medium text-[#243241]">
            {benefit}
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
