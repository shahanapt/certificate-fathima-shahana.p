import React, { useState,useEffect } from "react";
import Layout from "../Layout";
import { Card } from "react-bootstrap";
import { Input, Label, Button, Col, Form, FormGroup, Row } from "reactstrap";
import "./Upstudents.css";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { singleviewApi, updateStudentApi } from "../../Store/Students API/useApi";

const Upstudents = () => {

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const params = useParams();
  
  const [state, setState] = useState();

  const { upstudents } = useSelector((state) => ({
    upstudents: state.StudentsReducer.singleviewDetails,
  }));  
  console.log(upstudents);

  const catId = params.id;

  useEffect((catId) => {
    dispatch(singleviewApi(catId));
  }, [dispatch,catId]);

  useEffect(() => {
    setState(upstudents);
  }, [upstudents])

  const Handle = (e) => {

    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const HandleStudentUpdate = (e) => {
    e.preventDefault();
   
    dispatch(updateStudentApi(catId, navigate, state));
  };



  return (
    <div>
      <Layout>
        <div className="upsheading" style={{width: '100vw'}}>
          <h5 className="hdng3">UPDATE STUDENT</h5>
          <Card className="upcard" style={{ width: "40rem", height: "35rem",padding: '25px' }}>
            <div className="upitems" style={{ width: "37rem" }}>
              <Form onSubmit={ HandleStudentUpdate }>
                <Row>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="exampleName">Full Name :</Label>
                      <Input
                        id="exampleName"
                        name="full_name"
                        placeholder="enter your full name"
                        type="text"
                        onChange={(e) => Handle(e)} value={state?.full_name}
               
                      />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="exampleDesignation">Designation :</Label>
                      <Input
                        id="exampleDesignation"
                        name="designation"
                        placeholder="enter your designation"
                        type="destination"
                        onChange={(e) => Handle(e)} value={state?.designation}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
        
                  <Col md={6}>
                    <FormGroup>
                      <Label for="exampleEmail">Email :</Label>
                      <Input
                        id="exampleEmail"
                        name="email"
                        placeholder="enter your email"
                        type="email"
                        onChange={(e) => Handle(e)} value={state?.email}
                      />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="exampleDate">Joining Date :</Label>
                      <Input
                        id="exampleDate"
                        name="start_date"
                        placeholder="joining date"
                        type="date"
                        onChange={(e) => Handle(e)} value={state?.start_date}
                      />
                    </FormGroup>
                  </Col>
                </Row>

                <Row>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="exampleDate">Date of Birth :</Label>
                      <Input
                        id="exampleDate"
                        name="dob"
                        placeholder="date of birth"
                        type="date"
                        onChange={(e) => Handle(e)} value={state?.dob}
                      />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="exampleDate">Date of Leaving :</Label>
                      <Input
                        id="exampleDate"
                        name="end_date"
                        placeholder="date of leaving"
                        type="date"
                        onChange={(e) => Handle(e)} value={state?.end_date}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="exampleAddress">Address :</Label>
                      <Input
                        id="exampleAddress"
                        name="address"
                        placeholder="enter your address"
                        type="text"
                        onChange={(e) => Handle(e)} value={state?.address}
                      />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="examplePassword">Phone Number :</Label>
                      <Input
                        id="exampleNumber"
                        name="number"
                        placeholder="phone number"
                        type="number"
                        onChange={(e) => Handle(e)} value={state?.phone}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <FormGroup check className="formrow">
                  <Label for="exampleImage">Image :</Label>

                  <FormGroup row>
                   
                    <Col sm={10}>
                      <Input id="exampleFile" name="file" type="file" className="upsin"/>
                    </Col>
                  </FormGroup>
                </FormGroup>

                <div className="divbtn">
                <Button className="upsbtn" 
                onClick={() => {
                navigate(`/studentview/${params.id}`); }}>Back</Button>

                <Button className="upsbtn1"
                type="submit"
                
                >Update</Button>
                </div>
              </Form>
            </div>
          </Card>
        </div>
      </Layout>
    </div>
  );
}

export default Upstudents;
