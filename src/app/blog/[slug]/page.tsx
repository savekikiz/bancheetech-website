import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar } from "lucide-react";
import { getPostBySlug, getAllSlugs } from "@/lib/blog";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Tag from "@/components/ui/Tag";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Section tone="canvas" pad="lg">
        <Container size="prose">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-body-sm text-ink-muted hover:text-ink transition-colors"
          >
            <ArrowLeft size={16} />
            กลับไปหน้า Blog
          </Link>

          <div className="mt-6 flex items-center gap-2 text-body-sm text-ink-muted">
            <Calendar size={16} />
            <time>{post.date}</time>
          </div>

          <h1 className="mt-3 text-display-lg font-display text-ink">
            {post.title}
          </h1>

          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-6">
              {post.tags.map((tag) => (
                <Link key={tag} href={`/blog?tag=${encodeURIComponent(tag)}`}>
                  <Tag className="transition-colors hover:bg-primary-100">
                    #{tag}
                  </Tag>
                </Link>
              ))}
            </div>
          )}
        </Container>
      </Section>

      <hr className="border-hairline" />

      <Section tone="canvas" pad="lg">
        <Container size="prose">
          <article
            className="prose prose-lg max-w-none prose-headings:font-display prose-a:underline prose-a:underline-offset-2 blog-content"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />
        </Container>
      </Section>
    </>
  );
}
