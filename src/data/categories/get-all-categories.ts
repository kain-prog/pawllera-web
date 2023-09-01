import { CATEGORIES_URL } from '@/config/app-config';
import { ICategoryInfo } from '@/interfaces/posts';
import { fetchJson } from '@/utils/fetch-json';

export interface IDataCategory {
  data: ICategoryInfo[];
}

export const getAllCategories = async (): Promise<ICategoryInfo[]> => {
  const category = await fetchJson<IDataCategory>(CATEGORIES_URL);
  return category.data;
};
