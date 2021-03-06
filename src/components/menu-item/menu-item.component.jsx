import React from 'react'
import './menu-item.style.scss'
import {withRouter} from 'react-router-dom'

const MenuItem=({title,imageUrl,size,history,linkUrl,match})=>{
    return(
        <div  className={` ${size} menu-item`} onClick={()=>{history.push(`${match.url}${linkUrl}`)}} >
        {/* {console.log(history)}
        {console.log("###########")} */}
        {/* {console.log(linkUrl)}
        {console.log("############")} */}
        {console.log(match)}
        <div 
        className="bakimag" 
         style={{ 
             backgroundImage:`url(${imageUrl})`
            }} />
        <div className="content" >
            <h1 className="title" >{title.toUpperCase()}</h1>
            <span className="subtitle" >Shop Now</span>
        </div>
    </div>
    )

}
export default withRouter(MenuItem)