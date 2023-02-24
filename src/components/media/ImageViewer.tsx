import React from 'react'
import { BsInfoSquare } from 'react-icons/bs'
import { Popover } from 'antd'

interface ImageViewerProps {
    src: string;
    alt: string;
    caption?: string;
    metadata?: {
        iso?: number;
        ss?: string;
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
                    <p className="text-white" key="k">
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
            <div className="photo-text-container flex justify-between items-center">
                <div className='info-container'>
                    {props.metadata ?
                    <Popover
                        placement="topLeft"
                        arrow={false}
                        content={Metadata}
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