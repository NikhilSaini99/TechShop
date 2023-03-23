import React, { useEffect, useState, useCallback } from 'react';
import { useGoogleLogin } from '@react-oauth/google'
import { useNavigate} from 'react-router-dom'
import { Button } from '@mui/material';
import axios from 'axios';
const clientId = '684968524509-sinigaaqajdqb40nhku8pf9p7td11fn9.apps.googleusercontent.com'

export default function GoogleLoginButton() {
    const navigate = useNavigate()
   
    const [user, setUser] = useState(null);
    const [profile, setProfile] = useState(null)

    const login = useGoogleLogin({
        clientId: clientId,
        onSuccess: (response) => {
            setUser(response);
            console.log("Login Successfully!")
        },
        onError: (err) => {
            console.log(err)
        },
        uxMode: 'popup',
    });

    const redirects = useCallback(() => {

        navigate('/', {
            state: {
                userName: profile.name,
                userProfile: profile.picture,
                userEmail: profile.email
            }
        })
    }, [navigate, profile])
    
    useEffect(() => {
        if (user) {
            try {
                axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                    headers: {
                        Authorization: `Bearer ${user.access_token}`,
                        Accept: 'application/json'
                    }
                }).then((response) => {
                    setProfile(response.data)
                }).catch((err) => {
                    console.log("cannot fetch user profile", err.message)
                })
            } catch (err) {
                console.log("cannot fetch user profile", err.message)
            }
        }
    }, [user]);

    useEffect(() => {
        if (profile) {
            redirects();
        }
    }, [profile, redirects])

    return (
        <>
            <Button variant='contained' sx={{
                '&:hover':{backgroundColor:'#F7CA00'},
                backgroundColor: '#F7CA00', color: 'black',
                fontWeight: 'bold', textTransform: 'capitalize'
            }} onClick={() => login()}>Log In With Google</Button>
        </>
    )

}