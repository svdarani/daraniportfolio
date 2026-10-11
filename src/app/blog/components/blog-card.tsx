import Link from "next/link";
import Image from "next/image";
import type { BlogPost } from "../data/blog-data";

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="group">
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="transition-all duration-300">
          {/* Image - now separate with its own rounded corners */}
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl mb-4 border border-neutral-200/80 dark:border-white/10 shadow-sm hover:shadow-lg transition-shadow">
            <Image
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>

          {/* Content - now with transparent background and gap from image */}
          <div className="px-1 py-2">
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors duration-200 leading-tight">
              {post.title}
            </h2>

            <div className="flex items-center text-sm text-gray-500 font-light">
              <span>{post.date}</span>
              <span className="mx-2">•</span>
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}
