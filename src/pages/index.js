import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const Home = () => {
  return (
    <main className={inter.className}>
      <div> Welcome to my website </div>
      <div className="bg-cyan-200"> Hello, my name is <b>  Do Thanh Liem </b> </div>
      <img className="w-24 rounded" src="/Ava.jpg" alt="Background" />
      <img className="w-128 rounded" src="/Background.jpg" alt="Background" />
    </main>
  );
};

export default Home;