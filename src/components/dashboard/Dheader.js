import React from 'react'

import {Container,NavDropdown} from 'react-bootstrap';
import './Dheader.css';
import {GoThreeBars} from "react-icons/go";
import {BsPersonCircle} from "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { logoutApi } from '../../Store/Login API/useApi';

function Dheader() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleLogout = () => {
      dispatch(logoutApi(navigate))
    }

    const { profileDetails } = useSelector((state) => ({
      profileDetails : state.ProfileReducer.profileDetails,
    }));

  return (
    <div className="navbar" style={{ backgroundColor: "#FFFFFF" }}>
        
      <Container style={{margin: '0px'}}>
        
          <div className="d-flex">
          <div style={{ borderRadius: "2px" }}>
          <GoThreeBars/>  
          </div>
          <input
            style={{
              borderRadius: "20px",
              backgroundColor: "#F3F3F9",
              border: "none",margin: '0px 10px'}}
            placeholder="Search"
            className="Search-box"></input>
          
          </div>

        <div className="d-flex" style={{margin: '4px 10px'}}>
        <BsPersonCircle className='mt-1'/>
        
        <NavDropdown
            style={{ color: "black" }}
            title={profileDetails.username}
            id="navbarScrollingDropdown"
          >
            <NavDropdown.Item href="#action3">
              {" "}
              <AiOutlineArrowRight />
              View Profile
            </NavDropdown.Item>
            <NavDropdown.Item href="#action3">
              {" "}
              <AiOutlineArrowRight />
              Settings
            </NavDropdown.Item>
            <NavDropdown.Item href="#action3" style={{ color: "red" }} onClick= {handleLogout}>
              {" "}
              <AiOutlineArrowRight />
              Logout
            </NavDropdown.Item>
          </NavDropdown>
          </div>
      </Container>
    
    </div>
)
}

export default Dheader