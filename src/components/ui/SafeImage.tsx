"use client";

import Image, { ImageProps } from "next/image";
import { useState } from "react";

interface SafeImageProps extends ImageProps {
  fallbackSrc?: string;
}

export function SafeImage({ src, fallbackSrc = "/fallback-image.jpg", alt, ...props }: SafeImageProps) {
  const [error, setError] = useState(false);

  // If there's an error, use a solid color placeholder or a reliable fallback.
  // We generate a dynamic image using the Next.js OG image generator with the headline text.
  const finalSrc = error ? `/api/og?title=${encodeURIComponent(alt || "The Global Grid")}` : src;

  return (
    <Image
      src={finalSrc}
      alt={alt}
      onError={() => setError(true)}
      {...props}
    />
  );
}
