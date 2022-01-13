import classes from "./quiz.module.css"
import { useSelector,useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import {useEffect} from 'react'
import {fetchQuiz,defaultState} from '../../store/actions/quizList'
import Loader from '../../components/UI/loader/Loader'
import QuizBody from "./quizBody";

function Quiz() {
    const dispatch = useDispatch()
    const quiz = useSelector(state => state.quizListReducer.quiz)
    let params = useParams()
    useEffect(()=>{
        dispatch(fetchQuiz(params.id))
        dispatch(defaultState())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    return (
        <div className = { classes.quiz } >
            <div className = { classes.quizWrapper }>
                <h1 > Ответьте на следующие вопросы</h1> 
                {(quiz.length>0)?<QuizBody/>:<Loader/>}
            </div>
        </div>
    )
}

export default Quiz;