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
import Pager from 'react-bootstrap/lib/Pager'
import orderDemo from '../public/img/order-demo.jpg'
import proThree from '../public/img/proc-3.gif'

 
class StepThree extends React.Component {
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
                            <Col md={12}>
                                <h3>Confirm receipt of the goods,submit the pictures and text of the five-star rating,and to submit the comment link to "<Link to="/order">my order-pedding review</Link>"</h3>
                            </Col>
                            <Col md={12} style={{marginTop: 50,marginBottom: 50,padding: 0}}>
                               <Image src={orderDemo} width="100%" height="100%" alt="step-3" />
                            </Col>
                            <Col md={12} style={{marginTop: 30,padding: 0}}>
                                <h3>Comment Link Example Diagram:</h3>
                                <Image width="100%" height="100%" src={proThree} rounded />
                            </Col>
                            
                            <Col md={6} className="next-button">
                                <Button bsStyle="warning" bsSize="large" href="/">Chose More Trial Products</Button>
                            </Col>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}

export default StepThree