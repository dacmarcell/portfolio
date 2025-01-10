import Image from "next/image";
import { useState } from "react";

interface ZoomableImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export default function ZoomableImage({
  src,
  alt,
  width,
  height,
}: ZoomableImageProps) {
  const [isZoomed, setIsZoomed] = useState(false);

  const toggleZoom = () => {
    setIsZoomed((prev) => !prev);
  };

  return (
    <div
      onClick={toggleZoom}
      className={`relative overflow-hidden cursor-pointer ${
        isZoomed ? "z-50" : ""
      }`}
    >
      <Image
        src={src}
        alt={alt}
        width={isZoomed ? width * 2 : width}
        height={isZoomed ? height * 2 : height}
        className={`w-full h-auto rounded transition-transform duration-300 ${
          isZoomed ? "scale-150" : "scale-100"
        }`}
        style={{ objectFit: "cover" }}
      />
    </div>
  );
}
