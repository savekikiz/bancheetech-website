import type { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";
import BlogCard from "@/components/BlogCard";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "บทความเกี่ยวกับระบบบัญชี AI และ Digital Transformation จาก BancheeTech",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <section className="bg-primary-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Blog</h1>
          <p className="text-primary-200 text-lg max-w-2xl">
            บทความ ความรู้ และเทรนด์ล่าสุดเกี่ยวกับระบบบัญชีและเทคโนโลยี AI
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <BlogCard key={post.slug} {...post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-gray-500">
              <p className="text-lg">ยังไม่มีบทความ — กำลังเตรียมเนื้อหาดีๆ ให้คุณเร็วๆ นี้</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
