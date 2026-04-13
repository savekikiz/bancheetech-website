import Link from "next/link";

function FacebookIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-primary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              Banchee<span className="text-accent-400">Tech</span>
            </h3>
            <p className="text-primary-200 text-sm leading-relaxed">
              Transform ระบบบัญชีให้ทันสมัยด้วย AI
              <br />
              เพื่อประสิทธิภาพสูงสุดของธุรกิจคุณ
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">เมนู</h4>
            <ul className="space-y-2 text-sm text-primary-200">
              <li>
                <Link href="/" className="hover:text-accent-400 transition-colors">
                  หน้าหลัก
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-accent-400 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-accent-400 transition-colors">
                  เกี่ยวกับเรา
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-accent-400 transition-colors">
                  ติดต่อเรา
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">ติดตามเรา</h4>
            <a
              href="https://www.facebook.com/bancheetech"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-primary-200 hover:text-accent-400 transition-colors"
            >
              <FacebookIcon size={20} />
              Facebook: BancheeTech
            </a>
          </div>
        </div>

        <div className="border-t border-primary-700 mt-8 pt-8 text-center text-sm text-primary-300">
          &copy; {new Date().getFullYear()} BancheeTech. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
