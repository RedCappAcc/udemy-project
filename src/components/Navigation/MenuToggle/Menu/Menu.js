import classes from "./Menu.module.css"
import BackDrop from '../backDrop/backDrop'
import {NavLink} from 'react-router-dom'

function Menu(props){
    let cls = [classes.menu]
    if (props.isOpen){
        cls.push(classes.open)
    }
    const links = [{to:'/',ladel:'Список',exact:true},
                   {to:'/auth',ladel:'Авторизация',exact:true},
                   {to:'/quiz-creator',ladel:'Создать Текст',exact:true}]
    function renderLinks(){
        return links.map((el,index)=>{
            return (
                <li key = {index}>
                    <NavLink 
                    to={el.to} 
                    exact ={el.exact} 
                    activeClassName={classes.active}
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