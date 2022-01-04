import classes from './burgerMenuButton.module.css'

function Close(){
    return(
        <div className={classes.menuButton}>
            <div className={classes.menuItemClose}></div>
            <div className={classes.menuItemClose}></div>
        </div>
    )
}

export default Close