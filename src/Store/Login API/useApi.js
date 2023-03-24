import { loginFail, loginRequest, loginSuccess } from "./action";
import { logoutFail, logoutRequest, logoutSuccess } from "./action";
import { profileFail, profileRequest, profileSuccess } from "./action";


import { axiosApi } from "../api_methods";
// import axios from "axios";
// import {navigate} from "react-router-dom"
// import { navigate } from "react-router-dom";
 
    export const loginApi = (input,navigate) => { 
    return async (dispatch) => {
    
    dispatch(loginRequest(input));
    
    try {
     const res = await axiosApi.post(`/account/login/`,input);
     console.log(res);
     sessionStorage.setItem("token", res?.data?.token);
    
     if (res?.data?.token) {
        dispatch(loginSuccess(res.data));
        navigate("/dashboard")
     }


    //   dispatch(loginSuccess(res));
    } catch (error) {
      dispatch(loginFail(error?.response?.data));
    }
  };
};

//............................LOGIN..........................................//

export const logoutApi = (navigate) => { 
    return async (dispatch) => {
    
    dispatch(logoutRequest());
    
    try {
    const token = sessionStorage.getItem("token")
     const res = await axiosApi.post(`/account/logout/`,token);
     console.log(res);
     
    
     if (res) {
        dispatch(logoutSuccess(res.data));

        sessionStorage.clear("token")
        navigate("/")
     }


    
    } catch (error) {
        console.log(error);
      dispatch(logoutFail(error));
    }
  };
};

// ........................LOGOUT.........................................//

export const profileApi = () => { 
    return async (dispatch) => {
    
    dispatch(profileRequest());
    
    try {
    
     const res = await axiosApi.get(`/account/profile/`);
     console.log(res);
     
     if (res) {
        dispatch(profileSuccess(res.data));

        // sessionStorage.clear("token")
        // navigate("/")
     }

    } catch (error) {
        console.log(error);
      dispatch(profileFail(error?.response?.data));
    }
  };
};