import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const Home = () => {
  return (
    <main className={inter.className}>
      <title>Profile - Thanhliem Do</title>

      <header>
        <section class="Ava">Ava is not yet added</section>

        <section class="about">
          <h1 id="h1_1">About Me:</h1>

          <div id="name">Full Name: Do Thanh Liem</div>
          <div id="bd">Birthday: 20-12-2004</div>
        </section>

        <section class="contact">
          <h1 id="h1_2">Contact:</h1>

          <div id="phone">Phone: 0816494092</div>
          <div id="email">
            Email:{' '}
            <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJZdBnsMcxdkzdjLpDXRBPTBSBKnxrSwLKRdGxFZzNqbtchNZDtRtNcJXkCfnsKrtzdsxRL">
              ncdongt@gmail.com
            </a>
          </div>
          <div id="fb">
            Facebook: <a href="https://www.facebook.com/tl.do.940436">Thanhliem Do</a>
          </div>
          <div id="addr">Address: Phan Van Tri St, Binh Thanh, Ho Chi Minh</div>
        </section>

        <section class="Education">
          <h1 id="h1_3">Education</h1>
          <div id="high">High School: Gia Dinh senior high school - Ho Chi Minh</div>
          <div id="uni">University: University of Infomation Technology - Ho Chi Minh National University</div>
        </section>
      </header>

      <section class="skills"></section>

      <img className="w-128 rounded" src="/Background.jpg" alt="Background" />
    </main>
  );
};

export default Home;
