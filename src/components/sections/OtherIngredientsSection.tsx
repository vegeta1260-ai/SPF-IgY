import { SectionShell } from '../common/SectionShell';
export function OtherIngredientsSection(){const list=['約氏乳桿菌 LJ88','麩醯胺酸','綜合消化酵素','大豆發酵物','6 大專利益生菌'];return <SectionShell><div className="container"><h2>其他成分</h2><div className="grid-3">{list.map(x=><div className="pill-card" key={x}>{x}</div>)}</div></div></SectionShell>}
