import React from 'react'
import MyNav from './Nav'
import Grid from 'react-bootstrap/lib/Grid'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'
import Button from 'react-bootstrap/lib/Button'
import bannerFree from '../public/img/banner-free.jpg'
import stepOne from '../public/img/step-1.jpg'
import stepTwo from '../public/img/step-2.jpg'
import stepThree from '../public/img/step-3.jpg'
import stepFour from '../public/img/step-4.jpg'
import stepFive from '../public/img/step-5.jpg'

class Apply extends React.Component {
    render() {
        return (
            <div className="container">
                <MyNav />
                <Grid style={{width: 1140,padding: 0,paddingBottom: 20}}>
                    <Row className="show-step-grid">
                        <Col md={12}>
                            <img width="100%" height="100%" src={bannerFree} alt="banner-free" />
                        </Col>
                    </Row>
                    <Row className="show-step-grid">
                        <Col className="free-title" md={11}>
                            <h1>How to get free product from Amzmama?</h1>
                        </Col>
                    </Row>
                    <Row className="show-step-grid">
                        <Col md={11}>
                            <h3>Step 1: Click "apply for free"</h3>
                            <img src={stepOne} alt="step-1" />
                        </Col>
                    </Row>
                    <Row className="show-step-grid">
                        <Col md={11}>
                            <h3>Step 2: Click "go to amazon to find the goods", according to the prompt page to find the corresponding store products.</h3>
                            <img src={stepTwo} alt="step-2" />
                        </Col>
                    </Row>
                    <Row className="show-step-grid">
                        <Col md={11}>
                            <h3>Step 3: Place orders at amazon and submit the order number and profile link to Amzmama.</h3>
                            <img src={stepThree} alt="step-3" />
                        </Col>
                    </Row>
                    <Row className="show-step-grid">
                        <Col md={11}>
                            <h3>Step 4: Confirm receipt of the goods and go to amazon for comment and submit a good link.</h3>
                            <img src={stepFour} alt="step-4" />
                        </Col>
                    </Row>
                    <Row className="show-step-grid">
                        <Col md={11}>
                            <h3>Step 5: Review and approval can be returned and can be checked in the wallet within two working days.</h3>
                            <img src={stepFive} alt="step-5" />
                        </Col>
                    </Row>
                    <Row className="show-step-grid">
                        <Col md={2}>
                            <Button bsSize="large" bsStyle="primary" href="/">Apply Now</Button>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}

export default Apply