import { useState } from 'react';

export function ProductImage({ src, alt, className = '' }: { src: string; alt: string; className?: string }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return <div className={`product-image image-fallback ${className}`}>圖片載入中：{alt}</div>;
  }

  return <img src={src} alt={alt} className={`product-image ${className}`} loading="lazy" onError={() => setFailed(true)} />;
}
