import classes from './Auth.module.css'
import Input from '../../components/UI/input/input'
import { useState} from 'react'
import axios from 'axios'

function Auth(){
        let [email,setEmail] =  useState({
            value: '',
            type: 'email',
            label: 'E-mail',
            errorMessage: 'Введите корректный email',
            valid: false,
            touched: false,
        })
        let [password,setPassword] =  useState({
            value: '',
            type: 'password',
            label: 'Пароль',
            errorMessage: 'Пароль должен состоять как миниму из 8 символов',
            valid: false,
            touched: false,
        })
        let [clsLogin,setClsLogin] = useState([classes.login, classes.notValid])
        let [clsRegistr,setClsregistr] = useState([classes.registr, classes.notValid])

    function submitHadler(event){
        event.preventDefault()
    }
    async function loginHadler(){
        if (email.valid&&password.valid){
            const authData = {
                email:email.value,
                password:password.value,
                returnSecureToken:true
            }
            try{
                const response = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB5J1e80f4UCAouCmmbnNXEYQi5P9mMMTs',authData)
                alert('Успешно ' + response.status)
            }
            catch(e){
                alert(e)
                console.log(e)
            }
        }
    }

    async function registrHandler(){
        if (email.valid&&password.valid){
            const authData = {
                email:email.value,
                password:password.value,
                returnSecureToken:true
            }
            try{
                const response = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB5J1e80f4UCAouCmmbnNXEYQi5P9mMMTs',authData)
                alert('Успешно '+response.status)
            }
            catch(e){
                alert(e)
                console.log(e)
            }
        }
    }

    function onChangeHandler(e,label){
        if (label===email.label){
            let localEmail = {...email} 
            localEmail.value =  e.target.value
            localEmail.touched = true
            let validReg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            if (validReg.test(localEmail.value)){
                localEmail.valid = true
                //проверка для активации кнопок входа и регистрации
                if(password.valid){
                    setClsLogin([classes.login])
                    setClsregistr([classes.registr])
                }
            }
            else{
                localEmail.valid = false
                setClsLogin([classes.login, classes.notValid])
                setClsregistr([classes.registr, classes.notValid])
                
            }
            setEmail(localEmail)
        }
        else{
            let localPassword = {...password}
                localPassword.value =  e.target.value.trim()
                localPassword.touched = true
                if (localPassword.value.length>=8){
                    localPassword.valid = true
                    //проверка для активации кнопок входа и регистрации
                    if(email.valid){
                        setClsLogin([classes.login])
                        setClsregistr([classes.registr])
                    }
                }
                else{
                    localPassword.valid = false
                    setClsLogin([classes.login,classes.notValid])
                    setClsregistr([classes.registr,classes.notValid])
                }
                setPassword(localPassword)
        }
    }
    return(
        <div className={classes.auth}>
            <div>
                <h1>Авторизация</h1>
                <form onSubmit={submitHadler}>
                    <Input 
                    onChange = {onChangeHandler}
                    value = {email.value}
                    label = {email.label} 
                    errorMessage = {email.errorMessage} 
                    valid = {email.valid} 
                    touched = {email.touched}/>
                    <Input 
                    onChange = {onChangeHandler}
                    value = {password.value}
                    type = {password.type}
                    label = {password.label} 
                    errorMessage = {password.errorMessage} 
                    valid = {password.valid} 
                    touched = {password.touched}/>
                    <div>
                        <button className={clsLogin.join(' ')} onClick={loginHadler}>Войти</button>
                        <button className={clsRegistr.join(' ')} onClick={registrHandler}>Зарегестрироваться</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Auth