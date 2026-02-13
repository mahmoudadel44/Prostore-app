"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function ProductImages({ images }: { images: string[] }) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div>
      <Image
        src={images[selectedImage]}
        alt="Product image"
        width={1000}
        height={1000}
        className={cn(
          "min-h-75 object-cover object-center",
        )}
      />
      <div className="flex gap-2 mt-4">
        {images.map((image, index) => (
          <div
            key={image}
            onClick={() => setSelectedImage(index)}
            className={cn(
              "border rounded overflow-hidden cursor-pointer hover:border-orange-600",
              selectedImage === index && "border-orange-500"
            )}
          >
            <Image
              src={image}
              alt="Product thumbnail"
              width={100}
              height={100}
              // className={cn(index !== 0 && "-scale-x-100")}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
