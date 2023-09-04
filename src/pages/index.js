import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const Home = () => {
  return (
    <main className={inter.className}>
      <div>Xin Chao, ten toi la Do Thanh Liem</div>
      <div className="bg-cyan-200"> Hello, ten toi la Do Thanh Liem</div>
      <img className="w-24 rounded mt-4" src="/abc.jpg" alt="Avatar" />
    </main>
  );
};

export default Home;
