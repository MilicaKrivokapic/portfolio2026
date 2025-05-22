'use client';

import { useState } from 'react';

interface LikeButtonProps {
  postSlug: string;
  initialLikes: number;
}

export function LikeButton({ postSlug, initialLikes }: LikeButtonProps) {
  const [likes, setLikes] = useState(initialLikes);
  const [hasLiked, setHasLiked] = useState(false);

  const handleLike = async () => {
    if (hasLiked) return;

    try {
      const response = await fetch('/api/likes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ slug: postSlug }),
      });

      if (response.ok) {
        setLikes(prev => prev + 1);
        setHasLiked(true);
        localStorage.setItem(`liked-${postSlug}`, 'true');
      }
    } catch (error) {
      console.error('Error liking post:', error);
    }
  };

  return (
    <button
      onClick={handleLike}
      className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors
        ${hasLiked 
          ? 'text-red-500 cursor-default' 
          : 'text-neutral-500 hover:text-red-500 dark:text-neutral-400'
        }`}
      disabled={hasLiked}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-5 h-5"
      >
        <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
      </svg>
      <span>{likes}</span>
    </button>
  );
}