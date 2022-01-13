import { combineReducers } from "redux";
import quizListReducer from "./quizListReducer";
import createQuestionReducer from './createQuestionReducer'
import authReducer from "./authReducer";


export default combineReducers({
    quizListReducer,createQuestionReducer,authReducer
})