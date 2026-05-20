type ProductImageProps = { src: string; alt: string; className?: string };

export function ProductImage({ src, alt, className = '' }: ProductImageProps) {
  return <img src={src} alt={alt} loading="lazy" className={className} />;
}
