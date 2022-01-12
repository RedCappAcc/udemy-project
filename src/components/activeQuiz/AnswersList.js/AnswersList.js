import classes from './AnswerList.module.css'
import { useDispatch,useSelector } from 'react-redux';
import {useState,useEffect} from 'react'
import { changeClicableAuto,changeQuestion } from '../../../store/actions/quizList';


function AnswersList (props){
    const dispatch = useDispatch()
    const quiz = useSelector(state => state.quizListReducer.quiz)
    const activeQuestion = useSelector(state =>state.quizListReducer.activeQuestion);
    const clikable = useSelector(state =>state.quizListReducer.clikable)
    let [activeClass,setActiveClass] =  useState (classes.answersList)


    useEffect(() =>{
        return()=>{
            dispatch(changeClicableAuto())
            setActiveClass(classes.answersList)
            }
        }, [activeQuestion]);
        
        
        return(
            <li key = {props.answer.id} className = {activeClass} onClick = {()=>{
                dispatch(changeQuestion({answer:props.answer, 
                rightAnswerId:props.rightAnswerId,
                classes:classes,
                 activeClass:activeClass,
                setActiveClass:setActiveClass,
                quiz:quiz,
                activeQuestion:activeQuestion
            }))}} style = {{pointerEvents:clikable}}>
                {props.answer.id+'. '}{props.answer.text}
            </li>
        )
    }


export default AnswersList;