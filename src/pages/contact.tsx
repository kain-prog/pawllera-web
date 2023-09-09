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
            style={{ width: '100%' }}
          >
            <h1
              style={{
                color: '#fff',
                textAlign: 'center',
                textShadow: '0px 0px 5px var(--main-color)',
              }}
            >
              Contato
            </h1>
            <Container styleProps={{ display: 'flex', marginTop: '40px' }}>
              <ContactMe />
              <Form />
            </Container>
          </motion.div>
        </AnimatePresence>
      </Layout>
    </>
  );
}
