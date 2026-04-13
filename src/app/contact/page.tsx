import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";

function FacebookIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

export const metadata: Metadata = {
  title: "ติดต่อเรา",
  description:
    "ติดต่อ BancheeTech เพื่อรับคำปรึกษาด้านระบบบัญชีและ AI Transformation",
};

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-primary-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">ติดต่อเรา</h1>
          <p className="text-primary-200 text-lg max-w-2xl">
            พร้อมให้คำปรึกษาและตอบทุกคำถามเกี่ยวกับการ Transform ระบบบัญชีของคุณ
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-primary-800 mb-6">
                ช่องทางการติดต่อ
              </h2>

              <div className="space-y-6">
                <a
                  href="https://www.facebook.com/LupinxTaxandAccounting"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors group"
                >
                  <span className="text-blue-600 mt-1 shrink-0"><FacebookIcon size={24} /></span>
                  <div>
                    <h3 className="font-semibold text-primary-800 group-hover:text-accent-600 transition-colors">
                      Facebook Fan Page
                    </h3>
                    <p className="text-gray-600 text-sm">
                      บัญชี Tech ดิจิตอลบัญชีเพื่อ SMEs
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50">
                  <Mail className="text-primary-600 mt-1 shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold text-primary-800">อีเมล</h3>
                    <p className="text-gray-600 text-sm">webancheetech@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50">
                  <Phone className="text-primary-600 mt-1 shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold text-primary-800">โทรศัพท์</h3>
                    <p className="text-gray-600 text-sm">(+66) 83 907 6303</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50">
                  <MapPin className="text-primary-600 mt-1 shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold text-primary-800">ที่อยู่</h3>
                    <p className="text-gray-600 text-sm">กรุงเทพมหานคร, ประเทศไทย</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-primary-800 mb-6">
                ส่งข้อความถึงเรา
              </h2>
              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    ชื่อ-นามสกุล
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                    placeholder="ชื่อของคุณ"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    อีเมล
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                    placeholder="email@example.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    ข้อความ
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors resize-none"
                    placeholder="รายละเอียดที่ต้องการสอบถาม..."
                  />
                </div>
                <button
                  type="button"
                  className="w-full bg-accent-500 hover:bg-accent-600 text-white py-3 rounded-lg font-medium transition-colors"
                >
                  ส่งข้อความ
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
