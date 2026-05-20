import { landingContent as c } from '../../data/landingContent';import { IconBadge } from '../common/IconBadge';
export function TrustStrip(){return <section className="trust-strip"><div className="container grid-4">{c.trust.map((t,i)=><IconBadge key={t} icon={['🏅','🩺','🛡️','✅'][i]} text={t}/> )}</div></section>}
