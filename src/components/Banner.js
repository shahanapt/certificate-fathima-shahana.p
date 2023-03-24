import React from 'react'
import './Banner.css'
import {Row,Col,Container,Button} from 'react-bootstrap'
import { Link } from 'react-router-dom';


const Banner = () => {
  return (
    <div className='banner'>
        <Container>
        <Row my-auto>
            <Col md-6>

                <div className='banner-left'>
                    <h1 style={{textAlign: 'left'}}>Make Your Career<br></br>
                        With EdisonValley</h1>
                    <p className='banpara'>We are a bunch of tech enthusiasts determined to<br></br>uplift the society the latest technologies around us.
                    </p>
                    <Link to='/login'><Button className="text-white banbutton" variant="warning" >Login</Button></Link>
                </div>


            </Col>

            <Col md-6>

                <div className='banner-right'>
                    <img src={require("./sample.jpg")} alt="error" />
                </div>
                

            </Col>
        </Row>
        </Container>

        
    </div>
  )
}

export default Banner