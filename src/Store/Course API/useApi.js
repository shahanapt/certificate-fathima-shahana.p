import { axiosApi } from "../api_methods";
import { allcourseFail, allcourseRequest, allcourseSuccess, createcourseFail, createcourseRequest, createcourseSuccess, deleteCourseFail, deleteCourseRequest, deleteCourseSuccess, singlecFail, singlecRequest, singlecSuccess, updateCourseFail, updateCourseRequest, updateCourseSuccess } from "./action";

//.......................CREATE COURSES..................................//



export const createcourseApi = (input, navigate) => {
    return async (dispatch) => {
      dispatch(createcourseRequest(input));
  
      try {
        const res = await axiosApi.post(`/course/course/`, input);
  
        dispatch(createcourseSuccess(res));
        navigate("/allcourses");
      } catch (error) {
        console.log(error);
        dispatch(createcourseFail(error));
      }
    };
  };

  //.......................ALL COURSES..................................//



export const allcourseApi = (page) => {
  return async (dispatch) => {
    dispatch(allcourseRequest());

    try {
      const res = await axiosApi.get(`/course/course/?page=${page ? page : 1}`);

      dispatch(allcourseSuccess(res.data));
      // navigate("/dashboard");
    } catch (error) {
      console.log(error);
      dispatch(allcourseFail(error));
    }
  };
};

//.............................DELETE C................................//

export const deletecourseApi = (id, navigate,page) => {
  return async (dispatch) => {
    dispatch(deleteCourseRequest(id));

    try {
      const res = await axiosApi.delete(`/course/course/${id}`);
      if (res) {
        dispatch(deleteCourseSuccess(res.data));
        navigate("/allcourses");
        try {
          const res2 = await axiosApi.get(
            `/course/course/?page=${page ? page : 1}`
          );
          if (res2) {
            dispatch(allcourseSuccess(res2.data));
          }
        } catch (error) {
          console.log(error);
          dispatch(allcourseFail(error));
        }
      }
     
  }catch (error) {
      console.log(error);
      dispatch(deleteCourseFail(error));
    }
  };
};

//.............................SINGLE C................................//

export const singlecApi = (id) => {
  return async (dispatch) => {
    dispatch(singlecRequest());
    try {
      const res = await axiosApi.get(`/course/course/${id}`);
      if (res) {
        dispatch(singlecSuccess(res.data));
        console.log(res);
      }
    } catch (error) {
      console.log(error);
      dispatch(singlecFail(error));
    }
  };
};

//.................................UPDATE C..................................//

export const UpdatecourseApi= (id, navigate, state) => { 
        
        
  return async (dispatch) => {
  dispatch(updateCourseRequest(id));
  
  try {
   const res = await axiosApi.put(`/course/course/${id}/`,state);
  if (res) {
   dispatch(updateCourseSuccess(res.data));
   navigate (`/allcourses`);
  }

  }catch (error) {
      console.log(error)
      dispatch(updateCourseFail(error));

  }
}
}