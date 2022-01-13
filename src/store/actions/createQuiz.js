import {CREATE_QUIZ,DEFAULT_QUIZ_STATE} from './actionsTypes'
import axios from 'axios'




export function createQuestion(payload){
    return {
        type:CREATE_QUIZ, payload:payload
    }
}

function defaultQuizState(){
    return{
        type:DEFAULT_QUIZ_STATE
    }
}


export function createQuiz(quiz){
    return async dispatch =>{
        try{
            await axios.post('https://udemy-quiz-751da-default-rtdb.europe-west1.firebasedatabase.app/quizes.json',quiz)
            dispatch(defaultQuizState())
        }
        catch(e){
            console.log(e)
        }
        
    }
}