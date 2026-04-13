import type { Metadata } from "next";
import { Target, Eye, Lightbulb } from "lucide-react";

export const metadata: Metadata = {
  title: "เกี่ยวกับเรา",
  description:
    "BancheeTech ให้บริการวางและ Transform ระบบบัญชีให้ทันสมัยด้วย AI สำหรับผู้ประกอบการและสำนักงานบัญชี",
};

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-primary-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">เกี่ยวกับเรา</h1>
          <p className="text-primary-200 text-lg max-w-2xl">
            เราคือทีมผู้เชี่ยวชาญด้านเทคโนโลยีและบัญชี ที่มุ่งมั่นยกระดับระบบบัญชีไทยให้ก้าวทันโลกดิจิทัล
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold text-primary-800 mb-6">เรื่องราวของเรา</h2>
            <div className="prose prose-lg text-gray-600 space-y-4">
              <p>
                BancheeTech ก่อตั้งขึ้นจากความเชื่อที่ว่าระบบบัญชีไม่ควรเป็นภาระ
                แต่ควรเป็นเครื่องมือที่ช่วยให้ผู้ประกอบการตัดสินใจได้อย่างมั่นใจ
              </p>
              <p>
                ด้วยประสบการณ์ในสายงานบัญชีและเทคโนโลยี เราเล็งเห็นว่า AI สามารถช่วยลดงานซ้ำซ้อน
                เพิ่มความแม่นยำ และทำให้ทีมบัญชีมีเวลาโฟกัสกับงานที่สร้างคุณค่าได้มากขึ้น
              </p>
              <p>
                เรามุ่งมั่นที่จะเป็นพาร์ทเนอร์ด้าน Digital Transformation ให้กับสำนักงานบัญชี
                และผู้ประกอบการทุกขนาด ตั้งแต่ SME ไปจนถึงองค์กรขนาดใหญ่
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-primary-800 mb-10 text-center">
            คุณค่าของเรา
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ValueCard
              icon={<Target className="text-accent-500" size={36} />}
              title="Mission"
              description="ยกระดับระบบบัญชีไทยให้ทันสมัย ด้วยเทคโนโลยี AI ที่เข้าถึงได้สำหรับทุกธุรกิจ"
            />
            <ValueCard
              icon={<Eye className="text-accent-500" size={36} />}
              title="Vision"
              description="เป็นผู้นำด้าน AI Accounting Transformation ในประเทศไทย ที่ผู้ประกอบการไว้วางใจ"
            />
            <ValueCard
              icon={<Lightbulb className="text-accent-500" size={36} />}
              title="Innovation"
              description="เราไม่หยุดพัฒนา ค้นหาวิธีใหม่ๆ ที่ทำให้ระบบบัญชีทำงานได้ดีขึ้น เร็วขึ้น และแม่นยำขึ้น"
            />
          </div>
        </div>
      </section>
    </>
  );
}

function ValueCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white rounded-xl p-8 shadow-md text-center">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-primary-800 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}
