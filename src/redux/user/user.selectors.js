import {createSelector} from 'reselect'

const userSelect =(state)=>{return (state.user)}
export const currentUserSelelctor=createSelector([userSelect],(user)=>{return(user.currentUser)})