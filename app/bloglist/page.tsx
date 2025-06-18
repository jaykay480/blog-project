"use client";

import Link from "next/link";
import { useState } from "react";
import { posts } from "../posts/posts";
import { formatDate } from "@/utils/formatDate";

export default function BlogListPage() {
  const [query, setQuery] = useState("");

  const filteredPosts = posts.filter((post) => {
    const lowerQuery = query.toLowerCase();
    return (
      post.title.toLowerCase().includes(lowerQuery) ||
      post.content.toLowerCase().includes(lowerQuery)
    );
  });

  return (
    <main className=" min-h-screen flex flex-col items-center justify-start px-6 pt-16">
      <input
        type="text"
        placeholder="Search here"
        className="w-full md:w-auto flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <div className="w-full max-w-2xl mt-2">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <div key={post.slug} className="w-full mb-4">
              <div className="w-full bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                <h2 className="underline text-xl">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="font-thin text-sm text-lamaPurple">
                  {formatDate(post.date)}
                </p>
                <p className="text-gray-400">{post.description}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center">No posts found.</p>
        )}
      </div>
    </main>
  );
}
