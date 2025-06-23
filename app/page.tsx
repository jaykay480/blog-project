import Card from "@/components/Card";
import { posts } from "./posts/posts";

function getRandomUniquePosts(count: number) {
  const shuffled = [...posts].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}
export default function Home() {
  const cardsToRender = 6;
  const selectedPosts = getRandomUniquePosts(cardsToRender);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:overflow-auto mt-6 gap-10 pb-4 max-w-7xl mx-auto px-4">
      {selectedPosts.map((post) => (
        <Card key={post.id} post={post} />
      ))}
    </div>
  );
}
