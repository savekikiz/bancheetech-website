import { cn } from "@/lib/cn";

const sizes = {
  prose: "max-w-3xl",
  content: "max-w-5xl",
  wide: "max-w-7xl",
} as const;

export default function Container({
  size = "wide",
  className,
  children,
}: {
  size?: keyof typeof sizes;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("mx-auto px-4 sm:px-6 lg:px-8", sizes[size], className)}>
      {children}
    </div>
  );
}
