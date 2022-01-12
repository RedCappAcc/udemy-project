import classes from "./quiz.module.css"
import ActiveQuiz from "../../components/activeQuiz/activeQuiz";
import { useSelector,useDispatch } from "react-redux"
import Finished from "../../components/finished/finished"
import { useParams } from "react-router-dom"
import {useEffect} from 'react'
import {fetchQuiz,defaultState} from '../../store/actions/quizList'

function Quiz() {
    const dispatch = useDispatch()
    const quiz = useSelector(state => state.quizListReducer.quiz)
    const finished = useSelector(state => state.quizListReducer.finished)
    let params = useParams()
    useEffect(()=>{
        dispatch(fetchQuiz(params.id))
        return()=>{dispatch(defaultState())}
    },[])
    return (
        <div className = { classes.quiz } >
            <div className = { classes.quizWrapper }>
                <h1 > Ответьте на следующие вопросы</h1> 
                {!finished&&quiz.length>0 ? < ActiveQuiz/> : < Finished/> }
            </div>
        </div>
    )
}

export default Quiz;