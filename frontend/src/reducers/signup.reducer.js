import { signupConstants } from "../actions/constants"

const initState = {
    error:  null,
    message: '',
    loading: false, 
    signup: false
}

export default (state = initState, action) => {
    switch(action.type){
        case signupConstants.SIGNUP_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;
        case signupConstants.SIGNUP_SUCCESS:
            state = {
                ...state,
                loading: false,
                signup: true,
                message: action.payload.message
            }    
            break;
        case signupConstants.SIGNUP_fAILURE:
            state = {
                ...state,
                loading: false,
                error: action.payload.error
            }
            break;
    }

    return state;
}