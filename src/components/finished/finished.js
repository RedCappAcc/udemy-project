import { useSelector,useDispatch } from "react-redux"
import classes from './finished.module.css'
import trueIcon from './heart.png'
import falseIcon from './false.png'
import {Link} from 'react-router-dom'


function Finished(){
    const dispatch = useDispatch()
    const result = useSelector(state=>state.result)
    const quiz = useSelector(state => state.quiz)
    let trueAnswer = 0
    result.map(el=>el.result).forEach(el=>{if(el){trueAnswer++}})
    let question = result.map((el,index)=><div className = {classes.answerItem}><span>{index+1+'. '}{el.question}</span><img src = {(el.result)?trueIcon:falseIcon}/></div>)
    function refresh(){
        dispatch({type:"DEL_FINISHED"})
        dispatch({type:"DEL_RESULT"})
        dispatch({type:"DEL_QUESTION"})
    }
    return(
        <div className = {classes.finished}>
            <div className = {classes.answer}>{question}</div>
            <div>Правильно {trueAnswer} из {quiz.length}</div> 
            <div className={classes.buttons}>
                <button onClick = {refresh} className = {classes.try}>Повторить</button>
                <div className = {classes.returnForTestList}>
                        <Link onClick = {refresh} to = '/'  >Перейти к списку тестов</Link>
                </div>
            </div>

        </div>
    )
}
export default Finished