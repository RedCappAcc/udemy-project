import { useSelector,useDispatch} from "react-redux"
import classes from './finished.module.css'
import trueIcon from './heart.png'
import falseIcon from './false.png'
import {Link} from 'react-router-dom'
import {delFinshed,delResult,delQuestion} from '../../store/actions/quizList'


function Finished(){
    const dispatch = useDispatch()
    const result = useSelector(state=>state.quizListReducer.result)
    const quiz = useSelector(state => state.quizListReducer.quiz)
    let trueAnswer = 0
    result.map(el=>el.result).forEach(el=>{if(el){trueAnswer++}})
    let question = result.map((el,index)=><div key = {index} className = {classes.answerItem}><span>{index+1+'. '}{el.question}</span><img src = {(el.result)?trueIcon:falseIcon} alt = ''/></div>)
    function refreshFinish(){
            dispatch(delFinshed())
            dispatch(delResult())
            dispatch(delQuestion())
    }
    return(
        <div className = {classes.finished}>
            <div className = {classes.answer}>{question}</div>
            <div>Правильно {trueAnswer} из {quiz.length}</div> 
            <div className={classes.buttons}>
                <button onClick = {refreshFinish} className = {classes.try}>Повторить</button>
                <div className = {classes.returnForTestList}>
                        <Link onClick = {refreshFinish} to = '/'  >Перейти к списку тестов</Link>
                </div>
            </div>

        </div>
    )
}
export default Finished