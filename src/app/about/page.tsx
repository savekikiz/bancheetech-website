import type { Metadata } from "next";
import { Target, Eye, Lightbulb } from "lucide-react";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import PageHeader from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "เกี่ยวกับเรา",
  description:
    "BancheeTech ให้บริการวางและ Transform ระบบบัญชีให้ทันสมัยด้วย AI สำหรับผู้ประกอบการและสำนักงานบัญชี",
};

const values = [
  {
    icon: Target,
    title: "Mission",
    description:
      "ยกระดับระบบบัญชีไทยให้ทันสมัย ด้วยเทคโนโลยี AI ที่เข้าถึงได้สำหรับทุกธุรกิจ",
  },
  {
    icon: Eye,
    title: "Vision",
    description:
      "เป็นผู้นำด้าน AI Accounting Transformation ในประเทศไทย ที่ผู้ประกอบการไว้วางใจ",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "เราไม่หยุดพัฒนา ค้นหาวิธีใหม่ๆ ที่ทำให้ระบบบัญชีทำงานได้ดีขึ้น เร็วขึ้น และแม่นยำขึ้น",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About us"
        title="เกี่ยวกับเรา"
        lead="เราคือทีมผู้เชี่ยวชาญด้านเทคโนโลยีและบัญชี ที่มุ่งมั่นยกระดับระบบบัญชีไทยให้ก้าวทันโลกดิจิทัล"
      />

      {/* Story */}
      <Section tone="canvas" pad="lg">
        <Container size="prose" className="px-0 sm:px-0 lg:px-0">
          <div className="px-4 sm:px-6 lg:px-8">
            <h2 className="text-display-md font-display text-ink">
              เรื่องราวของเรา
            </h2>
            <div className="mt-6 space-y-5 text-body-lg text-ink-body">
              <p>
                BancheeTech ก่อตั้งขึ้นจากความเชื่อที่ว่าระบบบัญชีไม่ควรเป็นภาระ
                แต่ควรเป็นเครื่องมือที่ช่วยให้ผู้ประกอบการตัดสินใจได้อย่างมั่นใจ
              </p>
              <p>
                ด้วยประสบการณ์ในสายงานบัญชีและเทคโนโลยี เราเล็งเห็นว่า AI
                สามารถช่วยลดงานซ้ำซ้อน เพิ่มความแม่นยำ
                และทำให้ทีมบัญชีมีเวลาโฟกัสกับงานที่สร้างคุณค่าได้มากขึ้น
              </p>
              <p>
                เรามุ่งมั่นที่จะเป็นพาร์ทเนอร์ด้าน Digital Transformation
                ให้กับสำนักงานบัญชี และผู้ประกอบการทุกขนาด ตั้งแต่ SME
                ไปจนถึงองค์กรขนาดใหญ่
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <hr className="border-hairline" />

      {/* Values */}
      <Section tone="canvas" pad="lg">
        <Container>
          <h2 className="text-display-md font-display text-ink text-center">
            คุณค่าของเรา
          </h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 md:divide-x md:divide-hairline">
            {values.map(({ icon: Icon, title, description }, i) => (
              <div
                key={title}
                className="reveal px-0 md:px-8 py-8 md:py-0 border-b border-hairline md:border-b-0 last:border-b-0"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="inline-flex size-12 items-center justify-center rounded-md bg-accent-50 text-accent-600">
                  <Icon size={24} />
                </div>
                <h3 className="mt-5 text-heading-md font-display text-ink">
                  {title}
                </h3>
                <p className="mt-3 text-body-md text-ink-body">{description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
