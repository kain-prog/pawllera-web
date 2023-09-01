import { Layout } from '@/Layouts';
import { ProjectData } from '@/components/ProjectData';
import { getAllPosts } from '@/data/posts/get-all-posts';
import { ICategoryInfo, IPost } from '@/interfaces/posts';
import { GetStaticProps } from 'next';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import { CategoryPosts } from '@/components/CategoryPosts';
import { getAllCategories } from '@/data/categories/get-all-categories';
import { useFilteredPosts } from '@/hooks/handle-filter';

export interface IProjectsProps {
  posts: IPost[];
  categories: ICategoryInfo[];
}

export default function Projects({ posts, categories }: IProjectsProps) {
  const { filteredPosts, handleFilter } = useFilteredPosts();
  const router = useRouter();

  return (
    <>
      <Layout>
        <AnimatePresence mode="wait">
          <motion.div
            key={router.route}
            initial="initialState"
            animate="animateState"
            transition={{ duration: 0.5 }}
            exit="exitState"
            variants={{
              initialState: { opacity: 0, scale: 0.5 },
              animateState: { opacity: 1, scale: 1 },
            }}
            className="base-page-size"
            style={{ width: '100%' }}
          >
            <CategoryPosts
              categories={categories}
              handleFilter={handleFilter}
            />
            <ProjectData
              posts={filteredPosts.length > 0 ? filteredPosts : posts}
            />
          </motion.div>
        </AnimatePresence>
      </Layout>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts();
  const categories = await getAllCategories();

  return {
    props: { posts, categories },
  };
};
