import type { Metadata } from "next";
import { getAllPosts, getAllTags } from "@/lib/blog";
import BlogList from "@/components/BlogList";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "บทความเกี่ยวกับระบบบัญชี AI และ Digital Transformation จาก BancheeTech",
};

export default function BlogPage() {
  const posts = getAllPosts();
  const allTags = getAllTags();

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
            <BlogList posts={posts} allTags={allTags} />
          ) : (
            <div className="text-center py-12 text-gray-500">
              <p className="text-lg">
                ยังไม่มีบทความ — กำลังเตรียมเนื้อหาดีๆ ให้คุณเร็วๆ นี้
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
