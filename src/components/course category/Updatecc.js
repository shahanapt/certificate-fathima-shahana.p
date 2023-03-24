import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import Layout from "../Layout";
import { Input, Col, Row, Label, Form, FormGroup, Button } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { getCCApi, updateccApi } from "../../Store/Course category API/useApi";
import { useNavigate, useParams } from "react-router-dom";

const Updatecc = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();

  const { singlecc } = useSelector((state) => ({
    singlecc: state.CoursecategoryReducer.getCCDetails,
  }));
  console.log(singlecc);
  const paramid = params.id

  // useEffect(() => {
  //   dispatch(getCCApi(params.id));
  // }, []); sahad

  useEffect(() => {
    dispatch(getCCApi(paramid));
  }, [dispatch,paramid]);

  const [state, setState] = useState();
  useEffect(() => {
    setState(singlecc);
  }, [singlecc]);

  const Handle = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const { upcoursecat } = useSelector((state) => ({
    upcoursecat: state.CoursecategoryReducer.updateCC,
  }));
  console.log(upcoursecat);

  useEffect(() => {
    setState(upcoursecat);
  }, [upcoursecat]);

  const HandleCCUpdate = (e) => {
    e.preventDefault();

    dispatch(updateccApi(paramid, navigate, state));
  };

  return (
    <div>
      <Layout>
        <div className="updatediv" style={{ width: "100vw", height: "100vh" }}>
          <h5 className="upcoursehdng">UPDATE COURSE CATEGORY</h5>
          <Card
            style={{
              width: "50%",
              height: "60%",
              margin: "30px",
              padding: "25px",
            }}
          >
            <Form onSubmit={HandleCCUpdate}>
              <Row>
                <Col md="6">
                  <FormGroup>
                    <Label for="exampleName">Course Category :</Label>
                    <Input
                      id="exampleName"
                      name="course_category_name"
                      placeholder="enter your course category"
                      type="text"
                      onChange={(e) => Handle(e)}
                      value={state?.course_category_name}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleDuration">Designation :</Label>
                    <Input
                      id="exampleDuration"
                      name="designation"
                      placeholder="enter your designation"
                      type="text"
                      onChange={(e) => Handle(e)}
                      value={state?.designation}
                    />
                  </FormGroup>
                </Col>

                <Col md="6"></Col>
              </Row>

              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  paddingTop: "100px",
                }}
              >
                <div>
                  <Button
                    onClick={() => {
                      navigate("/CourseCategory/");
                    }}
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
                    type="submit"
                  >
                    Update
                  </Button>
                </div>
              </div>
            </Form>
          </Card>
        </div>
      </Layout>
    </div>
  );
};

export default Updatecc;
