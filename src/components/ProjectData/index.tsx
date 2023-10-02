import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import style from './Projects.module.scss';
import { IPost } from '@/interfaces/posts';
import { useState } from 'react';
import { getAllImages } from '@/utils/all-images';

export interface IProjects {
  posts: IPost[];
}

export const ProjectData = ({ posts }: IProjects) => {
  const [open, setOpen] = useState<boolean>(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);

  return (
    <>
      <div className={style.containerPost}>
        {posts.length > 0 ? (
          posts.map((post, index) => (
            <div key={post.id} className={style.postBox}>
              <div
                className={style.clickContainer}
                onClick={() => {
                  setOpen(true);
                  setSelectedImageIndex(index);
                }}
              >
                <img
                  src={`${post.attributes.imagem.data.attributes.formats.medium.url}`}
                  alt={post.attributes.titulo}
                />

                <div className={style.descPost}>
                  <h2>{post.attributes.titulo}</h2>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className={style.notFound}>
            <h2>Nenhuma arte encontrada...</h2>
          </div>
        )}
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={getAllImages(posts)}
          index={selectedImageIndex}
        />
      </div>
    </>
  );
};
