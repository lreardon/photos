import React from "react"
import { BsInfoSquare } from 'react-icons/bs'
import { Popover } from 'antd'

interface ImageMetadataProps {
    ss?: string;
    f?: number;
    iso?: number;
    mm?: number;
    lens?: string;
    body?: string;
}


export default function ImageMetadataPopover(props: ImageMetadataProps) {
    return(
        <Popover
            placement="topLeft"
            arrow={false}
            content={<ImageMetadata {...props} />}
            overlayInnerStyle={{backgroundColor: '#151515'}}
        >
            <BsInfoSquare className="m-3" color='white'/>
        </Popover>
    )
}

function ImageMetadata(props: ImageMetadataProps) {
    const orderedMetadataKeys = ['ss', 'f', 'iso', 'mm', 'lens', 'body']
    const metadataComponents: JSX.Element[] = [];

    for (var prop of orderedMetadataKeys) {
        const value = props[prop as keyof ImageMetadataProps]
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