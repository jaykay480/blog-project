import Link from "next/link";
import { formatDate } from "@/utils/formatDate";
import { Post } from "@/app/types/post";

type CardProps = {
  post: Post;
};

export default function Card({ post }: CardProps) {
  return (
    <div className="relative row-span-3 xl:row-span-6 shadow-md rounded-2xl pb-16 mt-2 mx-2 bg-white">
      <h1 className="text-lg font-semibold px-7 pt-5 pb-2">{post.title}</h1>
      <p className="text-lamaPurple text-sm font-extralight px-7">
        {formatDate(post.date)}
      </p>
      <p className="text-gray-700 font-sans px-7 pt-5 pb-2">
        {post.description}
      </p>
      <Link
        href={`/blog/${post.slug}`}
        className="absolute bottom-4 right-7 text-[10px] bg-gray-500 px-2 py-1 rounded-full text-lamaYellow"
      >
        Read more
      </Link>
    </div>
  );
}
