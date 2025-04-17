import { posts } from "@/app/posts/posts";
import { formatDate } from "@/utils/formatDate";
import { notFound } from "next/navigation"; // If post not found,
import Link from "next/link";

interface BlogPostProps {
  params: { slug: string };
}

export default function BlogPostPage({ params }: BlogPostProps) {
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound(); // This will trigger the 404 page if no post is found
  }

  return (
    <main className="p-2 font-sans">
      <h1 className="font-medium text-blue-500 underline">{post.title}</h1>
      <p className="mt-2 font-extralight text-gray-400">
        Published on {formatDate(post.date)}
      </p>
      <hr className="m-4" />
      <article>{post.content}</article>
      <br />
      <Link href="/bloglist" className="text-blue-400">
        ← Back to Blog
      </Link>
    </main>
  );
}
