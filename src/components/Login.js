import React, { useState } from 'react'
import {Card, Container} from 'react-bootstrap'
import { Link,useNavigate } from 'react-router-dom'
import { Button, Form, Input } from 'reactstrap'
import { loginApi } from '../Store/Login API/useApi'

import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const { loading } = useSelector((state) => ({
    loading: state.LoginReducer.loading,
  }));

  
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const [state, setState] = useState({username:"",password:""})



  
  const handleSubmitLogin=(e)=>{
    e.preventDefault()
      dispatch(loginApi(state, navigate));
  }

return (
  <div className='login-card' style={{height: '150vh',backgroundColor: '#f8f8fb'}}>
    <Container style={{display: 'flex', justifyContent: 'center',height: '100vh', width: '100vw'}}>
    <Card className='card-in shadow p-5 mb-5 bg-white rounded' style={{width: '460px',height: '600px',marginTop: '50px'}}>
      <Form onSubmit={handleSubmitLogin}>

      <h3 className='card-head'>EDISONVALLEY</h3>
      <h5 className='card-sub'
      style={{color: 'blue',marginTop: '100px'}}
      >Login</h5>
      <span>Username</span>
      <Input type='text' 
      onChange={(e) => setState({...state, username: e.target.value})} 
      placeholder='Enter username'>Username</Input>
      
      
      <span>Password</span>
      <Input type='password' 
      onChange={(e) => setState({...state, password: e.target.value})} 
      placeholder='Enter password'>Password</Input>
      <Button style={{marginTop: '30px',backgroundColor: '#556ee6', width: '100%'}}>{loading ? "loading..." : "Login"}</Button>

      <p style={{display: 'flex', justifyContent: 'center', marginTop: '30px',marginBottom: '70px'}}>You don t have an account ? <Link style={{textDecoration: 'none'}}>Register</Link> </p>
      <footer style={{display: 'flex', justifyContent: 'center'}}>© 2020 Edisonvalley. Design & Develop by Osperb</footer>
      </Form>
    </Card>
    </Container>
  </div>
  
  
  )
 
}


export default Login