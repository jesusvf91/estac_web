import Image from "next/image";

type LogoVariant = "full" | "mark" | "fullImpulse" | "markImpulse";

type LogoProps = {
  className?: string;
  priority?: boolean;
  variant?: LogoVariant;
};

/** Prefijo de GitHub Pages (ej. /estac_web). Vacío en local. */
const basePath = process.env.PAGES_BASE_PATH || "";

function asset(path: string) {
  return `${basePath}${path}`;
}

const variants = {
  full: {
    src: asset("/logo.svg"),
    alt: "Estac",
    width: 546,
    height: 198,
  },
  mark: {
    src: asset("/logo-mark.svg"),
    alt: "Estac",
    width: 514,
    height: 110,
  },
  fullImpulse: {
    src: asset("/logo-impulse.svg"),
    alt: "Estac",
    width: 529,
    height: 149,
  },
  markImpulse: {
    src: asset("/logo-mark-impulse.svg"),
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
  const logo = variants[variant];

  return (
    <Image
      src={logo.src}
      alt={logo.alt}
      width={logo.width}
      height={logo.height}
      className={`w-auto ${className}`}
      style={{ width: "auto" }}
      priority={priority}
      unoptimized
    />
  );
}
