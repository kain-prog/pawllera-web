import { Layout } from '@/Layouts';
import { Container } from '@/components/Container';
import { ProjectData } from '@/components/ProjectData';
import { getAllPosts } from '@/data/posts/get-all-posts';
import { IPost } from '@/interfaces/posts';
import { GetStaticProps } from 'next';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

export interface IProjectsProps {
  posts: IPost[];
}

export default function Projects({ posts }: IProjectsProps) {
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
          >
            <Container>
              <ProjectData posts={posts} />
            </Container>
          </motion.div>
        </AnimatePresence>
      </Layout>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts();

  return {
    props: { posts },
  };
};
