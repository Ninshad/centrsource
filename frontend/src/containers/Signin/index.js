import React, { useEffect, useState } from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import Input from '../../components/UI/Input/input'

import { isUserLoggedIn, login } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';
// import {  BrowserRouter as Navigate } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import Header from '../../components/Header/header';



function Signin() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const auth = useSelector(state => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    if(!auth.authenticate){
      dispatch(isUserLoggedIn());
    }
    
  }, []);

  const userLogin = (e) => {

    e.preventDefault();

    const user = {
      email, password
    }

    dispatch(login(user));

  }

  let navigate = useNavigate();

  if(auth.authenticate){
    return  navigate('/')
  }
 

  return (
    <>
    <Header />
      <Container>
        <Row style={{ marginTop: '50px' }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form onSubmit={userLogin}>
              <Input
                label="Email"
                placeholder="Enter Email"
                value={email}
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                errorMessage="We'll never share your email with anyone else."

              />
              <Input
                label="Password"
                placeholder="Password"
                value={password}
                type="Password"
                onChange={(e) => setPassword(e.target.value)}

              />
              {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>

      </Container>
      </>
  )
}

export default Signin
