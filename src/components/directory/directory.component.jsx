import React from 'react'
import MenuItem from '../menu-item/menu-item.component'
import './directory.style.scss'
import {getState} from '../../redux/directory/direct.selector'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'

const  Directory=({sectio})=>  {
  console.log("ddddddddddddddd")  
  console.log(sectio)

        return(
        <div className="directory-menu" >
        
            {sectio.map(({title,imageUrl,size,id,linkUrl})=>{
                return( <MenuItem title={title} imageUrl={imageUrl} key={id} size={size} linkUrl={linkUrl} ></MenuItem>)
            }
            )
            }
        
        </div>)
    }


const mapStateToProps=createStructuredSelector({
    sectio:getState
})

export default connect(mapStateToProps)(Directory)