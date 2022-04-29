import React, { useEffect, useState } from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import Input from '../../components/UI/Input/input'
import { useDispatch, useSelector } from 'react-redux'
import { isUserLoggedIn, signup } from '../../actions'
import {  BrowserRouter as Navigate  } from 'react-router-dom'
import Header from '../../components/Header/header'


function Signup() {

    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);
    const sign_up = useSelector(state => state.signup)

    useEffect(() => {
        if(!auth.authenticate){
          dispatch(isUserLoggedIn());
        }
        
      }, []);

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    

    const userSignup = (e) => {

        e.preventDefault();

        const user = {firstName, lastName, email, password}
        dispatch(signup(user))
    }

    if(auth.authenticate){
        return <Navigate to={'/'} />
      }

    if(sign_up.loading){
        return <p>Loading...!</p>
    }
    
    return (
        <>
        <Header />
            <Container>
                { sign_up.message }
                <Row style={{ marginTop: '50px' }}>
                    <Col md={{ span: 6, offset: 3 }}>
                        <Form onSubmit={userSignup} >
                            <Row>
                                <Col>
                                    <Input
                                        label="First Name"
                                        placeholder="First Name"
                                        value={firstName}
                                        type="text"
                                        onChange={(e) => setFirstName(e.target.value)}

                                    />


                                </Col>
                                <Col>
                                    <Input
                                        label="Last Name"
                                        placeholder="Last Name"
                                        value={lastName}
                                        type="text"
                                        onChange={(e) => setLastName(e.target.value)}

                                    />
                                </Col>
                            </Row>

                            <Input
                                label="Email"
                                placeholder="Enter Email"
                                value={email}
                                type="email"
                                onChange={(e) =>setEmail(e.target.value) }
                                errorMessage="We'll never share your email with anyone else."

                            />

                            <Input
                                label="Password"
                                placeholder="Password"
                                value={password}
                                type="Password"
                                onChange={(e) => setPassword(e.target.value) }

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

export default Signup
