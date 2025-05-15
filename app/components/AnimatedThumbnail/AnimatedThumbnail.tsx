import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import clsx from "clsx";
import { BREAKPOINTS } from "@/app/constants/media";

interface AnimatedThumbnailProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

export default function AnimatedThumbnail({
  src,
  alt,
  width,
  height,
  className,
}: AnimatedThumbnailProps) {
  const thumbnailRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!thumbnailRef.current) return;

      const whiteBlock = thumbnailRef.current.querySelector(".white-block");
      const blackBlock = thumbnailRef.current.querySelector(".black-block");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: thumbnailRef.current,
          start: "top +=90%",
          end: "bottom bottom",
        },
      });

      const thumbnailDuration = 0.6;

      tl.to(whiteBlock, {
        y: "-100%",
        duration: thumbnailDuration,
        ease: "power3.out",
      }).to(
        blackBlock,
        {
          y: "-200%",
          duration: thumbnailDuration * 2,
          ease: "power3.out",
        },
        "<"
      );
    },
    { scope: thumbnailRef }
  );

  return (
    <div className={clsx("animated-thumbnail", className)} ref={thumbnailRef}>
      <Image src={src} alt={alt} width={width} height={height} />
      <span className="--block white-block"></span>
      <span className="--block black-block"></span>
    </div>
  );
}
