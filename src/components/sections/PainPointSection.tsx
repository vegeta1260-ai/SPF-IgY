import { SectionShell } from '../common/SectionShell';

const painItems = [
  {
    icon: '🍽️',
    title: '吃太多、吃太少，總覺得負擔感大',
    desc: '飲食節奏忽快忽慢時，身體容易出現卡卡的不適感。',
  },
  {
    icon: '🥢',
    title: '頻繁外食，需要更穩定的後勤支持',
    desc: '面對高油高鹽的日常選擇，補給更需要規律、可持續。',
  },
  {
    icon: '🧠',
    title: '焦慮緊張壓力大，身心靈失去平衡',
    desc: '高壓狀態下，作息與飲食常被打亂，節奏更難維持。',
  },
  {
    icon: '🫧',
    title: '消化道機能欠缺保養，跟不上生活節奏',
    desc: '長期忽略日常保養，容易讓每一天都少了點輕盈感。',
  },
];

export function PainPointSection() {
  return (
    <SectionShell id="pain" className="pain-wrap pain-scenario">
      <div className="container">
        <p className="pain-kicker">日常共鳴場景</p>
        <h2 className="pain-title">你是否也有這些日常困擾？</h2>
        <p className="pain-lead">從餐後到工作節奏，先看見困擾，才能建立更穩定的守護步調。</p>
        <div className="pain-grid">
          {painItems.map((p, i) => (
            <article className="pain-card" key={p.title}>
              <div className="pain-icon">{p.icon}</div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <span className="pain-chip">情境 {i + 1}</span>
            </article>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
