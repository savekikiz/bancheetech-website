import Link from "next/link";
import { Calendar } from "lucide-react";

interface BlogCardProps {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  onTagClick?: (tag: string) => void;
}

export default function BlogCard({
  slug,
  title,
  excerpt,
  date,
  tags,
  onTagClick,
}: BlogCardProps) {
  return (
    <article className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100 overflow-hidden flex flex-col">
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
          <Calendar size={14} />
          <time>{date}</time>
        </div>
        <h2 className="text-xl font-bold text-primary-800 mb-2 line-clamp-2">
          <Link
            href={`/blog/${slug}`}
            className="hover:text-accent-500 transition-colors"
          >
            {title}
          </Link>
        </h2>
        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 flex-1">
          {excerpt}
        </p>

        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {tags.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => onTagClick?.(tag)}
                className="text-xs font-medium px-2.5 py-1 rounded-full bg-primary-50 text-primary-700 hover:bg-primary-100 transition-colors cursor-pointer"
              >
                #{tag}
              </button>
            ))}
          </div>
        )}

        <Link
          href={`/blog/${slug}`}
          className="inline-block mt-4 text-sm font-medium text-accent-600 hover:text-accent-700 transition-colors"
        >
          อ่านเพิ่มเติม &rarr;
        </Link>
      </div>
    </article>
  );
}
