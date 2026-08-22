import { cn } from "@/lib/cn";

const variants = {
  hairline: "bg-canvas border border-hairline",
  surface: "bg-surface-1 border border-transparent",
  deep: "bg-surface-deep text-white border border-transparent",
} as const;

export default function Card({
  variant = "hairline",
  className,
  children,
  ...rest
}: {
  variant?: keyof typeof variants;
  className?: string;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("rounded-lg p-8", variants[variant], className)}
      {...rest}
    >
      {children}
    </div>
  );
}
