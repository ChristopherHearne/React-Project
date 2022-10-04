import React from 'react'
import {useState, useEffect, useRef} from 'react'
import jwt from 'jwt-decode'
export default function SignIn(){
    const googleSignInButton = useRef(null)
    
    useEffect(() => {
        if (googleSignInButton.current) {
          window.google.accounts.id.initialize({
            client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
            callback: async (res, error) => {
              try{
                    const token = res.credential
                    const user = jwt(token)
                    console.log(user)
                } catch(err){
                    console.log(err)
                }
            },
          });
          window.google.accounts.id.renderButton(googleSignInButton.current, {
            theme: 'outline',
            size: 'large',
            type: 'standard',
            text: 'signin_with',
          });
        }
      }, [googleSignInButton.current]);
        
    const onClick = () => {
        window.google.accounts.id.prompt()
    }

    return <div className="test" ref={googleSignInButton} onClick={onClick}></div>
}