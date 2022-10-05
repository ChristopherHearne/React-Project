import React from 'react'
import {useState, useEffect, useRef} from 'react'
import jwt from 'jwt-decode'
export default function SignIn(){
    const googleSignInButton = useRef(null)
    const [hideSignIn, setHideSignIn] = useState(false)
    const [showUserInfo, setShowUserInfo] = useState(false)
    const [user, setUser] = useState({})
    
    useEffect(() => {
        if (googleSignInButton.current) {
          window.google.accounts.id.initialize({
            client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
            callback: async (res) => {
              try{
                    const token = res.credential
                    let userData = jwt(token)
                    console.log(userData)
                    setUser(userData)

                    setHideSignIn(true)
                    setShowUserInfo(true)

                    await fetch('http://localhost:3002/users', {
                      method: 'POST',
                      headers: {
                        Accept: 'application/json',
                        'Content-type': "application/json"
                      },
                      mode: 'no-cors',
                      body: JSON.stringify(userData)
                    })
                } catch(err){
                    alert(err)
                }
            },
          });
          window.google.accounts.id.renderButton(googleSignInButton.current, {
            theme: 'outline',
            size: 'large',
            type: 'standard',
            text: 'signin_with',
            shape: 'pill',
            cancel_on_tap_outside: true
          });
        }
      }, [googleSignInButton.current]);
        
    const onClick = () => {
        window.google.accounts.id.prompt()
    }

    return (
        <div className="sign--in--container">
            <div className={`btn--visible ${hideSignIn ? "btn--hide" :""}`} ref={googleSignInButton} onClick={onClick}></div>
            <div className={`user--info--hidden ${showUserInfo ? "user--info--visible" :""}`}>
                <p>Welcome {user.given_name} {user.family_name}!</p>
                <img src={user.picture} alt={`${user.given_name}'s Google Account`}></img>
            </div>
        </div>
    )
}