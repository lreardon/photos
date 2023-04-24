import React from 'react'
import ImageMetadataPopover from './ImageMetadataPopover';

interface ImageViewerProps {
    src: string;
    alt: string;
    caption?: string;
    metadata?: ImageMetadata
}

interface ImageMetadata {
    ss?: string;
    f?: number;
    iso?: number;
    mm?: number;
    lens?: string;
    body?: string;
}

export default function ImageViewer(props: ImageViewerProps) {    
    return (
        <div className='mx-auto py-2'>
            <div className='relative mx-auto w-full'>
                <img className='object-scale-down mx-auto' src={props.src} alt={props.alt ?? ""}/>
            </div>
            <div className="flex justify-between items-center">
                <div className='info-container'>
                    {props.metadata ?
                    <ImageMetadataPopover {...props.metadata} />
                : null}
                </div>
                <div className="caption-container">
                    {props.caption ? <p className='caption text-white italic m-3'>{props.caption}</p> : null}
                </div>
            </div>
        </div>
    )
}