"use client";

import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import BlogCard from "./BlogCard";
import { ChevronLeft, ChevronRight, Search, X } from "lucide-react";

interface PostMeta {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
}

const POSTS_PER_PAGE = 9; // 3 columns x 3 rows

export default function BlogList({ posts }: { posts: PostMeta[] }) {
  // รองรับลิงก์ /blog?tag=... จากหน้าบทความ
  const tagParam = useSearchParams().get("tag") ?? "";
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState(tagParam ? `#${tagParam}` : "");

  // Filter posts by search query (matches title and tags)
  const filteredPosts = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return posts;

    // Support multiple terms: "AI บัญชี" matches posts containing both
    const terms = q.split(/\s+/).filter(Boolean);

    return posts.filter((post) => {
      const titleLower = post.title.toLowerCase();
      const tagsJoined = post.tags.map((t) => t.toLowerCase()).join(" ");
      const searchable = `${titleLower} ${tagsJoined}`;

      return terms.every((term) => {
        // Strip leading # so user can type "#AI" or "AI"
        const cleanTerm = term.replace(/^#/, "");
        return searchable.includes(cleanTerm);
      });
    });
  }, [posts, searchQuery]);

  // Reset to page 1 when search changes
  const safeCurrentPage = currentPage > Math.ceil(filteredPosts.length / POSTS_PER_PAGE)
    ? 1
    : currentPage;

  // Pagination
  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / POSTS_PER_PAGE));
  const startIndex = (safeCurrentPage - 1) * POSTS_PER_PAGE;
  const paginatedPosts = filteredPosts.slice(
    startIndex,
    startIndex + POSTS_PER_PAGE
  );

  function handleSearchChange(value: string) {
    setSearchQuery(value);
    setCurrentPage(1);
  }

  function goToPage(page: number) {
    setCurrentPage(page);
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
  }

  return (
    <div>
      {/* Search bar */}
      <div className="mb-10">
        <div className="relative max-w-xl">
          <Search
            size={20}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-faint pointer-events-none"
          />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => handleSearchChange(e.target.value)}
            placeholder="ค้นหาบทความ... พิมพ์ชื่อหัวข้อ หรือ #hashtag"
            className="w-full h-12 pl-12 pr-12 rounded-md border border-hairline bg-canvas text-body-md text-ink placeholder:text-ink-faint focus:ring-2 focus:ring-primary-500/30 focus:border-primary-600 outline-none transition-colors"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => handleSearchChange("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-ink-faint hover:text-ink transition-colors cursor-pointer"
              aria-label="ล้างการค้นหา"
            >
              <X size={18} />
            </button>
          )}
        </div>

        {/* Search result info */}
        {searchQuery && (
          <p className="mt-3 text-body-sm text-ink-muted">
            พบ <strong className="text-primary-700">{filteredPosts.length}</strong> บทความ
            สำหรับ &ldquo;<span className="text-primary-700">{searchQuery}</span>&rdquo;
          </p>
        )}
      </div>

      {/* Blog grid */}
      {paginatedPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {paginatedPosts.map((post) => (
            <BlogCard key={post.slug} {...post} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 text-ink-muted">
          <Search size={48} className="mx-auto mb-4 text-hairline" />
          <p className="text-body-lg font-medium text-ink">ไม่พบบทความที่ตรงกับการค้นหา</p>
          <p className="text-body-sm mt-1">ลองค้นหาด้วยคำอื่น หรือ #hashtag</p>
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <nav className="flex items-center justify-center gap-2 mt-12">
          <button
            type="button"
            onClick={() => goToPage(safeCurrentPage - 1)}
            disabled={safeCurrentPage === 1}
            className="p-2 rounded-md border border-hairline text-ink-body hover:bg-surface-1 disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer"
            aria-label="หน้าก่อน"
          >
            <ChevronLeft size={20} />
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              type="button"
              onClick={() => goToPage(page)}
              className={`w-10 h-10 rounded-md font-medium text-body-sm transition-colors cursor-pointer ${
                safeCurrentPage === page
                  ? "bg-primary-700 text-white"
                  : "border border-hairline text-ink-body hover:bg-surface-1"
              }`}
            >
              {page}
            </button>
          ))}

          <button
            type="button"
            onClick={() => goToPage(safeCurrentPage + 1)}
            disabled={safeCurrentPage === totalPages}
            className="p-2 rounded-md border border-hairline text-ink-body hover:bg-surface-1 disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer"
            aria-label="หน้าถัดไป"
          >
            <ChevronRight size={20} />
          </button>
        </nav>
      )}

      {/* Page info */}
      {totalPages > 1 && (
        <p className="text-center text-body-sm text-ink-muted mt-3">
          หน้า {safeCurrentPage} จาก {totalPages} ({filteredPosts.length} บทความ)
        </p>
      )}
    </div>
  );
}
