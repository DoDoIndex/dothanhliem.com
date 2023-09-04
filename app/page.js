import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <div>Xin Chao, ten toi la Do Thanh Liem</div>
      <div className="bg-cyan-200"> Hello, ten toi la Do Thanh Liem</div>
       <img className="w-24 rounded mt-4" src="/abc.jpg" />
    </main>
  )
}
