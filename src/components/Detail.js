import React from 'react'
import MyNav from './Nav'
import Grid from 'react-bootstrap/lib/Grid'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'
import Button from 'react-bootstrap/lib/Button'
import Image from 'react-bootstrap/lib/Image'
import detail from '../public/img/detail.jpg'

class Detail extends React.Component {
    render() {
        return(
            <div className="container">
                <MyNav />
                <Grid>
                    <Row>
                        <Col md={6}>
                            <Image src={detail} responsive rounded />
                        </Col>
                        <Col md={6}>
                            <h3>Stylish and simple bluetooth speaker</h3>
                            <div className>
                                <p>ends in: 10 days</p>
                                <p>Limited: 20 pieces</p>
                            </div>                           
                            <div className="detail-price">
                                <p>price: <span className="price">$12</span></p>
                                <p>cashback: <span className="cashback">100%</span></p>
                                <Button bsSize="large" bsStyle="primary" href="/procedure-one">APPLY FOR FREE</Button>
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}

export default Detail