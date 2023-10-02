import style from './CategoryPosts.module.scss';
import { ICategoryInfo } from '@/interfaces/posts';
import { useState } from 'react';

export interface ICategoryProps {
  categories: ICategoryInfo[];
  handleFilter: (filter: string) => Promise<void>;
}

export const CategoryPosts = ({ categories, handleFilter }: ICategoryProps) => {
  const [category, setCategory] = useState<string>('');

  return (
    <>
      <ul className={style.list}>
        {categories.map((category) => (
          <li
            className={style.filter}
            key={category.id}
            onClick={() => {
              handleFilter(`${category.attributes.Nome}`);
              setCategory(category.attributes.Nome);
            }}
          >
            {category.attributes.Nome}
          </li>
        ))}
      </ul>

      <h1 className={`${style.title} ${category ? style.show : ''}`}>
        {category}
      </h1>
    </>
  );
};
