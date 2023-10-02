export interface IPost {
  id: number;
  attributes: IAttPost;
}

export interface IThumbFormat {
  medium: IThumbMedium;
}

export interface IThumbMedium {
  url: string;
  name: string;
  hash: string;
  width: number;
  height: number;
  size: number;
}

export interface IAuthor {
  id: number;
  Nome: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface ICategory {
  id: number;
  Nome: string;
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
  titulo: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  author: IAuthor;
  categoria: IDataCategory;
  imagem: IThumbData;
}
