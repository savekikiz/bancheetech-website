"use client";

import { useState, useMemo } from "react";
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
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

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
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div>
      {/* Search bar */}
      <div className="mb-10">
        <div className="relative max-w-xl">
          <Search
            size={20}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
          />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => handleSearchChange(e.target.value)}
            placeholder="ค้นหาบทความ... พิมพ์ชื่อหัวข้อ หรือ #hashtag"
            className="w-full pl-12 pr-12 py-3.5 rounded-xl border border-gray-300 bg-white text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all shadow-sm text-sm"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => handleSearchChange("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
              aria-label="ล้างการค้นหา"
            >
              <X size={18} />
            </button>
          )}
        </div>

        {/* Search result info */}
        {searchQuery && (
          <p className="mt-3 text-sm text-gray-500">
            พบ <strong className="text-primary-700">{filteredPosts.length}</strong> บทความ
            สำหรับ &ldquo;<span className="text-primary-700">{searchQuery}</span>&rdquo;
          </p>
        )}
      </div>

      {/* Blog grid */}
      {paginatedPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {paginatedPosts.map((post) => (
            <BlogCard key={post.slug} {...post} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 text-gray-500">
          <Search size={48} className="mx-auto mb-4 text-gray-300" />
          <p className="text-lg font-medium">ไม่พบบทความที่ตรงกับการค้นหา</p>
          <p className="text-sm mt-1">ลองค้นหาด้วยคำอื่น หรือ #hashtag</p>
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <nav className="flex items-center justify-center gap-2 mt-12">
          <button
            type="button"
            onClick={() => goToPage(safeCurrentPage - 1)}
            disabled={safeCurrentPage === 1}
            className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer"
            aria-label="หน้าก่อน"
          >
            <ChevronLeft size={20} />
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              type="button"
              onClick={() => goToPage(page)}
              className={`w-10 h-10 rounded-lg font-medium text-sm transition-colors cursor-pointer ${
                safeCurrentPage === page
                  ? "bg-primary-700 text-white shadow-md"
                  : "border border-gray-300 hover:bg-gray-50 text-gray-700"
              }`}
            >
              {page}
            </button>
          ))}

          <button
            type="button"
            onClick={() => goToPage(safeCurrentPage + 1)}
            disabled={safeCurrentPage === totalPages}
            className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer"
            aria-label="หน้าถัดไป"
          >
            <ChevronRight size={20} />
          </button>
        </nav>
      )}

      {/* Page info */}
      {totalPages > 1 && (
        <p className="text-center text-sm text-gray-400 mt-3">
          หน้า {safeCurrentPage} จาก {totalPages} ({filteredPosts.length} บทความ)
        </p>
      )}
    </div>
  );
}
