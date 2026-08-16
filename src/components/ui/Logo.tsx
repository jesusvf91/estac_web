import Image from "next/image";

type LogoVariant = "full" | "mark" | "fullImpulse" | "markImpulse";

type LogoProps = {
  className?: string;
  priority?: boolean;
  variant?: LogoVariant;
};

const variants = {
  full: {
    src: "/logo.svg",
    alt: "Estac",
    width: 546,
    height: 198,
  },
  mark: {
    src: "/logo-mark.svg",
    alt: "Estac",
    width: 514,
    height: 110,
  },
  fullImpulse: {
    src: "/logo-impulse.svg",
    alt: "Estac",
    width: 529,
    height: 149,
  },
  markImpulse: {
    src: "/logo-mark-impulse.svg",
    alt: "Estac",
    width: 521,
    height: 107,
  },
} as const;

export function Logo({
  className = "h-10",
  priority = false,
  variant = "mark",
}: LogoProps) {
  const asset = variants[variant];

  return (
    <Image
      src={asset.src}
      alt={asset.alt}
      width={asset.width}
      height={asset.height}
      className={`w-auto ${className}`}
      style={{ width: "auto" }}
      priority={priority}
      unoptimized
    />
  );
}
