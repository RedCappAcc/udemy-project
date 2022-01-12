import { FETCH_QUIZES_START, FETCH_QUIZES_ERROR,FETCH_QUIZES_SUCCESS, 
    FETCH_QUIZ,CLICABLE_AUTO,CLICABLE_NONE,NEXT_QUESTION,ADD_FINISHED,
    ADD_RESULT,DEL_FINISHED,DEL_QUESTION,DEL_RESULT,DEFAULT_STATE } from "../actions/actionsTypes"


const initialState = {
    quizes:[],
    loading:false,
    error: null,
    result:[],
    finished:false,
    clikable:'auto',
    activeQuestion:0,
    quiz:[]
}


export default function quizListReducer(state = initialState,action){
    switch(action.type){
        case FETCH_QUIZES_START:
            return {
                ...state,loading:true
            }
        case FETCH_QUIZES_SUCCESS:
            return{
                ...state,quizes:action.payload,loading:false
            }
        case FETCH_QUIZES_ERROR:
            return{
                ...state,error:action.error,loading:false
            }
        case FETCH_QUIZ:
            return{
                ...state,quiz:action.payload
            }
        case CLICABLE_AUTO:
            return{
                ...state, clikable:'auto'
            }
        case CLICABLE_NONE:
            return{
                ...state, clikable:'none'
            }
        case NEXT_QUESTION:
            return {
                ...state, activeQuestion: state.activeQuestion+1
            }
        case ADD_FINISHED:
            return {
                ...state,finished: true
            }
        case ADD_RESULT:
            let resultTmp = []
            resultTmp.push(action.payload)
            return{
                ...state, result:[...state.result, ...resultTmp]
            }
        case DEL_QUESTION:
                return {
                    ...state, activeQuestion: 0
                }
        case DEL_FINISHED:
                return {
                    ...state,finished: false
                }
        case DEL_RESULT:
                return{
                    ...state, result:[]
                }
        case DEFAULT_STATE:
            return{
                quizes:[],
                loading:false,
                error: null,
                result:[],
                finished:false,
                clikable:'auto',
                activeQuestion:0,
                quiz:[]
            }
        default:
            return {...state}
    }
}