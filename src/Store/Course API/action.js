import { ALL_COURSE_FAIL, ALL_COURSE_REQUEST, ALL_COURSE_SUCCESS, CREATE_COURSE_FAIL, CREATE_COURSE_REQUEST, CREATE_COURSE_SUCCESS, DELETE_COURSE_FAIL, DELETE_COURSE_REQUEST, DELETE_COURSE_SUCCESS, SINGLE_COURSE_FAIL, SINGLE_COURSE_REQUEST, SINGLE_COURSE_SUCCESS, UPDATE_COURSE_FAIL, UPDATE_COURSE_REQUEST, UPDATE_COURSE_SUCCESS } from "./actionType";

// ..................................CREATE COURSE CATEGORY.....................................//


export const createcourseRequest = (input) =>
({
type: CREATE_COURSE_REQUEST,
payload: input,
});

export const createcourseSuccess = (createcourseDetails) => ({
type: CREATE_COURSE_SUCCESS,
payload: createcourseDetails,
});

export const createcourseFail = (error) => ({
type: CREATE_COURSE_FAIL,
payload: error,
});

// .................................ALL COURSE CATEGORY.....................................//


export const allcourseRequest = (input) =>
({
type: ALL_COURSE_REQUEST,
payload: input,
});

export const allcourseSuccess = (allcourseDetails) => ({
type: ALL_COURSE_SUCCESS,
payload: allcourseDetails,
});

export const allcourseFail = (error) => ({
type: ALL_COURSE_FAIL,
payload: error,
});

//...............................DELETE COURSE...........................................//

export const deleteCourseRequest = (id) =>
({
type: DELETE_COURSE_REQUEST,
payload: id,
});

export const deleteCourseSuccess = () => ({
type: DELETE_COURSE_SUCCESS,
payload:"",
});

export const deleteCourseFail = (error) => ({
type: DELETE_COURSE_FAIL,
payload: error,
});

// //...............................SINGLE C...........................................//


export const singlecRequest = () =>
({
type: SINGLE_COURSE_REQUEST,
payload: "",
});

export const singlecSuccess = (singlecDetails) => ({
type: SINGLE_COURSE_SUCCESS,
payload: singlecDetails,
});

export const singlecFail = (error) => ({
type: SINGLE_COURSE_FAIL,
payload: error,
});

//...............................UPDATE Copu...........................................//

export const updateCourseRequest = (id) =>
({
type: UPDATE_COURSE_REQUEST,
payload: id,
});

export const updateCourseSuccess = (id, updateC) => ({
type: UPDATE_COURSE_SUCCESS,
payload: id, updateC,
});

export const updateCourseFail = (error) => ({
type: UPDATE_COURSE_FAIL,
payload: error,
});