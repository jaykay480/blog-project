import { posts } from "@/app/posts/posts";
import { formatDate } from "@/utils/formatDate";
import { notFound } from "next/navigation";
import Link from "next/link";

interface BlogPostProps {
  params: { slug: string };
}

export default function BlogPostPage({ params }: BlogPostProps) {
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="p-2 font-san">
      <h1 className="font-medium text-blue-500 underline">{post.title}</h1>
      <p className="mt-2 font-extralight text-gray-400">
        Published on {formatDate(post.date)}
      </p>
      <hr className="m-4" />
      <article>{post.content}</article>
      <br />
      <Link
        href="/bloglist"
        className="text-[10px] bg-gray-500 px-2 py-1 rounded-full text-lamaYellow"
      >
        Back to topics
      </Link>
    </div>
  );
}
