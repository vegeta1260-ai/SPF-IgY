import { landingContent } from '../data/landingContent';
import { productImages } from '../data/productImages';
import { ProductImage } from './ProductImage';
import { SectionContainer } from './SectionContainer';

export function FormulaSection() {
  return (
    <SectionContainer className="py-12 sm:py-16">
      <div className="rounded-3xl bg-gradient-to-b from-[#EAF7FF] to-white p-6 sm:p-8">
        <h2 className="text-3xl font-bold text-[#1F6FB2] sm:text-4xl">{landingContent.formula.title}</h2>
        <p className="mt-3 text-[#243241]">{landingContent.formula.subtitle}</p>
        <div className="mt-8 grid items-center gap-6 lg:grid-cols-[1.2fr_1fr]">
          <div className="rounded-3xl border border-[#D9ECF7] bg-white p-6">
            <div className="grid grid-cols-3 gap-3">
              {Array.from({ length: 9 }).map((_, idx) => (
                <div key={idx} className="aspect-square rounded-xl bg-[#EEF8FF]" />
              ))}
            </div>
            <p className="mt-4 text-center text-sm font-semibold text-[#256FAF]">3 × 3 CORE MATRIX</p>
          </div>
          <div className="grid gap-3">
            <ProductImage src={productImages.formulaMain} alt="粉末與盒裝展示" className="w-full rounded-2xl bg-white p-2 shadow" />
            <ProductImage src={productImages.formulaSupport} alt="粉包與粉末展示" className="w-full rounded-2xl bg-white p-2 shadow" />
            <ProductImage src={productImages.extra} alt="粉包內容展示" className="w-full rounded-2xl bg-white p-2 shadow" />
          </div>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {landingContent.formula.items.map((item) => (
            <article key={item.title} className="rounded-2xl border border-[#D9ECF7] bg-white p-4">
              <p className="text-lg font-bold text-[#1F6FB2]">{item.title}</p>
              <p className="mt-2 text-sm text-[#243241]">{item.content}</p>
            </article>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
