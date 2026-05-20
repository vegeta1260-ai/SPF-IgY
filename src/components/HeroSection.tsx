import { landingContent } from '../data/landingContent';
import { productImages } from '../data/productImages';
import { ProductImage } from './ProductImage';
import { SectionContainer } from './SectionContainer';

export function HeroSection() {
  return (
    <div className="bg-gradient-to-b from-[#EAF7FF] via-[#F7FCFF] to-white">
      <SectionContainer className="py-12 sm:py-16 lg:py-20">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="order-1">
            <p className="mb-3 inline-block rounded-full bg-white px-4 py-1 text-sm font-semibold text-[#256FAF] shadow">{landingContent.hero.tag}</p>
            <h1 className="text-4xl font-bold leading-tight text-[#1F6FB2] sm:text-5xl lg:text-6xl">{landingContent.hero.title}</h1>
            <p className="mt-4 text-base text-[#243241] sm:text-lg">{landingContent.hero.subtitle}</p>
            <div className="mt-6 grid gap-3">
              {landingContent.hero.features.map((feature) => (
                <div key={feature} className="rounded-2xl border border-[#D9ECF7] bg-white/85 px-4 py-3 text-sm font-medium text-[#243241] shadow-sm sm:text-base">
                  {feature}
                </div>
              ))}
            </div>
          </div>
          <div className="order-2 grid gap-4 sm:grid-cols-2 lg:pl-8">
            <ProductImage src={productImages.heroMain} alt="護衛君常舒 IgY 益生菌盒裝與粉包" className="w-full rounded-3xl bg-white p-3 shadow-lg sm:col-span-2" />
            <ProductImage src={productImages.heroSupport} alt="護衛君常舒 IgY 開盒與沖泡情境" className="w-full rounded-3xl bg-white p-3 shadow" />
            <ProductImage src={productImages.heroAlt} alt="護衛君常舒 IgY 益生菌盒裝" className="w-full rounded-3xl bg-white p-3 shadow" />
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}
