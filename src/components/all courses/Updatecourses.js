import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import Layout from "../Layout";
import "./Updatecourses.css";
import {Input,Col,Row,Label,Form,FormGroup,Button} from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { singlecApi,UpdatecourseApi } from "../../Store/Course API/useApi";


const Updatecourses = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();

  const { singlec } = useSelector((state) => ({
    singlec: state.CourseReducer.singlecDetails,
  }));
  console.log(singlec);

  useEffect(() => {
    dispatch(singlecApi(params.id));
  }, [dispatch]);
  const [state, setState] = useState();
  useEffect(() => {
    setState(singlec);
  }, [singlec]);

  const Handle = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const { updatecourse } = useSelector((state) => ({
    updatecourse : state.CourseReducer.updateCDetails,
  }));
  console.log(updatecourse);


  const HandleCUpdate = (e) =>{
    e.preventDefault();
    dispatch(UpdatecourseApi(params.id, navigate, state))
  }

  return (
    <div>
      <Layout>
        <div className="updatediv" style={{ width: "100vw", height: "100vh" }}>
          <h5 className="upcoursehdng">UPDATE COURSE</h5>
          <Card
            style={{ width: "50%", height: "55%", margin: "30px",padding: '25px' }}>
                <Row>
                    <Col md="6">
                    <Form onSubmit={ HandleCUpdate }>
                        <FormGroup>
                            <Label for="exampleName">
                            Course Name : 
                            </Label>
                            <Input
                            id="exampleName"
                            name="course_name"
                            placeholder="enter course name"
                            type="text"
                            value={state?.course_name}
                            onChange={(e) => Handle(e)}
                            
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleDuration">
                            Duration : 
                            </Label>
                            <Input
                            id="exampleDuration"
                            name="duration"
                            placeholder="enter your duration"
                            type="number"
                            value={state?.duration}
                            onChange={(e) => Handle(e)}

                            />
                        </FormGroup>
   

                <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                
                <div>
                  <Button onClick={() => {
                      navigate("/allcourses/");
                    }}
                    style={{ backgroundColor: '#f8f8fb',color: 'black', width:'150px', height: '50px',border: 'none',borderRadius: '10px'}}
                    >Back</Button>
                </div>
                <div>
                    <Button style={{ backgroundColor: 'grey', border: 'none',width:'150px', height: '50px',borderRadius: '10px'}}
                    type="submit"
                    >Update</Button>
                </div>
                </div>
                </Form> 
                </Col>
                </Row>
            </Card>
        </div>
      </Layout>
    </div>
  );
}

export default Updatecourses;
