import { cn } from "@/lib/cn";

const tones = {
  light: "bg-primary-50 text-primary-700",
  onDark: "bg-white/12 text-white",
} as const;

export default function Tag({
  tone = "light",
  className,
  children,
}: {
  tone?: keyof typeof tones;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-block rounded-sm px-2.5 py-1 text-body-sm font-medium leading-none",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
