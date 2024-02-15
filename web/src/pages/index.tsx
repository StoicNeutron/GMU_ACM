import { Inter } from 'next/font/google';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
const inter = Inter({ subsets: ['latin'] });

const Home: React.FC = ({}) => {
  const router = useRouter();
  useEffect(() => {
    router.push('/home');
  }, [router]);
  return <main></main>;
};

export default Home;
