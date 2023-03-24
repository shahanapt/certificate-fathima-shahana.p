import React from 'react'
import {Container,Dropdown} from 'react-bootstrap'
import { BiHomeCircle } from 'react-icons/bi';
import './Dsidebar.css'
import { BsPersonCircle,BsFillPersonLinesFill } from 'react-icons/bs';
import { FaSchool } from 'react-icons/fa';
import { Link } from 'react-router-dom';



function Dsidebar(){

    return (
    <div className="dbar">

            <Container className="btitle">
            <h5 style={{margin: '12px 28px'}}>Edisonvalley</h5>
            <div className="bsub">
                <div className="iconb"><BiHomeCircle/></div>
                <div className="headD">Dashboard</div>
            </div>
            <div className="bsub1">
                <div className="iconp"><BsPersonCircle/></div>
                <div className="drop1"><Dropdown>
                    <Dropdown.Toggle variant="light" id="dropdown-basic" className="droop">

                    Students
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Link to="/allstudents">
                    <Dropdown.Item href="#/action-1">All Students</Dropdown.Item></Link>

                    <Link to="/createstudents">
                    <Dropdown.Item href="#/action-2">Create Student</Dropdown.Item></Link>
                    
                    <Link to="/studentcourse">
                    <Dropdown.Item href="#/action-3">Student Course</Dropdown.Item></Link>
                    </Dropdown.Menu>
                
                </Dropdown></div>
                    
            </div>
            <div className="bsub2">
                <div className="iconp"><FaSchool/></div>
                <div className="drop1"><Dropdown>
                    <Dropdown.Toggle variant="light" id="dropdown-basic" className="droop">
                    Courses
                    </Dropdown.Toggle>

                    <Dropdown.Menu>

                    <Link to='/allcourses' >
                    <Dropdown.Item href="#/action-1">All Courses</Dropdown.Item></Link>
                    <Link to='/createcourses'>
                    <Dropdown.Item href="#/action-3">Create Courses</Dropdown.Item></Link>
                    </Dropdown.Menu>
                </Dropdown></div>
                    
            </div>
            <div className="bsub2">
                <div className="iconp"><BsFillPersonLinesFill/></div>
                <div className="drop1"><Dropdown>
                    <Dropdown.Toggle variant="light" id="dropdown-basic" className="droop">
                    Courses Category
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                    <Link to ='/coursecategory'>
                    <Dropdown.Item href="#/action-1">All Courses Category</Dropdown.Item></Link>
                    <Link to ='/createcoursecategory'>
                   
                    <Dropdown.Item href="#/action-3">Create Courses Category</Dropdown.Item></Link>
                    </Dropdown.Menu>
                </Dropdown></div>
                    
            </div>
            </Container>
    </div>
        
    )
}

export default Dsidebar