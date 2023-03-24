import React, { useEffect, useState } from 'react'
import Layout from '../Layout'
import { Table,Input, FormGroup } from "reactstrap";
import { Card,Col,Row } from "react-bootstrap";
import {BsXLg,BsPencilFill} from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { allcourseApi, deletecourseApi } from '../../Store/Course API/useApi';
import { map,range } from "lodash";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";


const Courses = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  const { allc } = useSelector((state) => ({
    allc: state.CourseReducer.allcourseDetails,
  }));



  const deleteCourse = (id) => {
    dispatch(deletecourseApi(id, navigate));
  };

  const [pages, setPages] = useState(1);

  useEffect(() => {
    dispatch(allcourseApi(pages));
  }, [dispatch, pages]);
  const totalPages = Math.ceil(allc?.count / 10);

  const pageArray = range(1, totalPages + 1);
  

  const { singlec } = useSelector((state) => ({
    singlec: state.CourseReducer.singlecDetails,
  }));  
  console.log(singlec);

  console.log(params.id);



  return (
    <div >
        <Layout>
            <div style={{backgroundColor: '#f8f8fb',width: '100vw', height: '100vh'}}>
            <h5 className="hdng3">COURSES</h5>
            <Card style={{ width: "70%",margin: '30px',padding: '20px'}}>
            <Table
                    >
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>ID</th>
                        <th>Course Name</th>
                        <th>Duration</th>
                        <th>Course Category</th>
                        <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {" "}
                      {map(allc.results, (item) => (
                        <tr>
                        <th scope="row">
                        <FormGroup
                            check
                            inline
                        >
                            <Input type="checkbox" />
                            </FormGroup>
                        </th>
                        <td>{item?.id}</td>
                        <td>{item?.course_name}</td>
                        <td>{item?.duration}</td>
                        <td>{item?.course_category}</td>
                        <td>
                        <BsPencilFill color='blue' style={{margin: '10px'}}
                         onClick={() => navigate(`/updatecourses/${item?.id}`)}
                        />
                        <BsXLg color='red' onClick={()=>{deleteCourse(item?.id)}} />
                        

                        </td>
                        </tr>
                      ))}
                    </tbody>
                    </Table>

{/* .............................pagination................................ */}

                    <Row>
                      <Col
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}>
                        <BiLeftArrow
                          onClick={() => {
                            setPages(pages - 1);
                          }}/>
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
  )
}

export default Courses