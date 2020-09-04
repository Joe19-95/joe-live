import {createSelector} from 'reselect'

const selectDirectory=(state)=>{return state.direct}


export const getState=createSelector([selectDirectory],(d)=>{
    return d.section})
