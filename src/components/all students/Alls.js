import React, { useEffect, useState } from "react";
import { Table} from "reactstrap";
import Layout from "../Layout";
import { Card, Col, Form, Row } from "react-bootstrap";
import "./Alls.css";
import { Link } from "react-router-dom";
// import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { studentApi } from "../../Store/Students API/useApi";
// import Studentview from "./Studentview";
import { BsEyeFill } from "react-icons/bs";
import { map, range } from "lodash";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";

const Alls = () => {

  //............................selecting.......................................//

  const dispatch = useDispatch();

  const { allstudents } = useSelector((state) => ({
    allstudents: state.StudentsReducer.allstudents,
  }));

 //.....................................Pagination...............................//

  const [pages, setPages] = useState(1);

  useEffect(() => {
    dispatch(studentApi(pages));
  }, [dispatch, pages]);

  const totalPages = Math.ceil(allstudents?.count / 10);

  const pageArray = range(1, totalPages + 1);

  const tableData = allstudents?.results;


  return (
    <div>
      <Layout>
        <div className="tablecard">
          <h5
            style={{
              fontSize: "16px",
              fontWeight: "600",
              color: "#495057",
              width: "100vw",
            }}
          >
            STUDENTS
          </h5>
          <Card style={{ width: "85%", height: "90%", padding: "20px" }}>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2 search sbtn"
                aria-label="Search"
              />
            </Form>
            <div className="show">
              <p>Show</p>
              <input type="text" className="inpt" />
              <p>entries</p>
            </div>
            <Table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Email</th>
                  <th>Joining Date</th>
                  <th>DOB</th>
                  <th>Designation</th>
                  <th>Photo</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {" "}
                {map(tableData, (item, key) => (
                  <tr key={key}>
                    <th scope="row">{(key = key + 1)}</th>
                    <td>{item?.full_name}</td>
                    <td>{item?.phone}</td>
                    <td>{item?.email}</td>
                    <td>{item?.start_date}</td>
                    <td>{item?.dob}</td>
                    <td>{item?.designation}</td>
                    <td>{item?.img}</td>
                    <td>
                      <Link to={`/studentview/${item?.id}`}>
                        <BsEyeFill />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>


    {/* //...................................Pagination....................................// */}

            <Row>
              <Col
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <BiLeftArrow
                  onClick={() => {
                    setPages(pages - 1);
                  }}
                />
              </Col>

              {map(pageArray, (page) => (
                <Col
                  onClick={() => setPages(page)}
                  className={pages === page && "active"}
                  style={{
                    display: "flex",
                    alignContent: "center",
                    justifyContent: "center",
                  }}
                >
                  {page}
                </Col>
              ))}
              <Col
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <BiRightArrow
                  onClick={() => {
                    setPages(pages + 1);
                  }}
                />
              </Col>
            </Row>
            
          </Card>
        </div>
      </Layout>
    </div>
  );
};

export default Alls;
