import React from 'react'
import './preview-collection.styles.scss'
import Collect from '../collection-item/collect.component'

const CollectPreview=({title,items})=>{
    return(
        <div className='collection-preview' >
        <h1 className='title' >{title.toUpperCase()}</h1>
        <div className="preview" >
        {items
            .filter((item,index)=>{return index<4})
            .map((item)=>{
            return(
                <Collect key={item.id} item={item}></Collect>
            )})}
        </div>
        </div>
    )
}

export default CollectPreview;