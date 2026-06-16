"use client";

import Image, { ImageProps } from "next/image";
import { useState } from "react";

interface SafeImageProps extends ImageProps {
  fallbackSrc?: string;
}

export function SafeImage({ src, fallbackSrc = "/fallback-image.jpg", alt, ...props }: SafeImageProps) {
  const [error, setError] = useState(false);

  // If there's an error, use a solid color placeholder or a reliable fallback.
  // We'll use a reliable fallback from Unsplash that we know works, 
  // or a placeholder using a generic data URL or color block.
  const finalSrc = error ? "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&q=80" : src;

  return (
    <Image
      src={finalSrc}
      alt={alt}
      onError={() => setError(true)}
      {...props}
    />
  );
}
