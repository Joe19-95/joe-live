import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth'

const config={
    apiKey: "AIzaSyDtIsEb3yPRiGTwPE1w7vnDcRfmOU75V5A",
    authDomain: "clothing-db-007.firebaseapp.com",
    databaseURL: "https://clothing-db-007.firebaseio.com",
    projectId: "clothing-db-007",
    storageBucket: "clothing-db-007.appspot.com",
    messagingSenderId: "1089691042113",
    appId: "1:1089691042113:web:78cc6d39762536950c21c0",
    measurementId: "G-EWWV74881B"
  }

export const createUserProfileDocument = async (userAuth,additionalData)=>{
  if(!userAuth) return;
  const userRef=firestore.doc(`users/${userAuth.uid}`)
  const snapshot=await userRef.get();
  console.log(snapshot)
  if(!snapshot.exists){
    const {displayName,email}=userAuth;
    const ceatedAt =new Date();
    try{
      await userRef.set({displayName,email,ceatedAt,...additionalData})
    }catch(error){
      console.error("nhi banra bhaiyaa",error.message )
    }
  }
  return userRef;
}

firebase.initializeApp(config);

export const firestore =firebase.firestore();
export const auth=firebase.auth();

const provider=new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle=()=>auth.signInWithPopup(provider);

export default firebase;
