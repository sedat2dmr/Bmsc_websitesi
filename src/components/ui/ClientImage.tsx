"use client";

import Image from "next/image";

interface ClientImageProps {
  src: string;
  alt: string;
  fill?: boolean;
  className?: string;
  priority?: boolean;
  fallbackClassName?: string;
}

export function ClientImage({ src, alt, fill, className, priority, fallbackClassName }: ClientImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      className={className}
      priority={priority}
      onError={(e) => {
        const target = e.target as HTMLImageElement;
        target.style.display = "none";
        if (fallbackClassName && target.parentElement) {
          target.parentElement.className = fallbackClassName;
        }
      }}
    />
  );
}
