import classes from './AnswerList.module.css'
import { useDispatch,useSelector } from 'react-redux';
import {useState,useEffect} from 'react'


function AnswersList (props){
    const dispatch = useDispatch()
    const quiz = useSelector(state => state.quiz)
    const activeQuestion = useSelector(state =>state.activeQuestion);
    const clikable = useSelector(state =>state.clikable)
    let [activeClass,setActiveClass] =  useState (classes.answersList)


    useEffect(() =>{
        return()=>{
            dispatch({type:"CLICABLE_AUTO"});
            setActiveClass(classes.answersList)
        }
    }, [activeQuestion]);


    function nextQuestion(){
        if (activeQuestion+1>=quiz.length){
            if (props.answer.id===props.rightAnswerId){
                setActiveClass(activeClass+ ' '+classes.succes)
                dispatch({type:"ADD_RESULT",payload:{question:quiz[activeQuestion].question,result:true}})
            }
            else{
                setActiveClass(activeClass+ ' '+classes.error)
                dispatch({type:"ADD_RESULT",payload:{question:quiz[activeQuestion].question,result:false}})
            }
            dispatch({type:"CLICABLE_NONE"})
            setTimeout(()=>{dispatch({type: "ADD_FINISHED"})},1000)
        }
        else{
            if (props.answer.id===props.rightAnswerId){
                setActiveClass(activeClass+ ' '+classes.succes)
                dispatch({type:"ADD_RESULT",payload:{question:quiz[activeQuestion].question,result:true}})
                dispatch({type:"CLICABLE_NONE"})
                setTimeout(()=>{
                    dispatch({type:"NEXT_QUESTION"}
                    )
                },1000)}
            else{
                setActiveClass(activeClass+ ' '+classes.error)
                dispatch({type:"ADD_RESULT",payload:{question:quiz[activeQuestion].question,result:false}})
                dispatch({type:"CLICABLE_NONE"})
                setTimeout(()=>{
                    dispatch({type:"NEXT_QUESTION"})
                },1000)}
            }
        }
    

        return(
            <li key = {props.answer.id} className = {activeClass} onClick = {nextQuestion} style = {{pointerEvents:clikable}}>
                {props.answer.id+'. '}{props.answer.text}
            </li>
        )
    }


export default AnswersList;