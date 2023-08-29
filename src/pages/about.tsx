import { Layout } from '@/Layouts';
import { CardImage } from '@/components/CardImage';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

export default function About() {
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
            <CardImage />
          </motion.div>
        </AnimatePresence>
      </Layout>
    </>
  );
}
