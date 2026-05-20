import { SectionShell } from '../common/SectionShell';
export function ShippingPaymentSection(){const l=['全館滿 $600 宅配免運','配送方式：新竹物流 - 常溫','付款方式：LINE Pay、Credit Card'];return <SectionShell><div className="container"><h2>配送與付款</h2><div className="grid-3">{l.map(x=><div className="feature-card" key={x}>{x}</div>)}</div></div></SectionShell>}
