export function IconBadge({ icon, text }: { icon: string; text: string }) {
  return <div className="icon-badge"><span>{icon}</span><p>{text}</p></div>;
}
