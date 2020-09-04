import React, { Component } from 'react'
import './sin.style.scss'
import InputForm from '../../components/forminput/form.component'
import Cusbutton from '../../components/button/button.component'
import {auth,signInWithGoogle} from '../../firebase/firebase.utils'

class Sign extends Component{
    constructor(){
        super();
        this.state={
            email:'',
            password:''
        }
    }
    submithandler=async(event)=>{
        event.preventDefault();
        const {email,password}=this.state;  
        try{
            await auth.signInWithEmailAndPassword(email,password);
            this.setState({email:'',password:""})
        }catch(error){
             
                console.error("errorr aa gya")    
            
        }
    }

    handleChange=(event)=>{
        const {name,value}=event.target
        this.setState({ [name]:value })
    }

    render(){
        return(
            <div className="sign-in" >
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.submithandler} >
                    <InputForm name="email" type='email' label='email' handleChange={this.handleChange} value={this.state.email} required />
                    <InputForm name="password" type='password' label='password' handleChange={this.handleChange} value={this.state.password} required />
                    <div className="buttons">
                    <Cusbutton type='submit' value='submit the form' >Sign-In</Cusbutton>
                    <Cusbutton isgug onClick={signInWithGoogle} >Sign-In With Goggle </Cusbutton>
                    </div>
                </form>
            </div>

        )
    }
}

export  default Sign