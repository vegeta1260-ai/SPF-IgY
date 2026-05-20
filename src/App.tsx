import { FormulaSection } from './components/FormulaSection';
import { HeroSection } from './components/HeroSection';
import { PainPointSection } from './components/PainPointSection';
import { SectionContainer } from './components/SectionContainer';
import { landingContent } from './data/landingContent';

export default function App() {
  return (
    <main className="min-h-screen bg-[#F7FCFF] text-[#243241]">
      <HeroSection />
      <PainPointSection />
      <FormulaSection />
      <SectionContainer className="pb-16">
        <div id="contact" className="rounded-3xl border border-[#D9ECF7] bg-white px-6 py-10 text-center shadow-sm">
          <p className="text-2xl font-bold text-[#1F6FB2]">{landingContent.cta.title}</p>
          <p className="mt-3">{landingContent.cta.subtitle}</p>
          <a href={landingContent.cta.link} className="mt-6 inline-block rounded-full bg-[#F59A23] px-6 py-3 font-semibold text-white">
            {landingContent.cta.button}
          </a>
          <p className="mt-3 text-xs text-[#256FAF]">{landingContent.cta.note}</p>
        </div>
      </SectionContainer>
    </main>
  );
}
