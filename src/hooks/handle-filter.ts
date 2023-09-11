import { useEffect, useState } from 'react';
import { getAllPosts } from '../data/posts/get-all-posts';
import { IPost } from '@/interfaces/posts';

export const useFilteredPosts = () => {
  const [filteredPosts, setFilteredPosts] = useState<IPost[]>([]);

  useEffect(() => {
    handleFilter();
  }, []);

  const handleFilter = async (filter: string | void) => {
    const posts = await getAllPosts(filter);
    setFilteredPosts(posts);
  };

  return { filteredPosts, handleFilter };
};
