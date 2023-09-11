import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const Home = () => {
  return (
    <main className={inter.className}>
      <title>Profile - Thanhliem Do</title>
      <div> Welcome to my website </div>
      <div className="bg-cyan-200">
        Hello, my name is <b> Do Thanh Liem </b> <br></br>
        <a href="https://www.facebook.com/tl.do.940436"> My Facebook </a>
      </div>
      <button id="b1">Button 1</button>
      <br></br>
      <button id="b2">Button 2</button>
      <img className="w-28 rounded" src="/Ava.jpg" alt="Background" />
      <img className="w-128 rounded" src="/Background.jpg" alt="Background" />
    </main>
  );
};

export default Home;
