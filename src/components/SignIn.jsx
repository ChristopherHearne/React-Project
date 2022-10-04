import React from 'react'
import {useState, useEffect} from 'react'
export default function SignIn(){
    
    useEffect(() => {
        window.gapi.signin2.render('g-signin2', {
            'scope': 'https://www.googleapis.com/auth/plus.login',
            'width': 200,
            'height': 50,
            'longtitle': true, 
            'theme': 'dark',
            'onsuccess': {onSignIn}
        })
    })
    function onSignIn(googleUser){
        console.log("Triggered")
        const profile = googleUser.getBasicProfile()
        console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
    }
    return(
        <>
            <div id="g-signin2"></div>
        </>
    )
}