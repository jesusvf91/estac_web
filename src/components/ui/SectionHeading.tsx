import { type ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
  className = "",
}: SectionHeadingProps) {
  const dark = tone === "dark";
  const alignment = align === "center" ? "mx-auto text-center" : "text-left";

  return (
    <div className={`max-w-3xl ${alignment} ${className}`}>
      {eyebrow ? (
        <div className="mb-6 flex items-center gap-4">
          <span className={dark ? "eyebrow text-white/60" : "eyebrow text-muted"}>
            {eyebrow}
          </span>
          <span
            className={`h-px flex-1 ${dark ? "bg-white/20" : "bg-border"}`}
            aria-hidden
          />
        </div>
      ) : null}

      <h2
        className={`display-section font-display font-semibold ${
          dark ? "text-white" : "text-foreground"
        }`}
      >
        {title}
      </h2>

      {description ? (
        <p
          className={`mt-5 max-w-2xl text-base leading-relaxed sm:text-lg ${
            align === "center" ? "mx-auto" : ""
          } ${dark ? "text-white/70" : "text-foreground/70"}`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
