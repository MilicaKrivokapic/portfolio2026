'use client';

import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useState, useEffect } from 'react';

interface LikeButtonProps {
  postSlug: string;
  initialLikes: number;
}

export function LikeButton({ postSlug, initialLikes }: LikeButtonProps) {
  const [likes, setLikes] = useState(initialLikes);
  const [hasLiked, setHasLiked] = useState(false);
  const [isBeating, setIsBeating] = useState(false);

  useEffect(() => {
    const liked = localStorage.getItem(`liked-${postSlug}`) === 'true';
    setHasLiked(liked);
  }, [postSlug]);

  const handleLike = async () => {
    if (!hasLiked) {
      try {
        const response = await fetch('/api/likes', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
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
    } else {
      try {
        const response = await fetch('/api/likes', {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ slug: postSlug }),
        });
        if (response.ok) {
          setLikes(prev => Math.max(0, prev - 1));
          setHasLiked(false);
          localStorage.setItem(`liked-${postSlug}`, 'false');
        }
      } catch (error) {
        console.error('Error unliking post:', error);
      }
    }
  };

  const handleMouseEnter = () => {
    setIsBeating(true);
  };
  const handleAnimationEnd = () => {
    setIsBeating(false);
  };

  return (
    <button
      onClick={handleLike}
      onMouseEnter={handleMouseEnter}
      onAnimationEnd={handleAnimationEnd}
      className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors text-red-500 dark:text-red-400`}
      aria-label={hasLiked ? "Unlike this post" : "Like this post"}
      type="button"
    >
      <span className="relative">
        <FaRegHeart className={`w-5 h-5 absolute left-0 top-0 ${isBeating ? 'animate-beat-once' : ''} ${hasLiked ? 'opacity-0' : ''}`} />
        <FaHeart className={`w-5 h-5 ${isBeating ? 'animate-beat-once' : ''} ${hasLiked ? 'opacity-100' : 'opacity-0'} transition-opacity duration-200`} />
      </span>
      <span>{likes}</span>
    </button>
  );
}