import classes from './burgerMenuButton.module.css'

function menuButton(){
    return(
        <div className={classes.menuButton}>
            <div className={classes.menuItem}></div>
            <div className={classes.menuItem}></div>
            <div className={classes.menuItem}></div>
        </div>
    )
}

export default menuButton