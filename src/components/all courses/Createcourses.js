


import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import Layout from "../Layout";
import "./Updatecourses.css";
import { Input, Col, Row, Label, Form, FormGroup, Button } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createcourseApi } from "../../Store/Course API/useApi";
import { allcourseCategoryApi } from "../../Store/Course category API/useApi";
import { map } from "lodash";


const Createcourses = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState({});
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input) {
      dispatch(createcourseApi(input, navigate));
    }
  };

  useEffect(() => {
    dispatch(allcourseCategoryApi());
  }, [dispatch]);

  const { allcourseCategoryDetails} = useSelector((state) => ({
    allcourseCategoryDetails: state.CoursecategoryReducer.allcourseCategoryDetails,
 
  }));
  console.log(allcourseCategoryDetails.results );



  return (
    <div>
      <Layout>
        <div className="updatediv" style={{ width: "100vw", height: "100vh" }}>
          <h5 className="upcoursehdng">CREATE COURSE</h5>
          <Card
            style={{
              width: "50%",
              height: "55%",
              margin: "30px",
              padding: "25px",
            }}
          >
            <Row>
              <Col md="6">
                <Form onSubmit={handleSubmit}>
                  <FormGroup>
                    <Label for="exampleName">Course Name :</Label>
                    <Input
                      id="exampleName"
                      name="course_name"
                      placeholder="Enter a Course"
                      type="text"
                      onChange={(e) =>
                        setInput({ ...input, course_name: e.target.value })
                      }
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleDuration">Duration :</Label>
                    <Input
                      id="exampleDuration"
                      name="duration"
                      placeholder="Enter a duration"
                      type="number"
                      onChange={(e) =>
                        setInput({ ...input, duration: e.target.value })
                      }
                    />
                  </FormGroup>
                  <FormGroup>
                    <div>
                      <label>Cource Category</label>
                      <select className="form-control"
                      onChange={(e) =>
                        setInput({ ...input, course_category: e.target.value })
                      }
                      >
                        <option>select a course category .....</option>
                        {map(allcourseCategoryDetails?.results, (item)=>(
                          <option
                          value={item.id}
                          >
                            {item.course_category_name}
                          </option>
                        ))}
                        
                      </select>
                    </div>
                  </FormGroup>

                  <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <div>
                      <Button
                        style={{
                          backgroundColor: "#f8f8fb",
                          color: "black",
                          width: "150px",
                          height: "50px",
                          border: "none",
                          borderRadius: "10px",
                        }}
                      >
                        Back
                      </Button>
                    </div>
                    <div>
                      <Button
                        style={{
                          backgroundColor: "grey",
                          border: "none",
                          width: "150px",
                          height: "50px",
                          borderRadius: "10px",
                        }}
                        // type={"submit"}
                        type="submit"
                      >
                        Create
                      </Button>
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
};

export default Createcourses;
