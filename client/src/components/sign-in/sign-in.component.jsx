import React, {useState} from 'react';
import {connect} from 'react-redux';

import FormInput from '../../components/form-input/form-input.component';

import CustomButton from '../../components/custom-button/custom-button.component';

import {googleSignInStart, emailSignInStart} from '../../redux/user/user.actions';

import { ButtonsContainer, SignInContainer, SignInTitle } from './sign-in.styles';

const SignIn = ({emailSignInStart, googleSignInStart})=> {

    const [userCredentials, setUserCredentials] = useState({email: '', password: ''});
    const {email, password} = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();
        

        emailSignInStart(email,password);
        setUserCredentials({email:'',password:''});
    }

    const handleChange = event => { 
        const {value, name} = event.target;

        setUserCredentials({...userCredentials,[name]: value});
    }

        return (
            <SignInContainer>
                <SignInTitle>I already have an account</SignInTitle>
                <span>Sign in with your email and password.</span>

                <form onSubmit={handleSubmit}>
                    <FormInput 
                    name="email" 
                    type = "email" 
                    value={email} 
                    required 
                    handleChange={handleChange}
                    label='Email'
                    />

                    <FormInput 
                    name="password" 
                    type = "password" 
                    value={password} 
                    required 
                    handleChange={handleChange}
                    label = 'Password'
                    />
                    <ButtonsContainer>
                        <CustomButton type = "submit">Sign In</CustomButton> 
                        <CustomButton onClick = {googleSignInStart} type='button' isGoogleSignIn>Sign In With Google</CustomButton> 
                    </ButtonsContainer>
                </form>
            </SignInContainer>
        )
    
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email,password) => dispatch(emailSignInStart({email,password}))
});

export default connect(null,mapDispatchToProps)(SignIn);