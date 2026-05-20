import { landingContent as c } from '../../data/landingContent';
export function Header() { return <header className="sticky-header"><div className="container"><p className="brand">{c.brand}</p><nav>{c.nav.map((n)=><a key={n.href} href={n.href}>{n.label}</a>)}</nav><a href="#cta" className="btn">立即了解</a></div></header>; }
