import { Layout } from '@/Layouts';
import { ContactMe } from '@/components/Contact-me';
import { Container } from '@/components/Container';
import { Form } from '@/components/Form';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

export default function Contact() {
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
            <h1 style={{ color: '#fff', textAlign: 'center' }}>Contato</h1>
            <Container styleProps={{ display: 'flex' }}>
              <ContactMe />
              <Form />
            </Container>
          </motion.div>
        </AnimatePresence>
      </Layout>
    </>
  );
}
