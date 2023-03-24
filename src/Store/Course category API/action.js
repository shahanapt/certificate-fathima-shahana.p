// import { COURSE_FAIL, COURSE_REQUEST, COURSE_SUCCESS } from "./actionType";

import { ALLCOURSECATEGORY_FAIL, ALLCOURSECATEGORY_REQUEST, ALLCOURSECATEGORY_SUCCESS, 
    CREATECOURSECATEGORY_FAIL, CREATECOURSECATEGORY_REQUEST, CREATECOURSECATEGORY_SUCCESS, 
    DELETECOURSECATEGORY_FAIL, DELETECOURSECATEGORY_REQUEST, DELETECOURSECATEGORY_SUCCESS, GET_COURSECATEGORY_FAIL, GET_COURSECATEGORY_REQUEST, GET_COURSECATEGORY_SUCCESS,UPDATE_COURSECATEGORY_FAIL,UPDATE_COURSECATEGORY_REQUEST, UPDATE_COURSECATEGORY_SUCCESS } from "./actionType";

 

// ..................................CREATE COURSE CATEGORY.....................................//


export const createcoursecategoryRequest = (input) =>
({
type: CREATECOURSECATEGORY_REQUEST,
payload: input,
});

export const createcoursecategorySuccess = (createcoursecategoryDetails) => ({
type: CREATECOURSECATEGORY_SUCCESS,
payload: createcoursecategoryDetails,
});

export const createcoursecategoryFail = (error) => ({
type: CREATECOURSECATEGORY_FAIL,
payload: error,
});




// // ..................................ALL CourseCategory.....................................//


export const allCourseCategoryRequest = () =>
({
type: ALLCOURSECATEGORY_REQUEST,
payload: "",
});

export const allCourseCategorySuccess = (allcourseCategoryDetails) => ({
type: ALLCOURSECATEGORY_SUCCESS,
payload: allcourseCategoryDetails,
});

export const allCourseCategoryFail = (error) => ({
type: ALLCOURSECATEGORY_FAIL,
payload: error,
});



//...............................DELETE COURSECATEGORY...........................................//

export const deleteCourseCategoryRequest = (id) =>
({
type: DELETECOURSECATEGORY_REQUEST,
payload: id,
});

export const deleteCourseCategorySuccess = () => ({
type: DELETECOURSECATEGORY_SUCCESS,
payload:"",
});

export const deleteCourseCategoryFail = (error) => ({
type: DELETECOURSECATEGORY_FAIL,
payload: error,
});


// //...............................SINGLE CC...........................................//


export const getCCRequest = () =>
({
type: GET_COURSECATEGORY_REQUEST,
payload: "",
});

export const getCCSuccess = (getCCDetails) => ({
type: GET_COURSECATEGORY_SUCCESS,
payload: getCCDetails,
});

export const getCCFail = (error) => ({
type: GET_COURSECATEGORY_FAIL,
payload: error,
});





//...............................UPDATE CC...........................................//

export const updateCourseCategoryRequest = (id) =>
({
type: UPDATE_COURSECATEGORY_REQUEST,
payload: id,
});

export const updateCourseCategorySuccess = (id, updateCC) => ({
type: UPDATE_COURSECATEGORY_SUCCESS,
payload: id, updateCC,
});

export const updateCourseCategoryFail = (error) => ({
type: UPDATE_COURSECATEGORY_FAIL,
payload: error,
});