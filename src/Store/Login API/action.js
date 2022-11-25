import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionType";
import { LOGOUT_FAIL, LOGOUT_REQUEST, LOGOUT_SUCCESS } from "./actionType";
import { PROFILE_FAIL, PROFILE_REQUEST, PROFILE_SUCCESS } from "./actionType";


    export const loginRequest = (input) =>
    ({
    type: LOGIN_REQUEST,
    payload: input,
    });

    export const loginSuccess = (userDetails) => ({
    type: LOGIN_SUCCESS,
    payload: userDetails,
    });

    export const loginFail = (error) => ({
    type: LOGIN_FAIL,
    payload: error,
    });
    
    //..............................LOGIN........................................//
    
    export const logoutRequest = () =>
    ({
    type: LOGOUT_REQUEST,
    payload: "",
    });

    export const logoutSuccess = () => ({
    type: LOGOUT_SUCCESS,
    payload: "",
    });

    export const logoutFail = () => ({
    type: LOGOUT_FAIL,
    payload: "",
    });

// .................................LOGOUT..........................................//

export const profileRequest = () =>
    ({
    type: PROFILE_REQUEST,
    payload: "",
    });

    export const profileSuccess = (res) => ({
    type: PROFILE_SUCCESS,
    payload: res,
    });

    export const profileFail = () => ({
    type: PROFILE_FAIL,
    payload: "",
    });

// ...................PROFILE............................................//
