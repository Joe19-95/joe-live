import React from 'react'
import {connect } from 'react-redux'
import {itsel} from '../../redux/shop/shop.selecter'
import {createStructuredSelector} from 'reselect'
import './style.scss'
import CollectPreview from '../../components/preview-collection/preview-collection.component'

const CollOver =({it})=>{
    console.log(it)
    return(
        <div className="collections-overview">
            {
                it.map(({id,...other})=>{
               return <CollectPreview key={id} {...other} />
            })
            }
        </div>
    )
}

const mapStateToProps=createStructuredSelector({
    it:itsel
})

export default connect(mapStateToProps)(CollOver)