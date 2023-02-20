import React from 'react'
import { BsInfoSquare } from 'react-icons/bs'
import { Popover } from 'antd'

interface ImageViewerProps {
    src: string;
    alt: string;
    caption?: string;
    metadata?: {
        iso?: number;
        ss?: number;
        f?: number;
        lens?: string;
        body?: string;
    }
}

export default function ImageViewer(props: ImageViewerProps) {

    const Metadata = props.metadata ? 
        <div style={{backgroundColor: '#151515'}}>
            {Object.entries(props.metadata).map(([k, v]) => {
                return (
                    <p className="text-white">
                        <em>{k}</em>: <b>{v}</b>
                    </p>
                )
            })}
        </div> : null
    
    return (
        <div className='image-viewer'>
            <div className='image-container'>
                <img src={props.src} alt={props.alt ?? ""}/>
            </div>
            {props.caption ? <div><p className='caption text-white italic'>{props.caption}</p></div> : null}
            {props.metadata ?
            <Popover
                placement="topLeft"
                arrow={false}
                content={Metadata}
                overlayInnerStyle={{backgroundColor: '#151515'}}
            >
                <BsInfoSquare color='white'/>
            </Popover>
            : null}
        </div>
    )
}