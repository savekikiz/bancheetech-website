"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/nav";
import { cn } from "@/lib/cn";
import Button from "@/components/ui/Button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <nav className="sticky top-0 z-50 bg-canvas/85 backdrop-blur-md border-b border-hairline">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2.5">
            <Image
              src="/bancheetech-logo.png"
              alt="BancheeTech Logo"
              width={36}
              height={36}
              className="rounded-sm"
            />
            <span className="font-display text-2xl font-bold tracking-tight text-ink">
              Banchee<span className="text-accent-600">Tech</span>
            </span>
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative px-3 py-2 text-body-md transition-colors",
                  isActive(link.href)
                    ? "text-ink [text-shadow:0_0_0.6px_currentColor]"
                    : "text-ink-body hover:text-ink hover:[text-shadow:0_0_0.6px_currentColor]",
                )}
              >
                {link.label}
                {isActive(link.href) && (
                  <span className="absolute inset-x-3 -bottom-px h-0.5 bg-accent-500" />
                )}
              </Link>
            ))}
            <Button href="/contact" variant="primary" size="md" className="ml-4">
              ปรึกษาฟรี
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-ink hover:bg-surface-1 transition-colors"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-hairline animate-fade-in">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block px-3 py-3 text-body-md border-b border-hairline transition-colors",
                  isActive(link.href)
                    ? "text-primary-700 font-medium"
                    : "text-ink-body hover:text-ink",
                )}
              >
                {link.label}
              </Link>
            ))}
            <Button
              href="/contact"
              variant="primary"
              size="md"
              className="mt-4 w-full"
              onClick={() => setIsOpen(false)}
            >
              ปรึกษาฟรี
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
