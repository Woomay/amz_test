import React from 'react'
import MyNav from './Nav'
import Grid from 'react-bootstrap/lib/Grid'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'
import Image from 'react-bootstrap/lib/Image'
import Form from 'react-bootstrap/lib/Form'
import FormControl from 'react-bootstrap/lib/FormControl'
import FormGroup from 'react-bootstrap/lib/FormGroup'
import Button from 'react-bootstrap/lib/Button'
import ControlLabel from 'react-bootstrap/lib/ControlLabel'
import Pager from 'react-bootstrap/lib/Pager'
import detail from '../public/img/detail.jpg'
import proOne from '../public/img/proc-1.gif'
import proTwo from '../public/img/getLink.gif'
 
class StepTwo extends React.Component {
    render() {
        return(
            <div className="container" style={{padding: 0}}>
                <MyNav />
                <Grid>
                    <Row>
                        <Col xs={6} md={3}>
                            bar
                        </Col>
                        <Col xs={12} md={9}>
                            <Col md={6} style={{padding: 0}}>
                                <Image width="100%" height="100%" src={detail} rounded />
                            </Col>
                            <Col md={6}>
                                <h3>You have obtained the free trial qualification !</h3>
                                <h3>The number of trial is limited,please order within 24 hours,and submit the order number</h3>
                                <Button bsSize="large" bsStyle="primary">Buy From Amazon</Button>
                            </Col>
                            <Col md={12} style={{marginTop: 50,marginBottom: 50,padding: 0}}>
                                <Form horizontal>
                                    <FormGroup bsSize="large">
                                        <Col sm={4} componentClass={ControlLabel}>Order Number</Col>
                                        <Col sm={8}>
                                            <FormControl type="text" placeholder="Order Number"></FormControl>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup bsSize="large">
                                        <Col sm={4} componentClass={ControlLabel}>The Payment Account($)</Col>
                                        <Col sm={8}>
                                            <FormControl type="text" placeholder="Payment Account"></FormControl>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup bsSize="large">
                                        <Col sm={4} componentClass={ControlLabel}>Amazon Profile Link</Col>
                                        <Col sm={8}>
                                            <FormControl type="text" placeholder="Profile Link"></FormControl>
                                        </Col>
                                    </FormGroup>
                                </Form>
                            </Col>
                            <Col md={12} style={{marginTop: 30,padding: 0}}>
                                <h3>For Example:</h3>
                                <Image width="100%" height="100%" src={proTwo} rounded />
                            </Col>
                            
                            <Col md={6} className="next-button">
                                <Button bsStyle="warning" bsSize="large" href="/procedure-three">Next</Button>
                            </Col>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}

export default StepTwo