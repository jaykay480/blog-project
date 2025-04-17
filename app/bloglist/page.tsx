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
    <main className="p-6 max-w-4xl mx-auto">
      <h1 className="text-center font-semibold text-3xl mb-6">Blog project</h1>

      <input
        type="text"
        placeholder="Search with title or desc..."
        className="w-fit p-2 mb-6 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {filteredPosts.length > 0 ? (
        filteredPosts.map((post) => (
          <div
            key={post.slug}
            className="mt-4 p-4 border border-gray-200 rounded-lg shadow-sm"
          >
            <h2 className="underline text-xl">
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </h2>
            <p className="font-semibold text-blue-400">
              {formatDate(post.date)}
            </p>
            <p className="text-gray-400">{post.description}</p>
          </div>
        ))
      ) : (
        <p className="text-gray-500">No posts found.</p>
      )}
    </main>
  );
}
