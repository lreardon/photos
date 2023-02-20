import Head from 'next/head'
import { Inter } from '@next/font/google'
import ImageViewer from '@/components/media/ImageViewer'
import Gallery from '@/components/gallery'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Photo Gallery</title>
      </Head>
      <div className="min-h-screen min-w-screen w-screen bg-black mx-auto">
        <h1 className="text-white text-6xl m-12 mb-16">Some of my favorite photos</h1>
        <Gallery>
          <ImageViewer
            src="https://storage.googleapis.com/portfolio-photos/tarsier-close-up.jpg"
            alt="Tarsier Close Up"
            caption="Tarsiers sleep with their eyes open, which enables them to interface directly with the physical underpinnings of the universe."
          />
          <ImageViewer
            src="https://storage.googleapis.com/portfolio-photos/surf-shop-sunset.jpg"
            alt="Surf Shop Sunset"
            caption="Surfline says it's orange!"
          />
          <ImageViewer
            src="https://storage.googleapis.com/portfolio-photos/renee-eye.jpg"
            alt="Eye Close Up"
            caption="The human eye is the ultimate subject."
          />
        </Gallery>
      </div>
    </>
  )
}
