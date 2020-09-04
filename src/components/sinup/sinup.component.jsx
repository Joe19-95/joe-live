import React, { Component } from'react'
import InputForm from '../../components/forminput/form.component'
import CusButton from '../../components/button/button.component'
import './sinup.style.scss'
import {auth,createUserProfileDocument} from '../../firebase/firebase.utils'

class SinUp extends Component{
    constructor(){
        super();
        this.state={
            displayName:"",
            email:'',
            password:'',
            confirmPassword:''
        }
    }
     handleSubmit=async (event)=>{
         event.preventDefault();
         const {displayName,email,password,confirmPassword}=this.state;
         if(password!==confirmPassword){
             alert("password dont match"); return;
         }
         try{
             const {user}=await auth.createUserWithEmailAndPassword(email,password);
             await createUserProfileDocument(user,{displayName})
             this.setState({
                displayName:"",
                email:'',
                password:'',
                confirmPassword:''
             })
         }catch(error){
             console.log("not able to create documnet element for the user",error.message)
         }

    }
    handleChange=(event)=>{
        let name=event.target.name;
        let value=event.target.value;
        this.setState({ [name]:value })
    }
    render(){
        const {displayName,email,password,confirmPassword}=this.state;
        return(
            <div className='sign-up' >
            <h2 className='title' > I do not have a accoutn </h2>
            <span>  Sign up with your Email and password </span>
            <form className='sign-up-form' onSubmit={this.handleSubmit} >
            <InputForm type='text' value={displayName} name="displayName" onChange={this.handleChange} label='displayName' required />
            <InputForm type='email' value={email} name="email" onChange={this.handleChange} label='Email' required />
            <InputForm type='password' value={password} name="password" onChange={this.handleChange} label='password' required />
            <InputForm type='password' value={confirmPassword} name="confirmPassword" onChange={this.handleChange} label='confirmPssword' required />
            <CusButton type='submit' > Sign Up</CusButton>
            </form>
            </div>
        )
    }
}

export default SinUp