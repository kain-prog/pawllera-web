export interface IPost {
  id: number;
  attributes: IAttPost;
}

export interface IThumbFormat {
  large: IThumbLarge;
}

export interface IThumbLarge {
  url: string;
  name: string;
  hash: string;
  width: number;
  height: number;
  size: number;
}

export interface IAuthor {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface ICategory {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface IDataCategory {
  data: ICategoryInfo;
}

export interface ICategoryInfo {
  id: number;
  attributes: ICategory;
}

export interface IThumbData {
  data: IThumbInfo;
}

export interface IThumbInfo {
  id: number;
  attributes: IAttThumb;
}

export interface IAttThumb {
  formats: IThumbFormat;
}

export interface IAttPost {
  title: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  author: IAuthor;
  category: IDataCategory;
  thumb: IThumbData;
}
