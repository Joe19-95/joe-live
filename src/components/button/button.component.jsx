import React from 'react'
import './button.style.scss'

const CusButton=({  inverted,isgug,children,...otherProps})=>{

    return(
        
            <button className={`${inverted? 'inverted':' '}  ${isgug?"igug":""} custom-button`} 
            {...otherProps} >{children}</button>
        
    )
}

export default CusButton