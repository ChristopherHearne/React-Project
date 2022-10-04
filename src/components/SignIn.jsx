import React from 'react'
import {useState, useEffect, useRef} from 'react'
export default function SignIn(){
    const googleSignInButton = useRef(null)
    
    const onResponse = async (response) => {
        // const responsePayload = decodeJwtResponse(response.credential)
        console.log(response.payload)
    }
    
    useEffect(() => {
        if (googleSignInButton.current) {
          window.google.accounts.id.initialize({
            client_id: '896013867387-ltnfg30uau25jqguvdd35v1ubp35u58l.apps.googleusercontent.com',
            callback: (res, error) => {
              console.log(res)
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