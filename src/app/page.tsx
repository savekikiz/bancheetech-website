import Link from "next/link";
import { Bot, BarChart3, ShieldCheck, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-800 via-primary-700 to-primary-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Transform ระบบบัญชี
              <br />
              <span className="text-accent-400">ให้ทันสมัยด้วย AI</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-100 mb-8 leading-relaxed">
              เราช่วยผู้ประกอบการและสำนักงานบัญชี ยกระดับการทำงานด้วยเทคโนโลยี AI
              เพื่อความแม่นยำ รวดเร็ว และประสิทธิภาพสูงสุด
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-accent-500 hover:bg-accent-600 text-white px-8 py-3 rounded-lg font-medium transition-colors"
              >
                ติดต่อเรา
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white/60 text-white px-8 py-3 rounded-lg font-medium transition-colors"
              >
                เรียนรู้เพิ่มเติม
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary-800 mb-4">
              บริการของเรา
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              เราให้บริการครบวงจรด้าน Digital Transformation สำหรับระบบบัญชี
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Bot className="text-accent-500" size={40} />}
              title="AI Accounting Automation"
              description="ระบบอัตโนมัติด้วย AI ช่วยจำแนกเอกสาร จับคู่รายการ และบันทึกบัญชีอย่างแม่นยำ ลดเวลาทำงานลงกว่า 80%"
            />
            <ServiceCard
              icon={<BarChart3 className="text-accent-500" size={40} />}
              title="วางระบบบัญชีดิจิทัล"
              description="ออกแบบและวางระบบบัญชีที่เหมาะสมกับธุรกิจของคุณ ตั้งแต่การเลือกซอฟต์แวร์ไปจนถึงการ Integrate ระบบ"
            />
            <ServiceCard
              icon={<ShieldCheck className="text-accent-500" size={40} />}
              title="ที่ปรึกษาด้านบัญชี"
              description="ให้คำปรึกษาโดยผู้เชี่ยวชาญ เพื่อให้ระบบบัญชีของคุณถูกต้องตามมาตรฐาน และพร้อมสำหรับการตรวจสอบ"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            พร้อมยกระดับระบบบัญชีของคุณ?
          </h2>
          <p className="text-primary-200 mb-8 max-w-xl mx-auto">
            ติดต่อเราวันนี้เพื่อรับคำปรึกษาฟรี และเริ่มต้นการ Transform ระบบบัญชีของคุณ
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white px-8 py-3 rounded-lg font-medium transition-colors"
          >
            ปรึกษาฟรี
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}

function ServiceCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-primary-800 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}
