import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import FacebookIcon from "@/components/icons/FacebookIcon";
import { navLinks } from "@/lib/nav";

export default function Footer() {
  return (
    <footer className="bg-surface-deep text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-bold tracking-tight text-white">
              Banchee<span className="text-accent-400">Tech</span>
            </h3>
            <p className="mt-4 text-body-sm text-white/60 max-w-xs">
              Transform ระบบบัญชีให้ทันสมัยด้วย AI
              เพื่อประสิทธิภาพสูงสุดของธุรกิจคุณ
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-label uppercase font-semibold text-white/50">
              เมนู
            </h4>
            <ul className="mt-4 space-y-2.5 text-body-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-accent-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-label uppercase font-semibold text-white/50">
              ติดต่อเรา
            </h4>
            <ul className="mt-4 space-y-2.5 text-body-sm">
              <li>
                <a
                  href="https://www.facebook.com/LupinxTaxandAccounting"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white/70 hover:text-accent-400 transition-colors"
                >
                  <FacebookIcon size={16} />
                  Facebook: BancheeTech
                </a>
              </li>
              <li>
                <a
                  href="mailto:webancheetech@gmail.com"
                  className="inline-flex items-center gap-2 text-white/70 hover:text-accent-400 transition-colors"
                >
                  <Mail size={16} />
                  webancheetech@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+66839076303"
                  className="inline-flex items-center gap-2 text-white/70 hover:text-accent-400 transition-colors"
                >
                  <Phone size={16} />
                  (+66) 83 907 6303
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-hairline-cool/15 mt-12 pt-8 text-center text-body-sm text-white/45">
          &copy; {new Date().getFullYear()} BancheeTech. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
