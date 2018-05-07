import React from 'react'
import Button from 'react-bootstrap/lib/Button'
import NavItem from 'react-bootstrap/lib/NavItem'
import NavDropdown from 'react-bootstrap/lib/NavDropdown'
import Carousel from 'react-bootstrap/lib/Carousel'
import CarouselItem from 'react-bootstrap/lib/CarouselItem'
import CarouselCaption from 'react-bootstrap/lib/CarouselCaption'
import Grid from 'react-bootstrap/lib/Grid'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'
import FormGroup from 'react-bootstrap/lib/FormGroup'
import InputGroup from 'react-bootstrap/lib/InputGroup'
import FormControl from 'react-bootstrap/lib/FormControl'
import Breadcrumb from 'react-bootstrap/lib/Breadcrumb'
import Glyphicon from 'react-bootstrap/lib/Glyphicon'
import Nav from './Nav'
import banner1 from '../public/img/banner1.jpg'
import lamp from '../public/img/lamp.jpg'
import tape from '../public/img/tape.jpg'
import chair from '../public/img/chair.jpg'


class Home extends React.Component {
    render() {
        return (
            <div className="container">
                <Nav />
                <Grid>
                    <Row className="show-grid">
                        <Col xs={12} md={8} style={{paddingLeft: 0}}>
                            <Carousel interval={3000}>
                                <Carousel.Item>
                                    <img width={750} height={500} alt="900x500" src={banner1}/>
                                    <Carousel.Caption>
                                        <h3>First slide label</h3>
                                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img width={750} height={500} alt="900x500" src={banner1}/>
                                    <Carousel.Caption>
                                        <h3>Second slide label</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img width={750} height={500} alt="900x500" src={banner1}/>
                                    <Carousel.Caption>
                                        <h3>Third slide label</h3>
                                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </Col>
                        <Col xs={6} md={4} style={{padding: 0}}>
                            <div className="free">How to get a free qualifucation?</div>
                            <div className="freeStep">
                                <h3>Find it and get it!</h3>
                                <ul>
                                    <li>1.To apply for trial</li>
                                    <li>2.Find the product</li>
                                    <li>3.Buy and submit order number</li>
                                    <li>4.High praise</li>
                                    <li>5.Cashback</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                    <Row className="show-grid middle-search">
                        <Col xs={12} md={8} style={{paddingLeft: 0}} className="middle-search-left">
                            <form>
                                <FormGroup bsSize="large">
                                    <InputGroup>
                                        <InputGroup.Addon><Glyphicon glyph="search" /></InputGroup.Addon>
                                        <FormControl type="text" />    
                                    </InputGroup>   
                                </FormGroup>
                            </form>
                            <Breadcrumb>
                                <Breadcrumb.Item href="#">Phone</Breadcrumb.Item>
                                <Breadcrumb.Item href="#">Apple Phone</Breadcrumb.Item>
                                <Breadcrumb.Item href="#" active>Iphone X</Breadcrumb.Item>
                            </Breadcrumb>
                        </Col>
                        <Col className="middle-search-right" xs={6} md={4} style={{padding: 0}}>
                            <div>Search by newness</div>
                        </Col>
                    </Row>
                    <Row className="show-grid">
                        <Col xs={6} md={4} className="display-goods">
                            <img src={lamp} alt="lamp" />
                            <p>Lamp</p>
                            <p>price: <span className="price">$8</span></p>
                            <p>cashback: <span className="cashback">100%</span></p>
                        </Col>
                        <Col xs={6} md={4} className="display-goods">
                            <img src={tape} alt="tape" />
                            <p>Tape</p>
                            <p>price: <span className="price">$8</span></p>
                            <p>cashback: <span className="cashback">100%</span></p>        
                        </Col>
                        <Col xs={6} md={4} className="display-goods">
                            <img src={chair} alt="chair" />
                            <p>Chair</p>
                            <p>price: <span className="price">$8</span></p>
                            <p>cashback: <span className="cashback">100%</span></p>
                        </Col>
                        <Col xs={6} md={4} className="display-goods">
                            <img src={chair} alt="chair" />
                            <p>Chair</p>
                            <p>price: <span className="price">$8</span></p>
                            <p>cashback: <span className="cashback">100%</span></p>
                        </Col>
                        <Col xs={6} md={4} className="display-goods">
                            <img src={chair} alt="chair" />
                            <p>Chair</p>
                            <p>price: <span className="price">$8</span></p>
                            <p>cashback: <span className="cashback">100%</span></p>
                        </Col>
                        <Col xs={6} md={4} className="display-goods">
                            <img src={chair} alt="chair" />
                            <p>Chair</p>
                            <p>price: <span className="price">$8</span></p>
                            <p>cashback: <span className="cashback">100%</span></p>
                        </Col>
                        <Col xs={6} md={4} className="display-goods">
                            <img src={chair} alt="chair" />
                            <p>Chair</p>
                            <p>price: <span className="price">$8</span></p>
                            <p>cashback: <span className="cashback">100%</span></p>
                        </Col>
                        <Col xs={6} md={4} className="display-goods">
                            <img src={chair} alt="chair" />
                            <p>Chair</p>
                            <p>price: <span className="price">$8</span></p>
                            <p>cashback: <span className="cashback">100%</span></p>
                        </Col>
                        <Col xs={6} md={4} className="display-goods">
                            <img src={chair} alt="chair" />
                            <p>Chair</p>
                            <p>price: <span className="price">$8</span></p>
                            <p>cashback: <span className="cashback">100%</span></p>
                        </Col>
                    </Row>
                </Grid>   
            </div>
        )
    }
}

export default Home