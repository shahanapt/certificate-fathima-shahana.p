import { CREATE_FAIL, CREATE_REQUEST, CREATE_SUCCESS, 
         STUDENT_FAIL, STUDENT_REQUEST, STUDENT_SUCCESS,
         SINGLE_VIEW_FAIL, SINGLE_VIEW_REQUEST, SINGLE_VIEW_SUCCESS,
         DELETE_STUDENT_FAIL, DELETE_STUDENT_REQUEST, DELETE_STUDENT_SUCCESS,
        UPDATE_STUDENT_FAIL,UPDATE_STUDENT_REQUEST,UPDATE_STUDENT_SUCCESS, NEW_COURSE_REQUEST, NEW_COURSE_SUCCESS, NEW_COURSE_FAIL, ALLSTUDENT_COURSE_REQUEST, ALLSTUDENT_COURSE_SUCCESS, ALLSTUDENT_COURSE_FAIL, NEW_COURSE_DELETE_REQUEST, NEW_COURSE_DELETE_SUCCESS, NEW_COURSE_DELETE_FAIL,

} from "./actionType";


// ..................................CREATE STUDENT.....................................//


export const createRequest = (input) =>
({
type: CREATE_REQUEST,
payload: input,
});

export const createSuccess = (createDetails) => ({
type: CREATE_SUCCESS,
payload: createDetails,
});

export const createFail = (error) => ({
type: CREATE_FAIL,
payload: error,
});


// ..................................ALL STUDENTS.....................................//


export const studentRequest = () =>
({
type: STUDENT_REQUEST,
payload: "",
});

export const studentSuccess = (studentDetails) => ({
type: STUDENT_SUCCESS,
payload: studentDetails,
});

export const studentFail = (error) => ({
type: STUDENT_FAIL,
payload: error,
});


//.......................SINGLE VIEW...........................................//


export const singleviewRequest = () =>
({
type: SINGLE_VIEW_REQUEST,
payload: "",
});

export const singleviewSuccess = (singleviewDetails) => ({
type: SINGLE_VIEW_SUCCESS,
payload: singleviewDetails,
});

export const singleviewFail = (error) => ({
type: SINGLE_VIEW_FAIL,
payload: error,
});


//...............................DELETE STUDENT...........................................//

export const deletestudentRequest = () =>
({
type: DELETE_STUDENT_REQUEST,
payload: "",
});

export const deletestudentSuccess = (id) => ({
type: DELETE_STUDENT_SUCCESS,
payload:id,
});

export const deletestudentFail = (error) => ({
type: DELETE_STUDENT_FAIL,
payload: error,
});

//...............................UPDATE STUDENT...........................................//

export const updatestudentRequest = (catId) =>
({
type: UPDATE_STUDENT_REQUEST,
payload: catId,
});

export const updatestudentSuccess = (catId, updateStudent) => ({
type: UPDATE_STUDENT_SUCCESS,
payload: catId, updateStudent,
});

export const updatestudentFail = (error) => ({
type: UPDATE_STUDENT_FAIL,
payload: error,
});

// ..................................NEW COURSE.....................................//


export const newcourseRequest = (input) =>
({
type: NEW_COURSE_REQUEST,
payload: input,
});

export const newcourseSuccess = (newcourseDetails) => ({
type: NEW_COURSE_SUCCESS,
payload: newcourseDetails,
});

export const newcourseFail = (error) => ({
type: NEW_COURSE_FAIL,
payload: error,
});

// ..................................ALL STUDENTS COURSE.....................................//


export const allstudentCRequest = () =>
({
type: ALLSTUDENT_COURSE_REQUEST,
payload: "",
});

export const allstudentCSuccess = (allStudentCourseDetails) => ({
type: ALLSTUDENT_COURSE_SUCCESS,
payload: allStudentCourseDetails,
});

export const allstudentCFail = (error) => ({
type: ALLSTUDENT_COURSE_FAIL,
payload: error,
});

//...............................DELETE STUDENT C..........................................//

export const deletestudentCRequest = () =>
({
type: NEW_COURSE_DELETE_REQUEST,
payload: "",
});

export const deletestudentCSuccess = (id) => ({
type: NEW_COURSE_DELETE_SUCCESS,
payload:id,
});

export const deletestudentCFail = (error) => ({
type: NEW_COURSE_DELETE_FAIL,
payload: error,
});