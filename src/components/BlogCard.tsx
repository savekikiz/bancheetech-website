import Link from "next/link";
import { Calendar } from "lucide-react";

interface BlogCardProps {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
}

export default function BlogCard({ slug, title, excerpt, date }: BlogCardProps) {
  return (
    <article className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100 overflow-hidden">
      <div className="p-6">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
          <Calendar size={14} />
          <time>{date}</time>
        </div>
        <h2 className="text-xl font-bold text-primary-800 mb-2 line-clamp-2">
          <Link href={`/blog/${slug}`} className="hover:text-accent-500 transition-colors">
            {title}
          </Link>
        </h2>
        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">{excerpt}</p>
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
