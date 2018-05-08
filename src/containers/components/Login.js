import React from 'react'
import MyNav from './Nav'
import Form from 'react-bootstrap/lib/Form'
import FormControl from 'react-bootstrap/lib/FormControl'
import Col from 'react-bootstrap/lib/Col'
import Row from 'react-bootstrap/lib/Row'
import ControlLabel from 'react-bootstrap/lib/ControlLabel'
import FormGroup from 'react-bootstrap/lib/FormGroup'
import Button from 'react-bootstrap/lib/Button'
import {Link} from 'react-router-dom'


class Login extends React.Component {
    render() {
        return (
            <div className="container">
                <MyNav />
                <div className="loginPage">
                    <Form horizontal className="loginForm">
                        <FormGroup controlId="formHorizontalTitle">
                            <Col sm={12} style={{textAlign: 'center'}}>
                                <h2>Login</h2>
                                <div>Don't have a account yet? <Link to="/register">Register now for FREE!</Link></div>
                            </Col>
                        </FormGroup>
                        <FormGroup controlId="formHorizontalEmail">
                            <Col componentClass={ControlLabel} sm={2}>
                                E-mail
                            </Col>
                            <Col sm={10}>
                                <FormControl type="email" placeholder="Email" />
                            </Col>       
                        </FormGroup>
                        <FormGroup controlId="formHorizontalPassword">
                            <Col componentClass={ControlLabel} sm={2}>
                                Password
                            </Col>
                            <Col sm={10}>
                                <FormControl type="password" placeholder="Password" />
                            </Col>
                        </FormGroup>
                        <FormGroup>
                            <Col smOffset={2} sm={6}>
                                <Button type="submit" bsStyle="primary">
                                Login
                                </Button>
                            </Col>
                            <Col sm={4}><a href="#">Forgot Password?</a></Col>        
                        </FormGroup>
                    </Form>
                </div>     
            </div>
        )
    }
}

export default Login