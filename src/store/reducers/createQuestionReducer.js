
import {CREATE_QUIZ,DEFAULT_QUIZ_STATE} from '../actions/actionsTypes'

const initialState = {
    quiz:[]
}

function createQuestionReducer(state = initialState, action){
    switch(action.type){
        case CREATE_QUIZ:
            return{
                ...state, quiz:[...state.quiz,action.payload]
            }
        case DEFAULT_QUIZ_STATE:
            return{
                ...state, quiz:[]
            }
        default:
            return{
                ...state
            }
    }
}

export default createQuestionReducer