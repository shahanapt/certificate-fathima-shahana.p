import { createFail, createRequest, createSuccess, 
    studentFail, studentRequest, studentSuccess,
    singleviewRequest, singleviewSuccess, singleviewFail,
    deletestudentRequest, deletestudentSuccess, deletestudentFail, updatestudentRequest, updatestudentSuccess, updatestudentFail, newcourseRequest, newcourseSuccess, newcourseFail, allstudentCRequest, allstudentCSuccess, allstudentCFail, deletestudentCRequest, deletestudentCSuccess, deletestudentCFail
} from "./action";
import { axiosApi } from "../api_methods";
// import axios from "axios";


//.......................CREATE STUDENTS..................................//


    export const createApi = (input,navigate) => { 
        
        
        return async (dispatch) => {
        dispatch(createRequest(input));
        
        try {
         const res = await axiosApi.post(`/student/student/`,input);
         
         dispatch(createSuccess(res));
         navigate("/allstudents")

        }catch (error) {
            console.log(error)
            dispatch(createFail(error));

        }
    }
    }

//.............................ALL STUDENTS................................//


export const studentApi = (page) => { 
        
        
    return async (dispatch) => {
    dispatch(studentRequest());
    
    try {
     const res = await axiosApi.get(`/student/student/?page=${page ? page : 1}`);
    if (res) {
     dispatch(studentSuccess(res.data));
    }

    }catch (error) {
        console.log(error)
        dispatch(studentFail(error));

    }
}
}

//.............................SINGLE VIEW................................//


export const singleviewApi = (id) => { 
        
        
    return async (dispatch) => {
    dispatch(singleviewRequest());
    
    try {
     const res = await axiosApi.get(`/student/student/${id}`);
    if (res) {
     dispatch(singleviewSuccess(res.data));
    }

    }catch (error) {
        console.log(error)
        dispatch(singleviewFail(error));

    }
}
}

//.................................DELETE STUDENT..................................//

export const deleteStudentApi = (id,navigate) => { 
        
        
    return async (dispatch) => {
    dispatch(deletestudentRequest(id));
    
    try {
     const res = await axiosApi.delete(`/student/student/${id}`);
    if (res) {
     dispatch(deletestudentSuccess(res.data));
     navigate ('/allstudents')
    }

    }catch (error) {
        console.log(error)
        dispatch(deletestudentFail(error));

    }
}
}

//.................................UPDATE STUDENT..................................//

export const updateStudentApi = (catId, navigate, state) => { 
        
        
    return async (dispatch) => {
    dispatch(updatestudentRequest(catId));
    
    try {
     const res = await axiosApi.put(`/student/student/${catId}/`,state);
    if (res) {
     dispatch(updatestudentSuccess(res.data));
     navigate (`/studentview/${catId}`);
    }

    }catch (error) {
        console.log(error)
        dispatch(updatestudentFail(error));

    }
}
}

//.......................NEW COURSE..................................//


export const newCApi = (input,navigate) => { 
        
        
    return async (dispatch) => {
    dispatch(newcourseRequest(input));
    
    try {
     const res = await axiosApi.post(`/student/student_course/`,input);
     
     dispatch(newcourseSuccess(res));
     navigate("/Studentcourse")

    }catch (error) {
        console.log(error)
        dispatch(newcourseFail(error));

    }
}
}

//.............................ALL STUDENTSCOURSE................................//


export const allStudentCApi = (page) => { 
        
        
    return async (dispatch) => {
    dispatch(allstudentCRequest());
    
    try {
     const res = await axiosApi.get(`/student/student_course/?page=${page ? page : 1}`);
    if (res) {
     dispatch(allstudentCSuccess(res.data));
    }

    }catch (error) {
        console.log(error)
        dispatch(allstudentCFail(error));

    }
}
}

//.................................DELETE STUDENT C..................................//

export const deleteNewCrsApi = (id,navigate,page) => { 
        
        
    return async (dispatch) => {
    dispatch(deletestudentCRequest(id));
    
    try {
     const res = await axiosApi.delete(`/student/student_course/${id}`);
    if (res) {
     dispatch(deletestudentCSuccess(res.data));
     navigate ('/Studentcourse')
    }

    try {
        const res2 = await axiosApi.get(
          `/student/student_course/?page=${page ? page : 1}`
        );
        if (res2) {
          dispatch(allstudentCSuccess(res2.data));
        }
      } catch (error) {
        console.log(error);
        dispatch(allstudentCFail(error));
      }
    }

    catch (error) {
        console.log(error)
        dispatch(deletestudentCFail(error));

    }
}
}