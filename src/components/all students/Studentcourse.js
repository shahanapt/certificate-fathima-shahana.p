import React, { useEffect, useState } from 'react'
import { Button, Card, Col, FormGroup, Row, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { Input } from 'reactstrap'
import { allStudentCApi, deleteNewCrsApi } from '../../Store/Students API/useApi'
import Layout from '../Layout'
import { map,range } from "lodash";
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi'

const Studentcourse = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { allscourse } = useSelector((state) => ({
        allscourse: state.StudentsReducer.allStudentCourseDetails,
      }));
    const [pages, setPages] = useState(1);

    const totalPages = Math.ceil(allscourse?.count / 10);
    const pageArray = range(1, totalPages + 1);

    

      useEffect(() => {
        dispatch(allStudentCApi(pages));
      }, [dispatch, pages]);

      const tableData =  allscourse?.results;
 


      const deleteNewCourse = (id) => {
        dispatch(deleteNewCrsApi(id, navigate));
      };
    

  return (
    <div>
        <Layout>
        <Card className="cardname" style={{width: '90%' , height: '72%',padding: '25px'}}>
                <h5 style={{width: '15rem'}}>STUDENT COURSE</h5>
                <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                    
                    <div><Link to= "/newcourse"><Button style={{width: '15rem',height: '3rem',margin: '0px'}}>+Create New Course</Button></Link></div>
                     
                </div>
                    <Table
                    >
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>ID</th>
                        <th>Course Name</th>
                        <th>Progress</th>
                        
                        <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {" "}
                        {map(tableData, (item) => (
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
                        <td >{item?.progress}</td>
                        
                        <td>
                        
                        <div>
                        <button className="viewbutton1" onClick={()=>{deleteNewCourse(item?.id)}} >Delete</button>
                        </div>


                        </td>
                        </tr>
                        
                       
                        ))}
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

                    </Card>
                    </Layout>
    </div>
  )
}

export default Studentcourse