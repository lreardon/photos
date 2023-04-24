import React from 'react'
import Head from 'next/head'
import { Inter } from '@next/font/google'
import ImageViewer from '@/components/ImageViewer'
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
            metadata={{lens: 'Sony FE 24-70mm F2.8 GM', ss: '1/320', f: 2.8, iso: 500, mm: 70 }}
          />
          <ImageViewer
            src="https://storage.googleapis.com/portfolio-photos/surf-shop-sunset.jpg"
            alt="Surf Shop Sunset"
            caption="Surfline says it's orange!"
            metadata={{lens: 'Sony FE 24-70mm F2.8 GM', ss: '1/100', f: 2.8, iso: 4000, mm: 32 }}
          />
          <ImageViewer
            src="https://storage.googleapis.com/portfolio-photos/renee-eye.jpg"
            alt="Eye Close Up"
            caption="Hoi hoi"
            metadata={{lens: 'Sony FE 24-70mm F2.8 GM', ss: '1/1000', f: 2.8, iso: 100, mm: 70 }}
          />
          <ImageViewer
            src="https://storage.googleapis.com/portfolio-photos/bird-watch-lr.jpg"
            alt="Bird Watch"
            caption="Juvenile bald eagles chill in a tree, keeping an eye out for food and girls."
            metadata={{lens: 'Tamron A047 70-300mm F/4.5-6.3 Di III RXD', ss: '1/320', f: 6.3, iso: 100, mm: 300 }}
          />
          <ImageViewer
            src="https://storage.googleapis.com/portfolio-photos/lunchtime-lr.jpg"
            alt="Lunchtime"
            caption="I made a new friend today, he invited me for lunch."
            metadata={{lens: 'Tamron A047 70-300mm F/4.5-6.3 Di III RXD', ss: '1/320', f: 6.3, iso: 8000, mm: 300 }}
          />
          <ImageViewer
            src="https://storage.googleapis.com/portfolio-photos/family-time-lr.jpg"
            alt="Family Time"
            caption="A mother Kodiak brown bear naps on the beach with her three cubs (a third is hidden behind her)."
            metadata={{lens: 'Tamron A047 70-300mm F/4.5-6.3 Di III RXD', ss: '1/400', f: 6.3, iso: 800, mm: 300 }}
          />
          <ImageViewer
            src="https://storage.googleapis.com/portfolio-photos/walking-home-alone-lr.jpg"
            alt="Walking Home Alone"
            caption="Walking far from home (See artist Iron and Wine)"
            metadata={{lens: 'Tamron A047 70-300mm F/4.5-6.3 Di III RXD', ss: '1/400', f: 6.3, iso: 800, mm: 300 }}
          />
          <ImageViewer
            src="https://storage.googleapis.com/portfolio-photos/puffin-portrait-foot.jpg"
            alt="Puffin Portrait"
            caption="A puffin floats in front of our boat, but just a little too far away to get a clear shot."
            metadata={{lens: 'Tamron A047 70-300mm F/4.5-6.3 Di III RXD', ss: '1/1250', f: 6.3, iso: 320, mm: 300  }}
          />
          <ImageViewer
            src="https://storage.googleapis.com/portfolio-photos/spotted-deer-pair.jpg"
            alt="A Pair of Spotted Deer"
            caption="Can you spot the other one? Spot! Get it?"
            metadata={{lens: 'Tamron A047 70-300mm F/4.5-6.3 Di III RXD', ss: '1/1250', f: 6.3, iso: 500, mm: 300 }}
          />
          <ImageViewer
            src="https://storage.googleapis.com/portfolio-photos/leopard-far-lighter-2.jpg"
            alt="Leopard in Yala National Park"
            caption="Lucas the leopard makes his afternoon rounds."
            metadata={{lens: 'Tamron A047 70-300mm F/4.5-6.3 Di III RXD', ss: '1/1250', f: 6.3, iso: 500, mm: 261 }}
          />
        </Gallery>
      </div>
    </>
  )
}
