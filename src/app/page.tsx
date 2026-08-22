import { Bot, BarChart3, ShieldCheck, ArrowRight } from "lucide-react";
import { getAllPosts } from "@/lib/blog";
import BlogCard from "@/components/BlogCard";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

const services = [
  {
    icon: Bot,
    title: "AI Accounting Automation",
    description:
      "ระบบอัตโนมัติด้วย AI ช่วยจำแนกเอกสาร จับคู่รายการ และบันทึกบัญชีอย่างแม่นยำ ลดเวลาทำงานลงกว่า 80%",
  },
  {
    icon: BarChart3,
    title: "วางระบบบัญชีดิจิทัล",
    description:
      "ออกแบบและวางระบบบัญชีที่เหมาะสมกับธุรกิจของคุณ ตั้งแต่การเลือกซอฟต์แวร์ไปจนถึงการ Integrate ระบบ",
  },
  {
    icon: ShieldCheck,
    title: "ที่ปรึกษาด้านบัญชี",
    description:
      "ให้คำปรึกษาโดยผู้เชี่ยวชาญ เพื่อให้ระบบบัญชีของคุณถูกต้องตามมาตรฐาน และพร้อมสำหรับการตรวจสอบ",
  },
];

export default function Home() {
  const latestPosts = getAllPosts().slice(0, 3);

  return (
    <>
      {/* ── Hero: dark gradient canvas ─────────────────── */}
      <section className="relative overflow-hidden bg-surface-deep text-white">
        {/* gradient เย็นล้วน โดยเจตนา — ปุ่ม CTA ส้มต้องเป็นจุดที่ร้อนที่สุดในเฟรม */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(58% 52% at 90% 92%, rgba(249,115,22,0.14) 0%, rgba(249,115,22,0) 68%)," +
              "radial-gradient(88% 80% at 4% 100%, rgba(30,58,138,0.70) 0%, rgba(30,58,138,0) 70%)," +
              "linear-gradient(155deg, var(--color-hero-0) 0%, var(--color-hero-1) 55%, var(--color-hero-0) 100%)",
          }}
        />
        {/* bloom แยกชั้น เคลื่อนด้วย transform อย่างเดียว (compositor-only) */}
        <div className="hero-bloom" />

        <Container className="relative py-24 md:py-32">
          <div className="max-w-[46rem]">
            <p className="text-label uppercase font-semibold text-primary-200">
              AI Accounting Transformation
            </p>

            <h1 className="mt-5 text-display-lg md:text-display-xl font-display text-white">
              Transform ระบบบัญชี
              <br />
              <span className="text-accent-400">ให้ทันสมัยด้วย AI</span>
            </h1>

            <p className="mt-6 text-lead text-primary-100">
              เราช่วยผู้ประกอบการและสำนักงานบัญชี ยกระดับการทำงานด้วยเทคโนโลยี AI
              เพื่อความแม่นยำ รวดเร็ว และประสิทธิภาพสูงสุด
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="accent" size="lg">
                ติดต่อเรา
                <ArrowRight size={20} />
              </Button>
              <Button href="/about" variant="ghost" size="lg">
                เรียนรู้เพิ่มเติม
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Services: white, hairline-ruled ─────────────── */}
      <Section tone="canvas" pad="lg">
        <Container>
          <div className="max-w-2xl">
            <p className="text-label uppercase font-semibold text-accent-700">
              Services
            </p>
            <h2 className="mt-3 text-display-md font-display text-ink">
              บริการของเรา
            </h2>
            <p className="mt-4 text-body-lg text-ink-body">
              เราให้บริการครบวงจรด้าน Digital Transformation สำหรับระบบบัญชี
            </p>
          </div>

          {/* บล็อกเดียวคั่นด้วยเส้น hairline แทนการ์ดลอยมีเงา 3 ใบ */}
          <div className="mt-12 rounded-lg border border-hairline overflow-hidden grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-hairline">
            {services.map(({ icon: Icon, title, description }, i) => (
              <div
                key={title}
                className="reveal p-8"
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

      {/* ── Latest posts ────────────────────────────────── */}
      {latestPosts.length > 0 && (
        <>
          <hr className="border-hairline" />
          <Section tone="canvas" pad="lg">
            <Container>
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p className="text-label uppercase font-semibold text-accent-700">
                    Insights
                  </p>
                  <h2 className="mt-3 text-display-md font-display text-ink">
                    บทความล่าสุด
                  </h2>
                </div>
                <Button href="/blog" variant="secondary" size="md">
                  ดูบทความทั้งหมด
                  <ArrowRight size={18} />
                </Button>
              </div>

              <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {latestPosts.map((post) => (
                  <BlogCard key={post.slug} {...post} />
                ))}
              </div>
            </Container>
          </Section>
        </>
      )}

      {/* ── CTA: dark card floating on white ────────────── */}
      <Section tone="canvas" pad="lg">
        <Container size="content">
          <Card variant="deep" className="px-8 py-14 md:px-14 text-center">
            <h2 className="text-display-md font-display text-white">
              พร้อมยกระดับระบบบัญชีของคุณ?
            </h2>
            <p className="mt-4 text-body-lg text-primary-100 max-w-xl mx-auto">
              ติดต่อเราวันนี้เพื่อรับคำปรึกษาฟรี และเริ่มต้นการ Transform
              ระบบบัญชีของคุณ
            </p>
            <div className="mt-8 flex justify-center">
              <Button href="/contact" variant="accent" size="lg">
                ปรึกษาฟรี
                <ArrowRight size={18} />
              </Button>
            </div>
          </Card>
        </Container>
      </Section>
    </>
  );
}
