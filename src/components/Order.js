import React from 'react'
import MyNav from './Nav'
import Grid from 'react-bootstrap/lib/Grid'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'
import Nav from 'react-bootstrap/lib/Nav'
import NavItem from 'react-bootstrap/lib/NavItem'
import Tab from 'react-bootstrap/lib/Tab'
import Table from 'react-bootstrap/lib/Table'
import ListGroup from 'react-bootstrap/lib/ListGroup'
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem'
import Button from 'react-bootstrap/lib/Button'
import Modal from 'react-bootstrap/lib/Modal'
import Form from 'react-bootstrap/lib/Form'
import FormGroup from 'react-bootstrap/lib/FormGroup'
import ControlLabel from 'react-bootstrap/lib/ControlLabel'
import FormControl from 'react-bootstrap/lib/FormControl'
import getLink from '../public/img/getLink.gif'



class Order extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isShow: false
        }
    }
    handleClose = () => {
        this.setState({isShow: false})
    }
    handleOpen = () => {
        this.setState({isShow: true})
    }
    render() {
        return (
            <div className="container" style={{padding:0}}>
                <MyNav />
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row className="clearfix">
                    <Col sm={3}>
                        <Nav bsStyle="pills" style={{flexDirection: 'column',height: 280}}>
                            <NavItem eventKey="first">
                                Pedding payment
                            </NavItem>
                            <NavItem eventKey="second">
                                Pedding review
                            </NavItem>
                             <NavItem eventKey="three">
                                Pedding audit
                            </NavItem>
                            <NavItem eventKey="fourth">
                                Complete
                            </NavItem>
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content animation>
                            <Tab.Pane eventKey="first">
                            <table>
                                    <thead>
                                    <tr>
                                        <th>Time</th>
                                        <th>Product</th>
                                        <th>Store Name</th>
                                        <th>Price</th>
                                        <th>Cashback</th>
                                        <th>Status</th>
                                        <th>Operation</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>2018-05-08</td>
                                            <td>IPHONE</td>
                                            <td>APPLE STORE</td>
                                            <td>$699</td>
                                            <td>5%</td>
                                            <td>pedding audit</td>
                                            <td><Button bsStyle="primary">Modify review link</Button></td>
                                        </tr>
                                        <tr>
                                            <td>2018-05-08</td>
                                            <td>AIR POD</td>
                                            <td>APPLE STORE</td>
                                            <td>$99</td>
                                            <td>2%</td>
                                            <td>pedding payment</td>
                                            <td><Button bsStyle="success">COMPLETE</Button></td>
                                        </tr>
                                        <tr>
                                            <td>2018-05-08</td>
                                            <td>LAMP</td>
                                            <td>yoho</td>
                                            <td>$8</td>
                                            <td>100%</td>
                                            <td>pedding payment</td>
                                            <td>
                                                <Button bsStyle="danger">GO TO PAY</Button>
                                                <br/>
                                                <Button onClick={this.handleOpen}>Submit OrderNum</Button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>2018-05-08</td>
                                            <td>IPHONE</td>
                                            <td>APPLE STORE</td>
                                            <td>$699</td>
                                            <td>5%</td>
                                            <td>pedding review</td>
                                            <td><Button bsStyle="primary">Submit review link</Button></td>
                                        </tr>
                                    </tbody>
                                </table>  
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <table>
                                    <thead>
                                    <tr>
                                        <th>Time</th>
                                        <th>Product</th>
                                        <th>Store Name</th>
                                        <th>Price</th>
                                        <th>Cashback</th>
                                        <th>Status</th>
                                        <th>Operation</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>2018-05-08</td>
                                            <td>IPHONE</td>
                                            <td>APPLE STORE</td>
                                            <td>$699</td>
                                            <td>5%</td>
                                            <td>pedding review</td>
                                            <td><Button bsStyle="primary">Submit review link</Button></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </Tab.Pane>
                            <Tab.Pane eventKey="three">
                                Tab 3 content
                            </Tab.Pane>
                            <Tab.Pane eventKey="fourth">
                                Tab 4 content
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                    </Row>
                </Tab.Container>
                <Modal show={this.state.isShow} bsSize="large" onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title style={{display: 'flex',justifyContent: 'space-between',alignItems: 'center'}}>
                            Please fill in follow message
                        </Modal.Title>
                        <Modal.Body>
                            <Form horizontal>
                                <FormGroup controlId="formHorizontalOrder">
                                    <Col componentClass={ControlLabel} sm={3}>
                                        Order Number
                                    </Col>
                                    <Col sm={9}>
                                        <FormControl type="text" placeholder="Order Number" />
                                    </Col>
                                </FormGroup>
                                <FormGroup controlId="formHorizontalAccount">
                                    <Col componentClass={ControlLabel} sm={3}>
                                        Payment Account($)
                                    </Col>
                                    <Col sm={9}>
                                        <FormControl type="text" placeholder="The Payment Account" />
                                    </Col>
                                </FormGroup>
                                <FormGroup controlId="formHorizontalProfile">
                                    <Col componentClass={ControlLabel} sm={3}>
                                        Amazon Profile Link
                                    </Col>
                                    <Col sm={9}>
                                        <FormControl type="text" placeholder="The Profile Link" />
                                    </Col>
                                </FormGroup>
                                <FormGroup>
                                    <h4>How to get a profile link:</h4>
                                    <Col sm={12}>
                                        <img width="100%" height="100%" src={getLink} alt="guideStep" />
                                    </Col>
                                </FormGroup>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button bsSize="large" bsStyle="primary">Submit</Button>
                        </Modal.Footer>
                    </Modal.Header>
                </Modal>
            </div>
        )
    }
}

export default Order