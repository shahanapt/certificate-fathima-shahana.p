import React, { useEffect, useState } from "react";
import { Button, Card, Col, Form, FormGroup, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Input, Label } from "reactstrap";
import { newCApi, studentApi } from "../../Store/Students API/useApi";
import Layout from "../Layout";
import { map } from "lodash";
import { allcourseApi } from "../../Store/Course API/useApi";

const Newcourse = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [input, setInput] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    if (input) {
      dispatch(newCApi(input, navigate));
    }
  };

  useEffect(() => {
    dispatch(studentApi());
  }, [dispatch]);

  const { allstudents } = useSelector((state) => ({
    allstudents: state.StudentsReducer.allstudents,
  }));
  console.log(allstudents.results);

  useEffect(() => {
    dispatch(allcourseApi());
  }, [dispatch]);

  const { allcourses } = useSelector((state) => ({
    allcourses: state.CourseReducer.allcourseDetails,
  }));
  console.log(allcourses.results);

  return (
    <div>
      <Layout>
        <div className="updatediv" style={{ width: "100vw", height: "100vh" }}>
          <h5 className="upcoursehdng">CREATE STUDENT COURSE</h5>
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
                    <div>
                      <label>Student name...</label>
                      <select
                        className="form-control"
                        onChange={(e) =>
                          setInput({ ...input, student: e.target.value })
                        }
                      >
                        <option>Select student name...</option>
                        {map(allstudents?.results, (item) => (
                          <option value={item.id}>{item.full_name}</option>
                        ))}
                      </select>
                    </div>
                  </FormGroup>
                  <FormGroup>
                    <div>
                      <label>Course name...</label>
                      <select
                        className="form-control"
                        onChange={(e) =>
                          setInput({ ...input, course: e.target.value })
                        }>
                        <option>Select a course name</option>

                        {map(allcourses?.results, (item) => (
                          <option value={item.id}>{item.course_name}</option>
                        ))}
                      </select>
                    </div>
                  </FormGroup>

                  <FormGroup>
                    <Label for="exampleDuration">Progress:</Label>
                    <Input
                      id="exampleProgress"
                      name="progress"
                      placeholder="Enter progress"
                      type="text"
                      onChange={(e) =>
                        setInput({ ...input, progress: e.target.value })
                      }
                    />
                  </FormGroup>

                  <div style={{ display: "flex", marginTop: "30px" }}>
                    <div>
                      <Button
                        onClick={() => {
                          navigate("/Studentcourse");
                        }}
                        style={{
                          backgroundColor: "#f8f8fb",
                          color: "black",
                          width: "150px",
                          height: "50px",
                          border: "none",
                          borderRadius: "10px",
                          margin: "10px",
                        }}
                      >
                        Back
                      </Button>
                    </div>
                    <div>
                      <Button
                        type={"submit"}
                        style={{
                          backgroundColor: "grey",
                          border: "none",
                          width: "150px",
                          height: "50px",
                          borderRadius: "10px",
                          margin: "10px",
                        }}
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

export default Newcourse;
