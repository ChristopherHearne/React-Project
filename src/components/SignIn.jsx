import React from 'react'
import {useState, useEffect, useRef} from 'react'
import jwt from 'jwt-decode'
import { postUserData, fetchUserByEmail } from '../API'
export default function SignIn(){
    const googleSignInButton = useRef(null)
    const [hideSignIn, setHideSignIn] = useState(false)
    const [showUserInfo, setShowUserInfo] = useState(false)
    const [activeUser, setActiveUser] = useState({})
    const [hasPreviousLogin, setHasPreviousLogin] = useState(false)
    
    const checkPreviousLogin = async (email) => {
      const request =  await fetchUserByEmail(email)
      const result = request.json()
      console.log(result.status)
    }
    useEffect(() => {
        if (googleSignInButton.current) {
          window.google.accounts.id.initialize({
            client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
            callback: async (res) => {
              try{
                    const token = res.credential
                    let userData = jwt(token)
                    checkPreviousLogin(userData.email)
                    await postUserData(userData)
                    setActiveUser(userData)
                    setHideSignIn(true)
                    setShowUserInfo(true)
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
                <p>Welcome {activeUser.given_name} {activeUser.family_name}!</p>
                <img src={activeUser.picture} alt={`${activeUser.given_name}'s Google Account`}></img>
            </div>
        </div>
    )
}