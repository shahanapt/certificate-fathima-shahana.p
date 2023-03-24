import React, {useState} from 'react'
import Layout from '../Layout'
import { Card } from "react-bootstrap";
import { Input, Label, Button, Col, Form, FormGroup, Row } from "reactstrap";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createApi } from '../../Store/Students API/useApi';

const Createstudent = () => {
  
  const dispatch = useDispatch();

  const [input, setInput] = useState({});
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (input) {
      dispatch(createApi(input, navigate))
    }
  }


  return (
    <div>
        <Layout>
        <div className="upsheading" style={{width: '100vw'}}>
          <h5 className="hdng3">CREATE STUDENT</h5>
          <Card className="upcard" style={{ width: "40rem", height: "35rem",padding: '25px' }}>
            <div className="upitems" style={{ width: "37rem" }}>
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="exampleName">Full Name :</Label>

                      <Input
                        id="exampleName"
                        name="fullname"
                        placeholder="Enter your full name"
                        type="text"
                        onChange={(e) => setInput({ ...input,  full_name: e.target.value 
                        })}
                      />

                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="exampleDesignation">Designation :</Label>

                      <Input
                        id="exampleDesignation"
                        name="designation"
                        placeholder="Enter your Designation"
                        type="text"
                        onChange={(e) => setInput({ ...input, designation: e.target.value 
                        })}
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
                        placeholder="Enter your Email"
                        type="email"
                        onChange={(e) => setInput({ ...input, email: e.target.value })}
                      />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="exampleDate">Joining Date :</Label>
                      <Input
                        id="exampleDate"
                        name="date"
                        placeholder="Pic a date"
                        type="date"
                        onChange={(e) => setInput({ ...input, start_date: e.target.value })}
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
                        name="date"
                        placeholder="Enter your Date of Birth"
                        type="date"
                        onChange={(e) => setInput({ ...input, dob: e.target.value })}
                      />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="exampleDate">Date of Leaving :</Label>

                      <Input
                        id="exampleDate"
                        name="date"
                        placeholder="pic a date"
                        type="date"
                        onChange={(e) => setInput({ ...input, end_date: e.target.value })}
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
                        placeholder="Enter your Address"
                        type="text"
                        onChange={(e) => setInput({ ...input, address: e.target.value })}
                      />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="examplePassword">Phone Number :</Label>
                      
                      <Input
                        id="exampleNumber"
                        name="phone"
                        placeholder="Enter your Phone Number"
                        type="number"
                        onChange={(e) => setInput({ ...input, phone: e.target.value })}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <FormGroup check className="formrow">
                  <Label for="exampleImage">Image :</Label>
                        <Input  onChange={(e) => setInput({ ...input, img: e.target.value })}/>
                  <FormGroup row>
                   
                    <Col sm={10}>
                      <Input id="exampleFile" name="file" type="file" className="upsin"/>
                    </Col>
                  </FormGroup>
                </FormGroup>

                <div className="divbtn">
                <Button className="upsbtn"
                onClick={() => {
                  navigate("/dashboard");
                }}
                 >
                 Back</Button>

                <Button className="upsbtn1" type={"submit"}>Create</Button>
                </div>
              </Form>
            </div>
          </Card>
        </div>
      </Layout>
    </div>
  )
}

export default Createstudent