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

export default function BlogList({
  posts,
  allTags,
}: {
  posts: PostMeta[];
  allTags: string[];
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Filter posts by selected tag
  const filteredPosts = useMemo(() => {
    if (!selectedTag) return posts;
    return posts.filter((post) => post.tags.includes(selectedTag));
  }, [posts, selectedTag]);

  // Pagination
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const paginatedPosts = filteredPosts.slice(
    startIndex,
    startIndex + POSTS_PER_PAGE
  );

  function handleTagClick(tag: string) {
    if (selectedTag === tag) {
      setSelectedTag(null);
    } else {
      setSelectedTag(tag);
    }
    setCurrentPage(1);
  }

  function goToPage(page: number) {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div>
      {/* Tag filter bar */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <Search size={16} className="text-gray-400" />
          <span className="text-sm font-medium text-gray-600">
            ค้นหาตาม Hashtag:
          </span>
        </div>
        <div className="flex flex-wrap gap-2">
          {allTags.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => handleTagClick(tag)}
              className={`text-sm font-medium px-4 py-2 rounded-full transition-colors cursor-pointer ${
                selectedTag === tag
                  ? "bg-primary-700 text-white shadow-md"
                  : "bg-primary-50 text-primary-700 hover:bg-primary-100"
              }`}
            >
              #{tag}
            </button>
          ))}
        </div>

        {/* Active filter indicator */}
        {selectedTag && (
          <div className="mt-4 flex items-center gap-2">
            <span className="text-sm text-gray-500">
              กรอง: <strong className="text-primary-700">#{selectedTag}</strong>{" "}
              ({filteredPosts.length} บทความ)
            </span>
            <button
              type="button"
              onClick={() => {
                setSelectedTag(null);
                setCurrentPage(1);
              }}
              className="inline-flex items-center gap-1 text-xs text-red-500 hover:text-red-700 transition-colors cursor-pointer"
            >
              <X size={14} />
              ล้างตัวกรอง
            </button>
          </div>
        )}
      </div>

      {/* Blog grid */}
      {paginatedPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {paginatedPosts.map((post) => (
            <BlogCard
              key={post.slug}
              {...post}
              onTagClick={handleTagClick}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 text-gray-500">
          <p className="text-lg">
            ไม่พบบทความสำหรับ #{selectedTag}
          </p>
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <nav className="flex items-center justify-center gap-2 mt-12">
          <button
            type="button"
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
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
                currentPage === page
                  ? "bg-primary-700 text-white shadow-md"
                  : "border border-gray-300 hover:bg-gray-50 text-gray-700"
              }`}
            >
              {page}
            </button>
          ))}

          <button
            type="button"
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
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
          หน้า {currentPage} จาก {totalPages} ({filteredPosts.length} บทความ)
        </p>
      )}
    </div>
  );
}
