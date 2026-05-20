import { SectionShell } from '../common/SectionShell';import { landingContent as c } from '../../data/landingContent';
export function UsageSection(){return <SectionShell><div className="container"><h2>食用建議</h2><div className="grid-3">{c.usage.map((u,i)=><div className="scenario-card" key={u}><b>STEP {i+1}</b><p>{u}</p></div>)}</div></div></SectionShell>}
