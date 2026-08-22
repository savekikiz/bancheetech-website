import { cn } from "@/lib/cn";

const field =
  "w-full rounded-md border border-hairline bg-canvas px-4 text-body-md text-ink placeholder:text-ink-faint transition-colors focus:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500/30";

export function Input({
  className,
  ...rest
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input className={cn(field, "h-11", className)} {...rest} />;
}

export function Textarea({
  className,
  ...rest
}: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea className={cn(field, "py-3", className)} {...rest} />;
}
