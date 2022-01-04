import classes from './backDrop.module.css'

function BackDrop(props){
    return(
        <div className={classes.backDrop} onClick={props.onClick}></div>
    )
}

export default BackDrop