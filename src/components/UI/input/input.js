import classes from './input.module.css'

function Input (props){
    const inputType = props.type||'text'
    const htmlFor = `${inputType}-${Math.random()}`
    const invalidMessage = props.invalidMessage
    return(
        <div className={classes.customInput}>
            <label htmlFor={htmlFor}>{props.label}</label>
            <input 
            id = {htmlFor}
            type={inputType} 
            value={props.value} 
            onChange={props.onChange}
            ></input>
        </div>
    )
}

export default Input