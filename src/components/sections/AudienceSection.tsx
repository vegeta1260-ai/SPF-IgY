import { SectionShell } from '../common/SectionShell';import { landingContent as c } from '../../data/landingContent';
export function AudienceSection(){return <SectionShell><div className="container"><h2>適合這樣的你</h2><div className="grid-2">{c.audience.map(x=><div className="pill-card" key={x}>{x}</div>)}</div></div></SectionShell>}
