import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import FacebookIcon from "@/components/icons/FacebookIcon";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import PageHeader from "@/components/ui/PageHeader";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { Input, Textarea } from "@/components/ui/Input";

export const metadata: Metadata = {
  title: "ติดต่อเรา",
  description:
    "ติดต่อ BancheeTech เพื่อรับคำปรึกษาด้านระบบบัญชีและ AI Transformation",
};

const channels = [
  {
    icon: <FacebookIcon size={20} />,
    title: "Facebook Fan Page",
    value: "บัญชี Tech ดิจิตอลบัญชีเพื่อ SMEs",
    href: "https://www.facebook.com/LupinxTaxandAccounting",
    external: true,
  },
  {
    icon: <Mail size={20} />,
    title: "อีเมล",
    value: "webancheetech@gmail.com",
    href: "mailto:webancheetech@gmail.com",
  },
  {
    icon: <Phone size={20} />,
    title: "โทรศัพท์",
    value: "(+66) 83 907 6303",
    href: "tel:+66839076303",
  },
  {
    icon: <MapPin size={20} />,
    title: "ที่อยู่",
    value: "กรุงเทพมหานคร, ประเทศไทย",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="ติดต่อเรา"
        lead="พร้อมให้คำปรึกษาและตอบทุกคำถามเกี่ยวกับการ Transform ระบบบัญชีของคุณ"
      />

      <Section tone="canvas" pad="lg">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Channels */}
            <div className="lg:col-span-2">
              <h2 className="text-display-md font-display text-ink">
                ช่องทางการติดต่อ
              </h2>

              <ul className="mt-8 border-y border-hairline divide-y divide-hairline">
                {channels.map((c) => {
                  const body = (
                    <>
                      <span className="mt-0.5 shrink-0 text-primary-700">
                        {c.icon}
                      </span>
                      <span>
                        <span className="block text-body-md font-medium text-ink">
                          {c.title}
                        </span>
                        <span className="block text-body-sm text-ink-body">
                          {c.value}
                        </span>
                      </span>
                    </>
                  );

                  return (
                    <li key={c.title}>
                      {c.href ? (
                        <a
                          href={c.href}
                          {...(c.external
                            ? { target: "_blank", rel: "noopener noreferrer" }
                            : {})}
                          className="flex gap-4 py-5 px-1 transition-colors hover:bg-surface-1"
                        >
                          {body}
                        </a>
                      ) : (
                        <div className="flex gap-4 py-5 px-1">{body}</div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <h2 className="text-display-md font-display text-ink">
                ส่งข้อความถึงเรา
              </h2>

              <Card className="mt-8">
                <p className="text-body-sm text-ink-body">
                  แบบฟอร์มนี้<strong className="text-ink">ยังไม่เปิดใช้งาน</strong>{" "}
                  ระหว่างนี้รบกวนติดต่อผ่าน{" "}
                  <a
                    href="https://www.facebook.com/LupinxTaxandAccounting"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-700 underline underline-offset-2"
                  >
                    Facebook
                  </a>{" "}
                  หรือ{" "}
                  <a
                    href="mailto:webancheetech@gmail.com"
                    className="text-primary-700 underline underline-offset-2"
                  >
                    อีเมล
                  </a>{" "}
                  เพื่อให้เราตอบกลับได้เร็วที่สุด
                </p>

                <form className="mt-6 space-y-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-body-sm font-medium text-ink mb-1.5"
                    >
                      ชื่อ-นามสกุล
                    </label>
                    <Input id="name" type="text" placeholder="ชื่อของคุณ" disabled />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-body-sm font-medium text-ink mb-1.5"
                    >
                      อีเมล
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="email@example.com"
                      disabled
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-body-sm font-medium text-ink mb-1.5"
                    >
                      ข้อความ
                    </label>
                    <Textarea
                      id="message"
                      rows={5}
                      placeholder="รายละเอียดที่ต้องการสอบถาม..."
                      className="resize-none"
                      disabled
                    />
                  </div>
                  <Button type="submit" className="w-full" disabled>
                    ส่งข้อความ
                  </Button>
                </form>
              </Card>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Button
                  href="https://www.facebook.com/LupinxTaxandAccounting"
                  variant="accent"
                  size="lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ทักแชท Facebook
                </Button>
                <Button
                  href="mailto:webancheetech@gmail.com"
                  variant="secondary"
                  size="lg"
                >
                  ส่งอีเมล
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
