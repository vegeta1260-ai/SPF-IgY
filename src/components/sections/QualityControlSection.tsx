import { SectionShell } from '../common/SectionShell';
export function QualityControlSection(){const list=['達美國農業部與歐洲藥品管理局標準','連續 10 年通過 ISO9001 審核','五大防疫控管措施','每日例行 88 項標準作業流程','每年五次內、外部稽核和血清測試','有效力價與食品安全檢測'];return <SectionShell id="quality"><div className="container"><h2>疫苗等級的嚴謹，最高品質的保證</h2><div className="checklist">{list.map(x=><div key={x}>✓ {x}</div>)}</div></div></SectionShell>}
