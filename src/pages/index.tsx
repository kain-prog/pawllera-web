import { Layout } from '@/Layouts';
import { Button } from '@/components/Button';
import { TypeWelcome } from '@/components/Typing-Welcome';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

export default function Home() {
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
            <TypeWelcome />
            <Button
              clName={''}
              redirect={'/about'}
              content={'Sobre mim'}
              iconFA={faArrowAltCircleRight}
            />
          </motion.div>
        </AnimatePresence>
      </Layout>
    </>
  );
}
