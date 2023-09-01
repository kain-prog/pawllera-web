import { useState } from 'react';
import { getAllPosts } from '../data/posts/get-all-posts';
import { IPost } from '@/interfaces/posts';

export const useFilteredPosts = () => {
  const [filteredPosts, setFilteredPosts] = useState<IPost[]>([]);

  const handleFilter = async (filter: string) => {
    const posts = await getAllPosts(filter);
    setFilteredPosts(posts);
  };

  return { filteredPosts, handleFilter };
};
