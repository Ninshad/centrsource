import axios from "../helpers/axios";
import { signupConstants } from "./constants"

export const signup = (user) =>{

    console.log(user);

    return async (dispatch) => {

        dispatch({ type: signupConstants.SIGNUP_REQUEST });
        const res = await axios.post(`/signup`, {
            ...user  
        })
        console.log(res.data);

        if(res.status === 201){
            const { message } = res.data;
            console.log(message);
            dispatch({
                type: signupConstants.SIGNUP_SUCCESS,
                payload: {message}
            });
        }else{
            if(res.status === 400){
                dispatch({
                    type: signupConstants.SIGNUP_fAILURE,
                    payload: { error: res.data.error }
                });
            }
        }


    }
}