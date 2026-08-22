import Link from "next/link";
import { cn } from "@/lib/cn";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-display font-semibold whitespace-nowrap transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary-500 disabled:opacity-50 disabled:pointer-events-none";

const variants = {
  primary: "bg-primary-700 text-white hover:bg-primary-600",
  // ตัวอักษรเข้มบนส้ม ไม่ใช่ขาว: #0B1220 บน #F97316 = 6.7:1 (ขาวบนส้ม = 2.8:1 ตก AA)
  accent: "bg-accent-500 text-ink-950 hover:bg-accent-600",
  secondary: "bg-canvas text-ink border border-hairline hover:border-ink-faint",
  ghost:
    "text-white border border-white/40 hover:border-white hover:bg-white/10 focus-visible:ring-white",
} as const;

const sizes = {
  md: "h-11 px-6 text-body-md",
  lg: "h-12 px-8 text-body-lg",
} as const;

type Common = {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  className?: string;
  children: React.ReactNode;
};

type LinkProps = Common &
  Omit<React.ComponentPropsWithoutRef<typeof Link>, "className" | "children"> & {
    href: string;
  };

type NativeProps = Common &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> & {
    href?: undefined;
  };

export default function Button(props: LinkProps | NativeProps) {
  const { variant = "primary", size = "md", className, children } = props;
  const classes = cn(base, variants[variant], sizes[size], className);

  const rest = { ...props } as Record<string, unknown>;
  delete rest.variant;
  delete rest.size;
  delete rest.className;
  delete rest.children;

  if (props.href !== undefined) {
    return (
      <Link className={classes} {...(rest as React.ComponentPropsWithoutRef<typeof Link>)}>
        {children}
      </Link>
    );
  }

  return (
    <button
      className={classes}
      {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}
