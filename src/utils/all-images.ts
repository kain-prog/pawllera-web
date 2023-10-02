import { IPost } from '@/interfaces/posts';

interface IImage {
  src: string;
}

export const getAllImages = (posts: IPost[]): IImage[] => {
  const newArray = [];

  for (const post of posts) {
    newArray.push({
      src: `${post.attributes.imagem.data.attributes.formats.medium.url}`,
    });
  }

  return newArray;
};
