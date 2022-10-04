import React from 'react'
import {useState, useEffect, useRef} from 'react'
export default function SignIn(){
    const googleSignInButton = useRef(null)
    
    const onResponse = async ({credential}) => {
        console.log(credential)
    }
    window.google.accounts.id.initialize({
        client_id: "896013867387-ltnfg30uau25jqguvdd35v1ubp35u58l.apps.googleusercontent.com",
        callback: onResponse,
        auto_select: false
    })
    
    window.google.accounts.id.renderButton(
        googleSignInButton.current, 
        { theme: "outline", size: "large", text:'signin_with', width: "250" }
    )
        
    const onClick = () => {
        window.google.accounts.id.prompt()
    }

    return (
        <div className="testing">
            <div className="test" ref={googleSignInButton} onClick={onClick}></div>
        </div>
    )
}