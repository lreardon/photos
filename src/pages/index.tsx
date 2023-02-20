import Head from 'next/head'
import { Inter } from '@next/font/google'
import ImageViewer from '@/components/media/ImageViewer'
import Gallery from '@/components/Gallery'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Photo Gallery</title>
      </Head>
      <div className="min-h-screen min-w-screen w-screen bg-black mx-auto">
        <h1 className="text-white text-6xl m-12 mb-6">Some of my favorite photos</h1>
        <h3 className="text-left text-white text-xl ml-12 mt-6 mb-12">Zoom in for details!</h3>
        <Gallery>
          <ImageViewer
            src="https://storage.googleapis.com/portfolio-photos/tarsier-close-up.jpg"
            alt="Tarsier Close Up"
            caption="Tarsiers sleep with their eyes open, which enables them to interface directly with the physical underpinnings of the universe."
            metadata={{f: 2.8, lens: 'Sony FE 24-70mm F2.8 GM'}}
/>
          <ImageViewer
            src="https://storage.googleapis.com/portfolio-photos/surf-shop-sunset.jpg"
            alt="Surf Shop Sunset"
            caption="Surfline says it's orange!"
            metadata={{f: 2.8, lens: 'Sony FE 24-70mm F2.8 GM'}}
          />
          <ImageViewer
            src="https://storage.googleapis.com/portfolio-photos/renee-eye.jpg"
            alt="Eye Close Up"
            caption="Hoi hoi"
            metadata={{f: 2.8, lens: 'Sony FE 24-70mm F2.8 GM'}}
          />
          <ImageViewer
            src="https://storage.googleapis.com/portfolio-photos/bird-watch-lr.jpg"
            alt="Bird Watch"
            caption="Bird watching"
            // metadata={{Body: 'Sony a7Riii'}}
          />
          <ImageViewer
            src="https://storage.googleapis.com/portfolio-photos/lunchtime-lr.jpg"
            alt="Lunchtime"
            caption="I made a new friend today, he invited me for lunch."
            // metadata={{Body: 'Sony a7Riii'}}
/>
          <ImageViewer
            src="https://storage.googleapis.com/portfolio-photos/family-time-lr.jpg"
            alt="Family Time"
            caption="Don't mess with Mama"
            // metadata={{Body: 'Sony a7Riii'}}
/>
          <ImageViewer
            src="https://storage.googleapis.com/portfolio-photos/walking-home-alone-lr.jpg"
            alt="Walking Home Alone"
            caption="Walking far from home (See artist Iron and Wine)"
            // metadata={{body: 'Sony a7Riii'}}
/>
        </Gallery>
      </div>
    </>
  )
}
