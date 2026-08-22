import type { Metadata } from "next";
import { Suspense } from "react";
import { getAllPosts } from "@/lib/blog";
import BlogList from "@/components/BlogList";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import PageHeader from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "บทความเกี่ยวกับระบบบัญชี AI และ Digital Transformation จาก BancheeTech",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <PageHeader
        eyebrow="Insights"
        title="Blog"
        lead="บทความ ความรู้ และเทรนด์ล่าสุดเกี่ยวกับระบบบัญชีและเทคโนโลยี AI"
      />

      <Section tone="canvas" pad="lg">
        <Container>
          {posts.length > 0 ? (
            /* useSearchParams ใน BlogList ต้องมี Suspense ครอบ ไม่งั้น next build จะ fail */
            <Suspense fallback={<div className="h-12 rounded-md bg-surface-1" />}>
              <BlogList posts={posts} />
            </Suspense>
          ) : (
            <div className="text-center py-12 text-ink-muted">
              <p className="text-body-lg">
                ยังไม่มีบทความ — กำลังเตรียมเนื้อหาดีๆ ให้คุณเร็วๆ นี้
              </p>
            </div>
          )}
        </Container>
      </Section>
    </>
  );
}
