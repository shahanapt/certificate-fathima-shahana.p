import React, { useState } from 'react'
import { Card } from "react-bootstrap";
import Layout from "../Layout";

import {Input,Col,Row,Label,Form,FormGroup,Button} from "reactstrap";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createcoursecategoryApi } from '../../Store/Course category API/useApi';


const Createcc = () => {

  
    const dispatch = useDispatch();
  
    const [input, setInput] = useState({});
    const navigate = useNavigate();
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      if (input) {
        dispatch(createcoursecategoryApi(input, navigate))
      }
    }
  

    return (
        <div>
          <Layout>
            <div className="updatediv" style={{ width: "100vw", height: "100vh" }}>
              <h5 className="upcoursehdng">CREATE COURSE CATEGORY</h5>
              <Card
                style={{ width: "50%", height: "60%", margin: "30px",padding: '25px' }}>
                    <Row>
                        <Col md="6">
                        <Form onSubmit={handleSubmit}>
                            <FormGroup>
                                <Label for="exampleName">
                                Course Category : 
                                </Label>
                                <Input
                                id="exampleName"
                                name="course_category_name"
                                placeholder="Enter a Course Category"
                                type="text"
                                onChange={(e) => setInput({ ...input,  course_category_name: e.target.value 
                                })}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleDesignation">
                                Designation : 
                                </Label>
                                <Input
                                id="exampleDesignation"
                                name="designation"
                                placeholder="Enter a Designation"
                                type="text"
                                onChange={(e) => setInput({ ...input,  designation: e.target.value 
                                })}
                                />
                            </FormGroup>
                            
    
                        
    
                    <Col md="6" style={{display: 'flex', paddingTop: '100px'}}>
                    <div><Button style={{ backgroundColor: '#f8f8fb',color: 'black', width:'150px', height: '50px',border: 'none',borderRadius: '10px'}}>Back</Button></div>
                    <div><Button 
                    type={"submit"}
                    style={{ backgroundColor: 'grey', border: 'none',width:'150px', height: '50px',borderRadius: '10px'}}>Create</Button></div>
                                        
                    </Col>
    
    </Form>
                    </Col>
                    </Row>
    
                </Card>
                          
            </div>
          </Layout>
        </div>
      );
    }

export default Createcc