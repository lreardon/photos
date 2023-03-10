import React from 'react'
import { BsInfoSquare } from 'react-icons/bs'
import { Popover } from 'antd'

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
        <div className='image-viewer'>
            <div className='image-container aspect-w-4 aspect-h-3 w-full'>
                <img src={props.src} alt={props.alt ?? ""}/>
            </div>
            <div className="photo-text-container flex justify-between items-center">
                <div className='info-container'>
                    {props.metadata ?
                    <Popover
                        placement="topLeft"
                        arrow={false}
                        content={<Metadata {...props.metadata} />}
                        overlayInnerStyle={{backgroundColor: '#151515'}}
                    >
                        <BsInfoSquare className="m-3" color='white'/>
                    </Popover>
                : null}
                </div>
                <div className="caption-container">
                    {props.caption ? <p className='caption text-white italic m-3'>{props.caption}</p> : null}
                </div>
            </div>
        </div>
    )
}

function Metadata(props: ImageMetadata) {
    const orderedMetadataKeys = ['ss', 'f', 'iso', 'mm', 'lens', 'body']
    const metadataComponents: JSX.Element[] = [];

    for (var prop of orderedMetadataKeys) {
        const value = props[prop as keyof ImageMetadata]
        if (value != null) {
        const metadataComponent = <p className="text-white" key="k"><em>{prop}</em>: <b>{value}</b></p>
            metadataComponents.push(metadataComponent)
        }
    }

    return(
        <div style={{backgroundColor: '#151515'}}>
            {metadataComponents}
        </div>
    )
}