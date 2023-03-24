import React, { useEffect } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Layout from "../Layout";
import "./Studentview.css";
import girl from "../all students/girl.jpg";
import { Button } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  singleviewApi,
  deleteStudentApi,
} from "../../Store/Students API/useApi";
import { Link, useNavigate, useParams } from "react-router-dom";
import { map } from "lodash";

const Studentview = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();

  const { single } = useSelector((state) => ({
    single: state.StudentsReducer.singleviewDetails,
  }));
  console.log(single);

  useEffect(() => {
    dispatch(singleviewApi(params.id));
  }, [dispatch]);

  const deleteStudent = () => {
    dispatch(deleteStudentApi(params.id, navigate));
  };

  const stdv = single?.student_courses;
  console.log(stdv);

  return (
    <div>
      <Layout>
        <Container>
          <div className="stdview" style={{ width: "100vw" }}>
            <h5 className="hdng3">STUDENT VIEW</h5>

            <Card
              className="cardname"
              style={{ width: "60%", height: "60%", padding: "25px" }}>

              <Row>
                <Col md="6">
                  <h3 className="viewhd">{single.full_name}</h3>
                  <p>Date of birth:{single.dob}</p>
                  <p>
                    Address: {single.address}
                    <br></br>
                  </p>
                  <p>Phone Number:{single.phone}</p>
                </Col>

                <Col md="6">
                  <img
                    style={{ borderRadius: "5px" }}
                    className="viewimg"
                    src={girl}
                    alt={""}
                  />
                  <p style={{ margin: "5px 10px" }}>
                    Designation: {single.designation}{" "}
                  </p>
                </Col>
              </Row>

              <Row>
                <Col md="12">
                  <div>
                    <h5>Contact Details: </h5>
                    <p>Email : {single.email} </p>
                    <p>Mobile : {single.phone}</p>
                  </div>
                </Col>
              </Row>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <div>
                  <Button
                    onClick={() => navigate(`/updatestudents/${params.id}`)}
                    style={{
                      backgroundColor: "grey",
                      color: "white",
                      width: "110px",
                      height: "50px",
                      margin: "5px",
                    }}
                  >
                    Update
                  </Button>
                </div>
                <div>
                  <Button
                    onClick={deleteStudent}
                    style={{
                      backgroundColor: "red",
                      border: "none",
                      width: "110px",
                      height: "50px",
                      margin: "5px",
                    }}
                  >
                    Delete
                  </Button>
                </div>
              </div>
            </Card>

{/* ...............................bottom cards............................. */}

            <Row>
              {map(stdv, (item, key) => (
                <Col key={key}>
                  <Card style={{ width: "380px", margin: "15px" }}>
                    <div
                      style={{
                        display: "flex",
                        width: "350px",
                        height: "160px",
                        margin: "23px",
                      }}
                    >
                      <div>
                        <h6>Course Name :</h6>
                        <h6>Duration :</h6>
                        <h6>Progress :</h6>
                        <h6>Course Category Name :</h6>
                        <h6>Designation :</h6>
                      </div>

                      <div style={{ color: "#f55b5b" }}>
                        <h6>{item.course.course_name}</h6>
                        <h6>{item.course.duration}</h6>
                        <h6>{item.progress}</h6>
                        <h6>
                          {item.course.course_category.course_category_name}
                        </h6>
                        <h6>{item.course.course_category.designation}</h6>
                      </div>
                    </div>
                  </Card>
                </Col>
              ))}
            </Row>


{/*...................bottom button............................. */}

            <div
              style={{
                justifyContent: "center",
                display: "flex",
                margin: "50px",
              }}
            >
              <Link to="/newcourse">
                <Button
                  className="btnnc"
                  style={{ backgroundColor: "#3349b2", borde: "0px" }}
                >
                  +Create New Course
                </Button>
              </Link>
              <Button
                onClick={() => navigate(`/certificate/${params.id}`)}
                className="btncer"
                style={{ backgroundColor: "#316e31", marginLeft: "50px" }}
              >
                Certificate
              </Button>
            </div>
          </div>
        </Container>
      </Layout>
    </div>
  );
};

export default Studentview;
