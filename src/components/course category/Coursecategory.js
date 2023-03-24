import React, { useEffect, useState } from "react";
import Layout from "../Layout";
import {
  Table,
  Input,
  FormGroup,
  
} from "reactstrap";
import { Card, Col, Row } from "react-bootstrap";
import { BsXLg, BsPencilFill } from "react-icons/bs";
import {
  allcourseCategoryApi,
  deletecourseCategoryApi,
  
} from "../../Store/Course category API/useApi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { map, range } from "lodash";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";

const Coursecategory = () => {
  const dispatch = useDispatch();

  const { allcc } = useSelector((state) => ({
    allcc: state.CoursecategoryReducer.allcourseCategoryDetails,
  }));
  const navigate = useNavigate();
  const params = useParams();

  

  const deleteCourseCategory = (id) => {
    dispatch(deletecourseCategoryApi(id, navigate));
  };

  // console.log(allstudents);

  const [pages, setPages] = useState(1);

  useEffect(() => {
    dispatch(allcourseCategoryApi(pages));
  }, [dispatch, pages]);

  const totalPages = Math.ceil(allcc?.count / 10);

  const pageArray = range(1, totalPages + 1);



 

  const { singlecoursec } = useSelector((state) => ({
    singlecoursec: state.CoursecategoryReducer.getCCDetails,
  }));  
  console.log(singlecoursec);

  console.log(params.id);


  // useEffect(() => {
  //     dispatch(getCCApi(params.id));
  //   }, []); sahad

  
  
  // const { singlecc } = useSelector((state) => ({
  //   singlecc: state.CoursecategoryReducer.getCCDetails,
  // }));
  // console.log(singlecc);
  

  // useEffect(() => {
  //   dispatch(getCCApi(params.id));
  // }, []);


  return (
    <div>
      <Layout>
        <div
          style={{
            backgroundColor: "#f8f8fb",
            width: "100vw",
            height: "100vh",
          }}
        >
          <h5 className="hdng3">COURSE CATEGORIES</h5>
          <Card style={{ width: "60%", margin: "30px", padding: "20px" }}>
            <Table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>ID</th>
                  <th>Course Category Name</th>
                  <th>Designation</th>

                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {" "}
                {map(allcc.results, (item) => (
                  <tr>
                    <th scope="row">
                      <FormGroup check inline>
                        <Input type="checkbox" />
                      </FormGroup>
                    </th>
                    <td>{item?.id}</td>
                    <td>{item?.course_category_name}</td>
                    <td>{item?.designation}</td>
                    <td>
                      {/* <Link to={`/updatecourses/${item?.id}`}> */}

                      <BsPencilFill
                        color="blue"
                        style={{ margin: "10px" }}
                        onClick={() => navigate(`/updatecoursecategory/${item?.id}`)}
                      />
                      {/* </Link> */}

                      <BsXLg color="red" onClick={()=>{deleteCourseCategory(item?.id)}} />
                    </td>
                  </tr>
                ))}
                <tr></tr>
              </tbody>
            </Table>

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

            {/* <Pagination
                    className="pagee"
                    aria-label="Page navigation example" style={{display: 'flex',justifyContent: 'flex-end'}}
                  >
                    <PaginationItem disabled className="pgntn">
                      <PaginationLink className="numb" href="#" previous />
                    </PaginationItem>
                    <PaginationItem active className="pgntn">
                      <PaginationLink className="numb" href="#">
                        1
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem className="pgntn">
                      <PaginationLink className="numb" href="#">
                        2
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem disabled className="pgntn">
                      <PaginationLink className="numb" href="#">
                        3
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem className="pgntn">
                      <PaginationLink className="numb" href="#">
                        4
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem className="pgntn">
                      <PaginationLink className="numb" href="#">
                        5
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem className="pgntn">
                      <PaginationLink className="numb" href="#" next />
                    </PaginationItem>
                  </Pagination> */}
          </Card>
        </div>
      </Layout>
    </div>
  );
};

export default Coursecategory;
