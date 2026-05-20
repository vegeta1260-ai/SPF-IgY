import { SectionShell } from '../common/SectionShell';import { landingContent as c } from '../../data/landingContent';
export function FaqSection(){return <SectionShell id="faq"><div className="container"><h2>FAQ</h2>{c.faq.map(([q,a])=><details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div></SectionShell>}
