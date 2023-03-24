import { axiosApi } from "../api_methods";

import {
  allCourseCategoryFail,
  allCourseCategoryRequest,
  allCourseCategorySuccess,
  createcoursecategoryFail,
  createcoursecategoryRequest,
  createcoursecategorySuccess,
  deleteCourseCategoryFail,
  deleteCourseCategoryRequest,
  deleteCourseCategorySuccess,
  getCCFail,
  getCCRequest,
  getCCSuccess,
  updateCourseCategoryFail,
  updateCourseCategoryRequest,
  updateCourseCategorySuccess,
} from "./action";

//.......................CREATE STUDENTS..................................//

export const createcoursecategoryApi = (input, navigate) => {
  return async (dispatch) => {
    dispatch(createcoursecategoryRequest(input));

    try {
      const res = await axiosApi.post(`/course/course_category/`, input);

      dispatch(createcoursecategorySuccess(res));
      navigate("/coursecategory");
    } catch (error) {
      console.log(error);
      dispatch(createcoursecategoryFail(error));
    }
  };
};

//.............................ALL CC................................//

export const allcourseCategoryApi = (page) => {
  return async (dispatch) => {
    dispatch(allCourseCategoryRequest());

    try {
      const res = await axiosApi.get(
        `/course/course_category/?page=${page ? page : 1}`
      );
      if (res) {
        dispatch(allCourseCategorySuccess(res.data));
      }
    } catch (error) {
      console.log(error);
      dispatch(allCourseCategoryFail(error));
    }
  };
};

//.............................DELETE CC................................//

export const deletecourseCategoryApi = (id, navigate, page) => {
  return async (dispatch) => {
    dispatch(deleteCourseCategoryRequest(id));

    try {
      const res = await axiosApi.delete(`/course/course_category/${id}`);
      if (res) {
        dispatch(deleteCourseCategorySuccess(res.data));
        navigate("/coursecategory");
        try {
          const res2 = await axiosApi.get(
            `/course/course_category/?page=${page ? page : 1}`
          );
          if (res2) {
            dispatch(allCourseCategorySuccess(res2.data));
          }
        } catch (error) {
          console.log(error);
          dispatch(allCourseCategoryFail(error));
        }
      }
    } catch (error) {
      console.log(error);
      dispatch(deleteCourseCategoryFail(error));
    }
  };
};

//.............................SINGLE CC................................//

export const getCCApi = (id) => {
  return async (dispatch) => {
    dispatch(getCCRequest());
    try {
      const res = await axiosApi.get(`/course/course_category/${id}`);
      if (res) {
        dispatch(getCCSuccess(res.data));
        console.log(res);
      }
    } catch (error) {
      console.log(error);
      dispatch(getCCFail(error));
    }
  };
};

//.................................UPDATE CC..................................//

export const updateccApi = (id, navigate, state) => { 
        
        
    return async (dispatch) => {
    dispatch(updateCourseCategoryRequest(id));
    
    try {
     const res = await axiosApi.put(`/course/course_category/${id}/`,state);
    if (res) {
     dispatch(updateCourseCategorySuccess(res.data));
     navigate (`/CourseCategory`);
    }

    }catch (error) {
        console.log(error)
        dispatch(updateCourseCategoryFail(error));

    }
}
}
