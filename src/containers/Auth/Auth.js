import classes from './Auth.module.css'
import Input from '../../components/UI/input/input'

function Auth(){
    function submitHadler(event){
        event.preventDefault()
    }
    function loginHadler(){}
    function registrHandler(){}
    return(
        <div className={classes.auth}>
            <div>
                <h1>Авторизация</h1>
                <form onSubmit={submitHadler}>
                    <Input label = 'E-mail'/>
                    <Input type = 'password' label = 'password'/>
                    <div>
                        <button className={classes.login} onClick={loginHadler}>Войти</button>
                        <button className={classes.registr} onClick={registrHandler}>Зарегестрироваться</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Auth