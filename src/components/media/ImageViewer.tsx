import React from 'react'

interface ImageViewerProps {
    src: string;
    alt: string;
    caption?: string;
}

export default function ImageViewer(props: ImageViewerProps) {
    return (
        <div className='image-viewer'>
            <div className='image-container'>
                <img src={props.src} alt={props.alt ?? ""}/>
            </div>
            {props.caption ? <div><p className='caption text-white italic'>{props.caption}</p></div> : null}
        </div>
    )
}