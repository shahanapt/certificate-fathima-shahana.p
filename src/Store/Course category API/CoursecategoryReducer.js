import React from 'react'
import { ALLCOURSECATEGORY_FAIL, ALLCOURSECATEGORY_REQUEST, ALLCOURSECATEGORY_SUCCESS, CREATECOURSECATEGORY_FAIL, CREATECOURSECATEGORY_REQUEST, CREATECOURSECATEGORY_SUCCESS, DELETECOURSECATEGORY_FAIL, DELETECOURSECATEGORY_REQUEST, DELETECOURSECATEGORY_SUCCESS, GET_COURSECATEGORY_FAIL, GET_COURSECATEGORY_REQUEST, GET_COURSECATEGORY_SUCCESS, UPDATE_COURSECATEGORY_FAIL, UPDATE_COURSECATEGORY_REQUEST, UPDATE_COURSECATEGORY_SUCCESS } from './actionType';

const initiailState = {
    loading: false,
    error: "",
    userDetails: [],
    createcoursecategoryDetails: [],
    allcourseCategoryDetails: [],
    deletecoursecategory: {},
    getCCDetails: {},
    updateCC: {},
  };

const CoursecategoryReducer = (state = initiailState, action) => {
    
    switch (action.type) {



//...................................CREATE COURSE CATEGORY....................................//

case CREATECOURSECATEGORY_REQUEST:
  return {
    ...state,
    loading: true,
  };

case CREATECOURSECATEGORY_SUCCESS:
  return {
    ...state,
    loading: false,
    createcoursecategoryDetails: action.payload,
    error: "",
  };
case CREATECOURSECATEGORY_FAIL:
  return {
    ...state,
    loading: false,
    error: action.payload,
  };
  


//...................................ALL COURSES......................................//


        case ALLCOURSECATEGORY_REQUEST:
            return {
            ...state,
            loading: true,
            };

        case ALLCOURSECATEGORY_SUCCESS:
        return {
          ...state,
          loading: false,
          allcourseCategoryDetails: action.payload,
          error: "",
        };
        case ALLCOURSECATEGORY_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };


//...................................DELETE STUDENT......................................//

        case DELETECOURSECATEGORY_REQUEST:
          return {
          ...state,
          loading: true,
          };

        case DELETECOURSECATEGORY_SUCCESS:
        return {
        ...state,
        loading: false,
        deletecoursecategory : action.payload,
        error: "",
        };
        case DELETECOURSECATEGORY_FAIL:
        return {
        ...state,
        loading: false,
        error: action.payload,
        };  
        
//...................................SINGLE CC......................................//

        case GET_COURSECATEGORY_REQUEST:
          return {
          ...state,
          loading: true,
          };

        case GET_COURSECATEGORY_SUCCESS:
        return {
        ...state,
        loading: false,
        getCCDetails: action.payload,
        error: "",
        };
        case GET_COURSECATEGORY_FAIL:
        return {
        ...state,
        loading: false,
        error: action.payload,
        };


//...................................UPDATE STUDENT......................................//

        case UPDATE_COURSECATEGORY_REQUEST:
          return {
          ...state,
          loading: true,
          };

        case UPDATE_COURSECATEGORY_SUCCESS:
        return {
        ...state,
        loading: false,
        updateCC : action.payload,
        error: "",
        };
        case UPDATE_COURSECATEGORY_FAIL:
        return {
        ...state,
        loading: false,
        error: action.payload,
        };

        


default:
      return state;
  }
};



export default CoursecategoryReducer