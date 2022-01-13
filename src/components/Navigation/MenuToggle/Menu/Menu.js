import classes from "./Menu.module.css"
import BackDrop from '../backDrop/backDrop'
import {NavLink} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import {useState,useEffect} from 'react'
import {autoLogin} from '../../../../store/actions/auth'

function Menu(props){
    let cls = [classes.menu]
    const token = useSelector(state=>state.authReducer.token)
    const dispatch = useDispatch()
    let [links, setLinks]= useState([])


    if (props.isOpen){
        cls.push(classes.open)
    }

    useEffect(()=>{
        if(token===null||token===''){
            setLinks([
                {to:'/',ladel:'Список',exact:true},
                {to:'/auth',ladel:'Авторизация',exact:true},]
            )
        }
        else{
            setLinks([
                {to:'/',ladel:'Список',exact:true},
                {to:'/quiz-creator',ladel:'Создать Текст',exact:true},
                {to:'/logout',ladel:'Выйти',exact:true},]
            )
    
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[token])

    useEffect(()=>{
        dispatch(autoLogin())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])   
    function renderLinks(){
        return links.map((el,index)=>{
            return (
                <li key = {index}>
                    <NavLink 
                    to={el.to} 
                    exact ={el.exact.toString()} 
                    onClick = {props.onClickBackDrop }
                    >{el.ladel}</NavLink>
                </li>
            )
        })
    }
    return(
        <>
            <nav className={cls.join(' ')}>
                <ul>
                    {renderLinks()}
                </ul>
            </nav>
            {props.isOpen&&<BackDrop onClick = {props.onClickBackDrop }/>}
        </>
    )
}   

export default Menu