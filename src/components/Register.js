import React from 'react'
import MyNav from './Nav'
import Form from 'react-bootstrap/lib/Form'
import FormGroup from 'react-bootstrap/lib/FormGroup'
import Col from 'react-bootstrap/lib/Col'
import FormControl from 'react-bootstrap/lib/FormControl'
import ControlLabel from 'react-bootstrap/lib/ControlLabel'
import Button from 'react-bootstrap/lib/Button'
import {Link} from 'react-router-dom'


class Register extends React.Component{
    render() {
        return (
            <div className="container">
                <MyNav />
                <div className="loginPage">
                    <Form horizontal className="loginForm">
                        <FormGroup controlId="formHorizontalTitle">
                            <Col sm={12} style={{textAlign: 'center'}}>
                                <h2>Rigister</h2>
                                <div>Already have an account? <Link to="/login">Log in now!</Link></div>
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
                        <FormGroup controlId="formHorizontalPassword">
                            <Col componentClass={ControlLabel} sm={2}>
                                Confirm
                            </Col>
                            <Col sm={10}>
                                <FormControl type="password" placeholder="Confirm Password" />
                            </Col>
                        </FormGroup>
                        <FormGroup>
                            <Col smOffset={2} sm={10}>
                                <Button type="submit" bsStyle="primary">
                                Register
                                </Button>
                            </Col>  
                        </FormGroup>
                    </Form>
                </div>     
            </div>
        )
    }
}

export default Register

