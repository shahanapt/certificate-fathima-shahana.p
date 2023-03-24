import React, { useEffect } from 'react'
import { Button, Card, Col, Container, Row } from 'reactstrap'
import bg from '../dashboard/bg.jpeg'
import dwnld from '../dashboard/dwnld.jpg'
import pin from '../dashboard/pin.jpg'
import copy from '../dashboard/copy.jpg'
import {BsArrowRight} from  "react-icons/bs";
import { useDispatch,useSelector  } from 'react-redux';
import { profileApi } from '../../Store/Login API/useApi'
import './Dbanner.css'


function Dbanner() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(profileApi())
  }, [dispatch])

  const { profileDetails } = useSelector((state) => ({
    profileDetails : state.ProfileReducer.profileDetails,
  }));

  console.log(profileDetails)

  return (
    <div style={{backgroundColor:"#f8f8fb"}}>
      <Container className='P-2 mt-3' style={{height: '100vh', width: '100vw'}}>
        <h6 style={{padding: '10px 2px'}}>DASHBOARD</h6>
        <Row>
          <Col md="4">
            <Card style={{width: '380px',height: '250px'}}>
              <div className='card-one-top p-2' style={{backgroundColor:"rgb(247 247 247)", borderTopLeftRadius:"5px",borderTopRightRadius:"5px",height:"120px",position:"relative",color: 'blue'}}>
                <h6 >Welcome Back !</h6>
                <p>it will seem like simplified</p>
                <img style={{position:"absolute",width:"100px",height:"100px",left:"210px",bottom:"0px"}} src={bg} alt="error"/>
              </div>
              <div className='card-one-bottom p-2'style={{height: '2px'}}>
                <Row>
                  <Col md="4" style={{position:"relative"}}>
                    <img alt='' src={require("../dashboard/avatar.png")} style={{width:"50px",height:"50px,",position:"absolute",top:"-30px",right:"20px",borderRadius:"70%"}} ></img>
                    <h6 style={{marginTop:"30px"}}>{profileDetails?.username}</h6>
                    
                    <p style={{fontSize: "10px"}}>{profileDetails?.email}</p>
                  </Col>
                  <Col md="4">
                    <h6>125</h6>
                    <p>Projects</p>
                    <Button style={{width:"90px",fontSize:"10px",margin:"0px", backgroundColor: '#516be7',border: 'none'}}>View Profile<BsArrowRight/></Button>
                  </Col>
                  <Col md="4">
                    <h6>$1245</h6>
                    <p>Revenue</p>
                  </Col>

                </Row>
              </div>
            </Card>
          </Col>

          <Col md="8">
            <Row>
            <Col md="6" className='bannerwid'>
            <Card style={{padding: '5px',marginBottom: '10px',height: '120px',width: '20rem'}}>
              
              <p>Available Courses</p>
              <h6>3</h6>
              <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px'}}>
              <img src= {dwnld} alt="error" style={{width: "70px", top: '25px',position: 'absolute',marginRight:"5px"}}/>
              </div>
            </Card>
          </Col>

          <Col md="6" className='bannerwid'>
            <Card style={{padding: '5px',marginBottom: '10px',height: '120px',width: '20rem'}}>
              <p>Course Completed Students</p>
              <h6>2</h6>
              <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px'}}>
              <img src= {pin} alt="error" style={{width: "70px", top: '25px',position: 'absolute',marginRight:"5px"}}/>
              </div>
            </Card>
          </Col>
            </Row>


            <Row>
            <Col md="6" className='bannerwid'>
            <Card style={{padding: '5px',marginBottom: '10px',height: '120px',width: '20rem'}}>
              <p>Total Students</p>
              <h6>5</h6>
              <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px'}}>
              <img src= {copy} alt="error" style={{width: "70px", top: '25px',position: 'absolute',marginRight:"5px"}}/>
              </div>
            </Card>
          </Col>

          <Col md="6" className='bannerwid'>
            <Card style={{padding: '5px',marginBottom: '10px',height: '120px',width: '20rem'}}>
              <p>Total Students</p>
              <h6>5</h6>
              <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px'}}>
              <img src= {copy} alt="error" style={{width: "70px", top: '25px',position: 'absolute', marginRight:"5px"}}/>
              </div>
            </Card>
          </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Dbanner












// import React from "react";
// import { Card, Col, Container, Row } from "reactstrap";
// import bg from '../dashboard/bg.jpeg'
// import avatar from "../dashboard/avatar.png";
// import { AioutlineArrowRight } from "react-icons/ai"
// import Layout from "../Layout";
// import { Button } from "react-bootstrap";

// function Dbanner() {
//   return (
//     <div style={{backgroundColor: '#F8F8FB'}}>
      
//       <div className="w-100">
//         <Container>
//         <h5 style={{marginTop: '20ox'}}>DASHBOARD</h5>
//         <Row>
//           <Col md="4">
//             <Card
//             style={{minHeight: '388px'}}
//             >
//             <div>
//             <div>
//             <h5>Welcome Back !</h5>
//             <p>It will seem like simplified</p>
            
//             </div>
            

//             <div>
//             <img  src={bg} alt="error"/>
//             </div>
//             </div>
//             <Row>
//               <Col md="4">
//               <div>
//                 <img src={avatar} alt="error"/>
//               </div> 

//               <div className="mt-5 mx-2">
//                 <h5 style={{ fontSize: '15px', fontWeight: '500px'}}>Cynthia Price{" "}</h5>
//                 <h5 style={{fontSize: '13px',fontWeight: '400px'}}>UI/UX Designer</h5>

//               </div>
//               </Col>

//               <Col md="4" className="mt-3">
//                 <h5 style={{ fontSize: "15px", fontWeight: "500px"}}>125</h5>
//                 <Button style={{ fontSize: "12px", fontWeight: "200px"}}>
//                 View Profile 
//                 </Button>
//                 <h5 style={{ fontSize: "15px", fontWeight: "500px"}}>Projects</h5>
//               </Col>
//             </Row>

//             </Card>
//           </Col>

//     {/* end of first column4 */}

//           <Col md="8">
//             <Row>
//               <Col md="6">
//                 <Card></Card>
//                 <Card></Card>
//               </Col>
//               <Col md="6">
//                 <Card></Card>
//                 <Card></Card>
//               </Col>
//             </Row>
//           </Col>
//         </Row>
        
//       </Container>
//       </div>
//       </div>
//   );
// }

// export default Dbanner;
