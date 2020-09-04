import React from 'react'
import {Route} from 'react-router-dom'

import CollOver from '../../components/collection-overview/collection-overview'
import Collectio from '../collection/Collection'

const ShopPage=({match})=>{
    console.log("xxxxxxxxxxxx")    
    console.log(match.path)
        return(
        <div className='shop-name' >
          <Route exact path={`${match.path}`} component={CollOver}/>
          <Route  path={`${match.path}/:cat`} component={Collectio}/>
        </div>
        )
}


export default ShopPage