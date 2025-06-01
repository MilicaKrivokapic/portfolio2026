import { FaRegHeart } from "react-icons/fa";

export function LikeCounter({ likes }: { likes: number }) {
  return (
    <span className="flex items-center gap-1 text-black dark:text-red-400 text-sm">
      <FaRegHeart className="w-4 h-4" />
      {likes}
    </span>
  );
}
