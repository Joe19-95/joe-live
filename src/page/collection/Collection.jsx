import React from 'react'
import './style.scss'
import {connect} from 'react-redux'
import {idsel} from '../../redux/shop/shop.selecter'
import Collect from '../../components/collection-item/collect.component'

const Collectio=({item})=>{
    const {title ,items}=item;
    console.log(item)
    return(
        <div className="collection-page">
           <h2 className="title">{title}</h2>
           <div className='items'>
               {
                   items.map((it=>{
                      return <Collect key={it.id} item={it}></Collect>
                   }))
               }
           </div>
        </div>
    )
    
}

const mapStateToProps=(state,ownProps)=>({
    item:idsel(ownProps.match.params.cat)(state)
});

export default connect(mapStateToProps)(Collectio)