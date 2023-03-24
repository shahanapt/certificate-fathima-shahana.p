import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login'
import LandingPage from './components/LandingPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Dheader from './components/dashboard/Dheader';
// import Dsidebar from './components/sidebar/Dsidebar';
import Dashboard from './components/Dashboard';
import Alls from './components/all students/Alls';
import Upstudents from './components/all students/Upstudents';
import Createstudent from './components/all students/Createstudent';
import Studentview from './components/all students/Studentview';
import Courses from './components/all courses/Courses';
import Updatecourses from './components/all courses/Updatecourses';
import Createcourses from './components/all courses/Createcourses';
import Coursecategory from './components/course category/Coursecategory';
import Createcc from './components/course category/Createcc';
import Updatecc from './components/course category/Updatecc';
import Newcourse from './components/all students/Newcourse';
import Studentcourse from './components/all students/Studentcourse';
import Certificate from './components/Certificate';


function App() {
  // const token = sessionStorage.getItem("token")
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <LandingPage/> } />
          <Route path='/login' element={ <Login/> } />
          {/* <Route path='/dashboard' element={ <Dheader/> } />
          <Route path='/sidebar' element={ <Dsidebar/> } /> */}
          <Route path='/dashboard' element={ <Dashboard/> } />
          <Route path='/allstudents' element={ <Alls/> } />
          <Route path='/updatestudents/:id' element={ <Upstudents/> } />
          <Route path='/createstudents' element={ <Createstudent/> } />
          <Route path='/studentview/:id' element={ <Studentview/> } />
          <Route path='/allcourses' element={ <Courses /> } />
          <Route path='/updatecourses/:id' element={ <Updatecourses />} />
          <Route path='/createcourses' element={ <Createcourses />} />
          <Route path='/CourseCategory' element={ <Coursecategory />} />
          <Route path='/createcoursecategory' element={ <Createcc />} />
          <Route path='/updatecoursecategory/:id' element={ <Updatecc />} />
          <Route path='/newcourse' element={ <Newcourse /> }/>
          <Route path='/Studentcourse' element={<Studentcourse />} />
          <Route path='/certificate/:id' element={< Certificate/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
 
}

export default App;
