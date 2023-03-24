import { CREATE_FAIL, CREATE_REQUEST, CREATE_SUCCESS,
          STUDENT_FAIL, STUDENT_REQUEST, STUDENT_SUCCESS,
          SINGLE_VIEW_FAIL, SINGLE_VIEW_REQUEST, SINGLE_VIEW_SUCCESS,
          DELETE_STUDENT_FAIL, DELETE_STUDENT_REQUEST, DELETE_STUDENT_SUCCESS,
         UPDATE_STUDENT_FAIL, UPDATE_STUDENT_REQUEST, UPDATE_STUDENT_SUCCESS, NEW_COURSE_REQUEST, NEW_COURSE_SUCCESS, NEW_COURSE_FAIL, ALLSTUDENT_COURSE_REQUEST, ALLSTUDENT_COURSE_SUCCESS, ALLSTUDENT_COURSE_FAIL, NEW_COURSE_DELETE_REQUEST, NEW_COURSE_DELETE_SUCCESS, NEW_COURSE_DELETE_FAIL,

} from "./actionType";

const initiailState = {
  loading: false,
  error: "",
  studentDetails: [],
  allstudents: [],
  singleviewDetails: {},
  deletestudents: {},
  updateStudent: {},
  newcourseDetails: [], 
  allStudentCourseDetails: [],
  deleteNewCourseDetails: {},

};

const StudentsReducer = (state = initiailState, action) => {
  switch (action.type) {

//...................................CREATE STUDENT....................................//

    case CREATE_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case CREATE_SUCCESS:
      return {
        ...state,
        loading: false,
        createDetails: action.payload,
        error: "",
      };
    case CREATE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
      
//...................................ALL STUDENTS......................................//


        case STUDENT_REQUEST:
            return {
            ...state,
            loading: true,
            };

      case STUDENT_SUCCESS:
        return {
          ...state,
          loading: false,
          allstudents: action.payload,
          error: "",
        };
      case STUDENT_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };

//...................................SINGLE VIEW......................................//

        case SINGLE_VIEW_REQUEST:
          return {
          ...state,
          loading: true,
          };

        case SINGLE_VIEW_SUCCESS:
        return {
        ...state,
        loading: false,
        singleviewDetails: action.payload,
        error: "",
        };
        case SINGLE_VIEW_FAIL:
        return {
        ...state,
        loading: false,
        error: action.payload,
        };

//...................................DELETE STUDENT......................................//

        case DELETE_STUDENT_REQUEST:
          return {
          ...state,
          loading: true,
          };

        case DELETE_STUDENT_SUCCESS:
        return {
        ...state,
        loading: false,
        deletestudents : action.payload,
        error: "",
        };
        case DELETE_STUDENT_FAIL:
        return {
        ...state,
        loading: false,
        error: action.payload,
        };

//...................................UPDATE STUDENT......................................//

        case UPDATE_STUDENT_REQUEST:
          return {
          ...state,
          loading: true,
          };

        case UPDATE_STUDENT_SUCCESS:
        return {
        ...state,
        loading: false,
        updateStudent : action.payload,
        error: "",
        };
        case UPDATE_STUDENT_FAIL:
        return {
        ...state,
        loading: false,
        error: action.payload,
        };


//...................................NEW COURSE....................................//

    case NEW_COURSE_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case NEW_COURSE_SUCCESS:
      return {
        ...state,
        loading: false,
        newcourseDetails: action.payload,
        error: "",
      };
    case NEW_COURSE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

      //...................................ALL STUDENTSCOURSE......................................//


      case ALLSTUDENT_COURSE_REQUEST:
        return {
        ...state,
        loading: true,
        };

      case ALLSTUDENT_COURSE_SUCCESS:
        return {
          ...state,
          loading: false,
          allStudentCourseDetails: action.payload,
          error: "",
        };
      case ALLSTUDENT_COURSE_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };

//...................................DELETE STUDENT C......................................//

      case NEW_COURSE_DELETE_REQUEST:
        return {
        ...state,
        loading: true,
        };

      case NEW_COURSE_DELETE_SUCCESS:
      return {
      ...state,
      loading: false,
      deleteNewCourseDetails : action.payload,
      error: "",
      };
      case NEW_COURSE_DELETE_FAIL:
      return {
      ...state,
      loading: false,
      error: action.payload,
      };


    default:
      return state;
  }
};
export default StudentsReducer;



