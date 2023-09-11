import { SITE_URL } from '@/config/app-config';
import { IPost } from '@/interfaces/posts';

interface IImage {
  src: string;
}

export const getAllImages = (posts: IPost[]): IImage[] => {
  const newArray = [];

  for (const post of posts) {
    newArray.push({
      src: `${SITE_URL}${post.attributes.thumb.data.attributes.formats.large.url}`,
    });
  }

  return newArray;
};
