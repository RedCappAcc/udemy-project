import {AUTH_SUCCES,AUTH_LOGOUT} from '../actions/actionsTypes'
import axios from 'axios'

function loginSucces(token){
    return{
        type:AUTH_SUCCES,payload:token
    }
}

export function LogOut(){
    localStorage.removeItem('token')
    localStorage.removeItem('userId')
    localStorage.removeItem('expirationData')
    return{
        type:AUTH_LOGOUT
    }
}

export function login(authMetod, authData){
    return async dispatch =>{
        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB5J1e80f4UCAouCmmbnNXEYQi5P9mMMTs'
        if (authMetod==='LOGIN'){
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB5J1e80f4UCAouCmmbnNXEYQi5P9mMMTs'
        }

        const response = await axios.post(url,authData)
        const data = response.data

        let expirationData = new Date(new Date().getTime() + data.expiresIn*1000)

        localStorage.setItem('token', data.idToken)
        localStorage.setItem('userId', data.localId)
        localStorage.setItem('expirationData', expirationData)

        dispatch(loginSucces(data.idToken))
        alert('Успешно ' + response.status)
        dispatch(autoLogout(data.expiresIn))
        redirectToHome()

    }
}

function autoLogout(time){
    return dispatch=>{
        setTimeout(()=>{
            dispatch(LogOut())
        },time*1000)
    }
}


export function autoLogin(){
    return dispatch=>{
        const token = localStorage.getItem('token')
        if (!token){
            dispatch(LogOut())
        }
        else{
            const expirationDate = new Date(localStorage.getItem('expirationData'))
            if(expirationDate<=new Date()){
                dispatch(LogOut())
            }
            else{
                dispatch(loginSucces(token))
                dispatch(autoLogout((expirationDate.getTime() - new Date().getTime())/1000))
            }
        }
    }
}

function redirectToHome(){
 
}