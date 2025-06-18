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
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:overflow-auto gap-10 pb-4 mt-20">
      {selectedPosts.map((post) => (
        <Card key={post.id} post={post} />
      ))}
    </div>
  );
}
