import React from 'react'
import {Link} from 'react-router-dom'
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
import Glyphicon from 'react-bootstrap/lib/Glyphicon'
import Pager from 'react-bootstrap/lib/Pager'
import detail from '../public/img/detail.jpg'
import proOne from '../public/img/proc-1.gif'
 
class StepOne extends React.Component {
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
                                <h2>Find it and get it!</h2>
                                <h3>
                                    Click "<Link to="#">Go to amazon to find the goods</Link>" and turn to page 10 to find the store items shown in the picture.
                                </h3>
                            </Col>
                            <Col md={12} style={{marginTop: 50,marginBottom: 50,padding: 0}}>
                                <Form horizontal>
                                    <FormGroup bsSize="large">
                                        <Col sm={4} componentClass={ControlLabel}>Copy the merchandise link</Col>
                                        <Col sm={5}>
                                            <FormControl type="text" placeholder="Merchandise Link"></FormControl>
                                        </Col>
                                        <Col sm={2}><Button bsSize="large" bsStyle="primary">CHECK</Button></Col>
                                    {true ?<Col sm={1} style={{fontSize: 26,color: 'red',paddingTop: 5,marginLeft: -20}}><Glyphicon glyph="remove-circle" /></Col>
                                        :<Col sm={1} style={{fontSize: 26,color: 'green',paddingTop: 5,marginLeft: -20}}><Glyphicon glyph="ok-sign" /></Col>}                                 
                                    </FormGroup>
                                </Form>
                            </Col>
                            <Col md={12} style={{marginTop: 30,padding: 0}}>
                                <h3>For Example:</h3>
                                <Image width="100%" height="100%" src={proOne} rounded />
                            </Col>
                            <Col md={6} className="next-button">
                                <Button bsStyle="warning" bsSize="large" href="/procedure-two">Next</Button>
                            </Col>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}

export default StepOne