import {AUTH_SUCCES,AUTH_LOGOUT} from '../actions/actionsTypes'

let initialState = {
    token:null
}

function authReducer(state = initialState,action){
    switch(action.type){
        case AUTH_SUCCES:
            return{
                ...state,token:action.payload
            }
        case AUTH_LOGOUT:
            return{
                ...state,token:null
            }
        default:
            return{
                ...state
            }
    }
}

export default authReducer