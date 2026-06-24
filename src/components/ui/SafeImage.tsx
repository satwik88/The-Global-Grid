"use client";

import Image, { ImageProps } from "next/image";
import { useState } from "react";

interface SafeImageProps extends ImageProps {
  fallbackSrc?: string;
}

export function SafeImage({ src, fallbackSrc = "/fallback-image.jpg", alt, ...props }: SafeImageProps) {
  const [error, setError] = useState(false);

  const isMissing = !src;

  const finalSrc = (error || isMissing) ? `/api/og?title=${encodeURIComponent(alt || "The Global Grid")}` : src;

  return (
    <Image
      src={finalSrc}
      alt={alt}
      onError={() => setError(true)}
      unoptimized={error || isMissing || props.unoptimized}
      {...props}
    />
  );
}
