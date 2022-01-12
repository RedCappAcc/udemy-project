import classes from './Loader.module.css'

function Loader(){
    return(
        <div className={classes.loader}>
            <div className={classes.ripple}>
                <div/>
                <div/>
            </div>
        </div>
    )
}

export default Loader