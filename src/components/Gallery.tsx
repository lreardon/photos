import React from 'react'

interface GalleryProps {
    children: any | any[]
}

export default function Gallery(props: GalleryProps) {
    return (
        <div className='gallery'>
            {props.children}
        </div>
    )
}