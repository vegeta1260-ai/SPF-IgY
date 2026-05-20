import { useState } from 'react';

type ProductImageProps = { src: string; alt: string; className?: string };

export function ProductImage({ src, alt, className = '' }: ProductImageProps) {
  const [missing, setMissing] = useState(false);

  if (missing) {
    return (
      <div className={`flex min-h-40 items-center justify-center rounded-2xl border border-dashed border-[#D9ECF7] bg-white/80 p-6 text-sm text-[#256FAF] ${className}`}>
        產品圖待上傳
      </div>
    );
  }

  return <img src={src} alt={alt} loading="lazy" className={className} onError={() => setMissing(true)} />;
}
