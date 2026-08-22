import { cn } from "@/lib/cn";

const tones = {
  canvas: "bg-canvas text-ink-body",
  surface: "bg-surface-1 text-ink-body",
  deep: "bg-surface-deep text-white",
} as const;

const pads = {
  sm: "py-12",
  lg: "py-16 md:py-24",
  xl: "py-24 md:py-32",
} as const;

export default function Section({
  tone = "canvas",
  pad = "lg",
  className,
  children,
}: {
  tone?: keyof typeof tones;
  pad?: keyof typeof pads;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section className={cn(tones[tone], pads[pad], className)}>{children}</section>
  );
}
