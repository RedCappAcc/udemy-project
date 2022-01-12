import axios from "axios";
import {FETCH_QUIZES_ERROR, FETCH_QUIZES_START, FETCH_QUIZES_SUCCESS, 
        FETCH_QUIZ, CLICABLE_AUTO,CLICABLE_NONE, NEXT_QUESTION,
        ADD_FINISHED,ADD_RESULT, DEL_RESULT, DEL_FINISHED, DEL_QUESTION, DEFAULT_STATE} from './actionsTypes'


export function fetchQuizes(){
    return async dispatch=>{
        dispatch(fetchQuizesStart())
        try{
            const response = await axios.get('https://udemy-quiz-751da-default-rtdb.europe-west1.firebasedatabase.app/quizes.json')
            const quiz = Object.keys(response.data).map(el=>{return el})
            dispatch(fetchQuizesSuccess(quiz))
        }
        catch(error){
            dispatch(fetchQuizesError(error))
        }
    }
}

export function fetchQuiz(id){
    return async dispatch=>{
        dispatch(fetchQuizesStart())
        try{
            const response =  await axios.get(`https://udemy-quiz-751da-default-rtdb.europe-west1.firebasedatabase.app/quizes/${id}.json`)
            dispatch(fetchQuizInit(response.data))
        }
        catch(error){
            dispatch(fetchQuizesError(error))
        }
    }
}

export function changeQuestion(props){
    return dispatch =>{
    if (props.activeQuestion+1>=props.quiz.length){
        if (props.answer.id===props.rightAnswerId){
            props.setActiveClass(props.activeClass+ ' '+props.classes.succes)
            dispatch(addResult({question:props.quiz[props.activeQuestion].question,result:true}))
        }
        else{
            props.setActiveClass(props.activeClass+ ' '+props.classes.error)
            dispatch(addResult({question:props.quiz[props.activeQuestion].question,result:false}))
        }
        dispatch(changeClicableNone())
        setTimeout(()=>{ dispatch(addFinished())},1000)
    }
    else{
        if (props.answer.id===props.rightAnswerId){
            props.setActiveClass(props.activeClass+ ' '+props.classes.succes)
            dispatch(addResult({question:props.quiz[props.activeQuestion].question,result:true}))
            dispatch(changeClicableNone())
            setTimeout(()=>{
                dispatch(nextQuestion())
            },1000)}
        else{
            props.setActiveClass(props.activeClass+ ' '+props.classes.error)
            dispatch(addResult({question:props.quiz[props.activeQuestion].question,result:false}))
            dispatch(changeClicableNone())
            setTimeout(()=>{
                dispatch(nextQuestion())
            },1000)}
        }
    }
}

function fetchQuizesStart(){
    return{
        type:FETCH_QUIZES_START
    }
}

function fetchQuizesSuccess(payload){
    return{
        type:FETCH_QUIZES_SUCCESS, 
        payload:payload
    }
}

function fetchQuizesError(error){
    return{
        type:FETCH_QUIZES_ERROR, 
        payload:error
    }
}

function fetchQuizInit(payload){
    return {
        type: FETCH_QUIZ,
        payload:payload
    }
}

export function changeClicableAuto (){
    return{
        type:CLICABLE_AUTO
    }
}
export function changeClicableNone (){
    return{
        type:CLICABLE_NONE
    }
}
export function nextQuestion (){
    return{
        type:NEXT_QUESTION
    }
}
export function addResult (payload){
    return {
        type:ADD_RESULT, payload:payload
    }
}
export function addFinished(){
    return {
        type:ADD_FINISHED
    }
}
export function delResult(){
    return{
        type:DEL_RESULT
    }
}
export function delFinshed(){
    return{
        type:DEL_FINISHED
    }
}
export function delQuestion(){
    return{
        type:DEL_QUESTION
    }
}

export function defaultState(){
    return{
        type:DEFAULT_STATE
    }
}