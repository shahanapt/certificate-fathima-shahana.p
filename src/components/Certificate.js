import React, { useEffect } from "react";
import xantrone from "../components/xantrone.png";
import "./Certificate.css";

import newback from "../components/newback.jfif";

import { Button, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { singleviewApi } from "../Store/Students API/useApi";
import { useDispatch, useSelector } from "react-redux";
import { map } from "lodash";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
// import { Button, Card } from "reactstrap";

const Certificate = () => {
  const dispatch = useDispatch();

  const params = useParams();

  const { single } = useSelector((state) => ({
    single: state.StudentsReducer.singleviewDetails,
  }));
  console.log(single);

  useEffect(() => {
    dispatch(singleviewApi(params.id));
  }, [dispatch, params.id]);

  const stdv = single?.student_courses;

  const Totalstars = 10;
  const Totalstarss = 5;

  const length = single?.student_courses.length;

  const Totalprogress = single?.student_courses?.map((item) =>
    parseInt(item?.progress)
  );

//  progress number(integer) to variable

  const progressTotal = Totalprogress?.reduce((x, y) => x + y, 0);
  console.log(progressTotal);

  const result = progressTotal / length;
  const abc = result / 2;
  const progressResult = Math.floor(abc);   

  const HandlePrint = (e) => {
    e.preventDefault();
    window.print();
  };

  return (
    <div>
      <Container>
        <div className="maindiv">
          <div class="card text-bg-dark" style={{ border: "none" }}>
            <img
              style={{ height: "1040px" }}
              src={newback}
              class="card-img"
              alt="..."
            />
            <div class="card-img-overlay">
              <div style={{ display: "flex", justifyContent: "center" }}>
                <img
                  style={{ width: "20%", marginTop: "120px" }}
                  src={xantrone}
                  alt="error"
                ></img>
              </div>
              <div
                className="certhead"
                style={{
                  fontFamily: "emoji",
                  textAlign: "center",
                  marginTop: "5px",
                }}
              >
                <h1 style={{ fontSize: "70px", color: "#053240" }}>
                  Certificate
                </h1>
                <h6 style={{ fontSize: "20px", color: "black" }}>
                  for Achievement
                </h6>
              </div>

              <div className="certmiddle" style={{ textAlign: "center" }}>
                <h3
                  className="certname"
                  style={{
                    marginTop: "50px",
                    fontWeight: "bolder",
                    fontFamily: "emoji",
                    color: "#27667a",
                  }}
                >
                  {single.full_name}
                </h3>
                <p
                  class="card-text"
                  style={{ fontSize: "20px", color: "black" }}
                >
                  Completed the following achievement
                </p>

                <h1 style={{ color: "#27667a", fontFamily: "emoji" }}>
                  {single.designation}
                </h1>

                <div style={{ marginBottom: "50px", color: "black" }}>
                  {[...Array(Totalstarss)].map((star, index, item) => {
                    return index < progressResult ? (
                      <AiFillStar
                        className="star"
                        color={"#053240"}
                        size={15}
                      />
                    ) : (
                      <AiOutlineStar color={"#053240"} size={15} />
                    );
                  })}
                </div>
                <p
                  style={{
                    textAlign: "center",
                    letterSpacing: "1px",
                    fontSize: "20px",
                    color: "black",
                  }}
                >
                  This certify that{" "}
                  <b
                    style={{
                      fontFamily: "system-ui",
                      fontSize: "16px",
                      color: "#053240",
                    }}
                  >
                    {single.full_name}
                  </b>{" "}
                  has successfully completed{" "}
                  <b
                    style={{
                      fontFamily: "system-ui",
                      fontSize: "22px",
                      color: "#053240",
                    }}
                  >
                    {single.designation},{" "}
                  </b>
                  started on{" "}
                  <b
                    style={{
                      fontFamily: "system-ui",
                      fontSize: "20px",
                      color: "#053240",
                    }}
                  >
                    {single.start_date}
                  </b>{" "}
                  and <br /> completed on{" "}
                  <b
                    style={{
                      fontFamily: "system-ui",
                      fontSize: "20px",
                      color: "#053240",
                    }}
                  >
                    {" "}
                    {single.end_date}
                  </b>
                </p>

                <p
                  style={{
                    fontSize: "20px",
                    marginTop: "30px",
                    color: "black",
                  }}
                >
                  We wish you the best for your future endeavors.
                </p>
              </div>

              <h6
                style={{
                  color: "black",
                  marginTop: "80px",
                  display: "flex",
                  justifyContent: "center",
                  marginLeft: "400px",
                }}
              >
                CEO
              </h6>
            </div>
          </div>
        </div>

        {/* ............................second section............................... */}

        <div class="card text-bg-dark" style={{ border: "none" }}>
          <img
            style={{ height: "1040px" }}
            src={newback}
            class="card-img"
            alt="error"
          />

          <div
            class="card-img-overlay"
            style={{ color: "black", textAlign: "center", marginTop: "100px" }}
          >
            <h3 style={{ color: "#27667a", fontFamily: "emoji" }}>
              Score Card
            </h3>
            <h6> ( Based on Practices and Assessments ) </h6>
            <h5 style={{ color: "#27667a", fontFamily: "emoji" }}>
              {single.designation}
            </h5>

            <h5>{progressResult}/5</h5>
            <div style={{ marginBottom: "50px" }}>
              {[...Array(Totalstarss)].map((star, index, item) => {
                return index < progressResult ? (
                  <AiFillStar className="star" color={"#053240"} size={20} />
                ) : (
                  <AiOutlineStar color={"#053240"} size={20} />
                );
              })}
            </div>

            {/* ......................top .......................... */}

            {map(stdv, (item, key) => (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "baseline",
                }}
              >
                <h2
                  style={{
                    color: "black",
                    fontSize: "25px",
                    minWidth: "150px",
                    textAlign: "initial",
                  }}
                >
                  {item.course.course_name}
                </h2>

                <div>
                  {[...Array(Totalstars)].map((star, index) => {
                    return index < item.progress ? (
                      <AiFillStar
                        className="star"
                        color={"#053240"}
                        size={30}
                        style={{ marginBottom: "8px" }}
                      />
                    ) : (
                      <AiOutlineStar
                        color={"#053240"}
                        size={30}
                        style={{ marginBottom: "8px" }}
                      />
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
        <Button
          id="print"
          type="button"
          onClick={HandlePrint}
          style={{ width: "120px", backgroundColor: "#053240", margin: "30px" }}
        >
          Print
        </Button>
      </Container>
    </div>
  );
};

export default Certificate;
