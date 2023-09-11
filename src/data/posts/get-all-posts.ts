import { POSTS_URL } from '@/config/app-config';
import { IPost } from '@/interfaces/posts';
import { fetchJson } from '@/utils/fetch-json';

export interface IDataPost {
  data: IPost[];
}

export const getAllPosts = async (query?: string | void): Promise<IPost[]> => {
  const posts = await fetchJson<IDataPost>(POSTS_URL);

  if (query) {
    const postFiltered = posts.data.filter(
      (post) => post.attributes.category.data.attributes.name === query,
    );

    return postFiltered;
  } else {
    return posts.data;
  }
};
