import Link from "next/link";
import { Calendar } from "lucide-react";
import Tag from "@/components/ui/Tag";

interface BlogCardProps {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
}

export default function BlogCard({
  slug,
  title,
  excerpt,
  date,
  tags,
}: BlogCardProps) {
  return (
    <article className="group bg-canvas rounded-lg border border-hairline p-6 flex flex-col transition-colors duration-200 hover:border-primary-300">
      <div className="flex items-center gap-2 text-body-sm text-ink-muted">
        <Calendar size={14} />
        <time>{date}</time>
      </div>

      <h2 className="mt-3 text-heading-md font-display text-ink line-clamp-2">
        <Link
          href={`/blog/${slug}`}
          className="transition-colors hover:text-primary-700"
        >
          {title}
        </Link>
      </h2>

      <p className="mt-3 text-body-sm text-ink-body line-clamp-3 flex-1">
        {excerpt}
      </p>

      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-5">
          {tags.map((tag) => (
            <Tag key={tag}>#{tag}</Tag>
          ))}
        </div>
      )}

      <Link
        href={`/blog/${slug}`}
        className="mt-5 inline-block text-body-sm font-medium text-accent-700 transition-colors hover:text-accent-800"
      >
        อ่านเพิ่มเติม &rarr;
      </Link>
    </article>
  );
}
