import React from 'react'
import {useState, useEffect, useRef} from 'react'
const jose = require('jose')
export default function SignIn(){
    const googleSignInButton = useRef(null)
    
    useEffect(() => {
        if (googleSignInButton.current) {
          window.google.accounts.id.initialize({
            client_id: '896013867387-ltnfg30uau25jqguvdd35v1ubp35u58l.apps.googleusercontent.com',
            callback: async (res, error) => {
                console.log(typeof res.credential)
              try{
                  const {payload, protectedHeader} =  await jose.jwtDecrypt(res.credential)
                  console.log(payload)
                  console.log(protectedHeader)
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