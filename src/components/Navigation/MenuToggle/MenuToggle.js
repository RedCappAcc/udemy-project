import classes from './MenuToggle.module.css'
import BurgerMenuButton from './burgerMenuButton/burgerMenuButton'
import BurgerMenuClose from './burgerMenuButton/burgerMenuClose'

function MenuToggele(props){
    const cls = [classes.menuToggle]
    if (props.isOpen){
        cls.push(classes.open)
    }
    return(
        <i className={cls.join(' ')} onClick={props.onToggle}>
            {props.isOpen?<BurgerMenuClose/>:<BurgerMenuButton/>}
        </i>
    )
}

export default MenuToggele