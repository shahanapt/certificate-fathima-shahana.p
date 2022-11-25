import { combineReducers } from "redux"
           import LoginReducer from "./Login API/LoginReducer"
           import ProfileReducer from "./Login API/ProfileReducer"
           import LogoutReducer from "./Login API/LoginReducer"
           import StudentsReducer from "./Students API/StudentsReducer"
           import CoursecategoryReducer from "./Course category API/CoursecategoryReducer"
           import CourseReducer from "./Course API/CourseReducer"
              
           const rootReducer = combineReducers({
           LoginReducer,LogoutReducer,ProfileReducer,StudentsReducer,CoursecategoryReducer,CourseReducer,

           })
           
           export default rootReducer
