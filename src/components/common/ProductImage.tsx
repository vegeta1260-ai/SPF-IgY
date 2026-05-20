export function ProductImage({ src, alt, className = '' }: { src: string; alt: string; className?: string }) {
  return <img src={src} alt={alt} className={`product-image ${className}`} loading="lazy" />;
}
