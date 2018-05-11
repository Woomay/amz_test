import React from 'react'
import {NavLink,Link} from 'react-router-dom'
import MyNav from './Nav'
import Grid from 'react-bootstrap/lib/Grid'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'
import Button from 'react-bootstrap/lib/Button'
import Nav from 'react-bootstrap/lib/Nav'
import NavItem from 'react-bootstrap/lib/NavItem'
import Tab from 'react-bootstrap/lib/Tab'
import Modal from 'react-bootstrap/lib/Modal'
import Form from 'react-bootstrap/lib/Form'
import FormGroup from 'react-bootstrap/lib/FormGroup'
import ControlLabel from 'react-bootstrap/lib/ControlLabel'
import FormControl from 'react-bootstrap/lib/FormControl'

class Wallet extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showModal: false,
            showActiveModal: false
        }
    }
    handleClose = () => {
        this.setState({showModal: false})
    }
    handleOpen = () => {
        this.setState({showModal: true})
    }
    handleActiveOpen = () => {
        this.setState({showActiveModal: true})
    }
    handleActiveClose = () => {
        this.setState({showActiveModal: false})
    }
    render() {
        return (
            <div className="container">
                <MyNav />
                <Tab.Container id="left-tabs-wallet" defaultActiveKey="first">
                    <Row className="clearfix">
                    <Col sm={3}>
                        <Nav bsStyle="pills" style={{flexDirection: 'column',height: 280}}>
                            <NavItem eventKey="first">
                                Total Funds
                            </NavItem>
                            <NavItem eventKey="second">
                                Cashback Record
                            </NavItem>
                            <NavItem eventKey="three">
                                Withdrawals
                            </NavItem>
                        </Nav>
                    </Col>
                    <Col sm={9} style={{marginTop: 35}}>
                        <Tab.Content animation>
                            <Tab.Pane eventKey="first">
                                <div>Total Funds: $12 <Button onClick={this.handleOpen} bsStyle="warning">Withdrawals</Button></div>
                                <div>In Progress: $52</div>
                                <div>Pending Cashback:$10</div>   
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Date</th>
                                            <th>Order Number</th>
                                            <th>Cashback Amount</th>
                                            <th>Status</th>
                                            <th>Remarks</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>2018-05-11</td>
                                            <td>12345678</td>
                                            <td>$12</td>
                                            <td>In Progress</td>
                                            <td>pay 1</td>
                                        </tr>
                                        <tr>
                                            <td>2018-05-11</td>
                                            <td>12345678</td>
                                            <td>$13</td>
                                            <td>cashback to account</td>
                                            <td>pay3</td>
                                        </tr>
                                        <tr>
                                            <td>2018-05-11</td>
                                            <td>11223344</td>
                                            <td>$14</td>
                                            <td>Withdrawal request</td>
                                            <td>pay4</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </Tab.Pane>
                            <Tab.Pane eventKey="three">  
                                <Form horizontal>
                                    <Col smOffset={4} sm={6}><h4>Withdrawal to your paypal</h4></Col>
                                    <FormGroup controlId="formHorizontalAccount" bsSize="large">
                                        <Col componentClass={ControlLabel} sm={3}>Withdrawal Account</Col>
                                        <Col sm={5}>
                                            <FormControl type="text" placeholder="Withdrawal Account" />
                                        </Col>
                                        <Col sm={2}><Button onClick={this.handleActiveOpen} bsSize="lg" bsStyle="warning">Activation</Button></Col>
                                    </FormGroup>
                                    <Col smOffset={4} sm={6}><Link to="#">Set a withdrawal password</Link></Col>  
                                </Form>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                    </Row>
                </Tab.Container>
                <Modal animation show={this.state.showModal} onHide={this.handleClose} bsSize="lg">
                    <Modal.Header closeButton>
                        <Modal.Title>Withdrawal to paypal</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {/* <Link to="#"><h4>Please bind your paypal account and set a password for withdrawal</h4></Link> */}
                        <Form horizontal>
                            <FormGroup controlId="formHorizontalMoney">
                                <Col componentClass={ControlLabel} sm={3}>Withdrawal Amount</Col>
                                <Col sm={6}>
                                    <FormControl type="text" placeholder="Withdrawal Amount" />
                                </Col>
                            </FormGroup>
                            <FormGroup controlId="formHorizontalWithdrawalPassword">
                                <Col componentClass={ControlLabel} sm={3}>Withdrawal Password</Col>
                                <Col sm={6}>
                                    <FormControl type="text" placeholder="Withdrawal Password" />
                                </Col>
                            </FormGroup>
                            <FormGroup>
                                <Col smOffset={3} sm={2}>
                                    <Button type="submit" bsStyle="primary">Submit</Button>
                                </Col>
                                <Col sm={4}><a href="#">Forgot Password?</a></Col>
                            </FormGroup>
                        </Form>
                        {/* The withdrawal request has been received.Please check the receipt record within two working days */}
                    </Modal.Body>
                </Modal>
                <Modal animation show={this.state.showActiveModal} bsSize="lg" onHide={this.handleActiveClose}>
                    <Modal.Header closeButton></Modal.Header>
                    <Modal.Body>
                        <Form horizontal>
                            <FormGroup controlId="formHorizontalPaypalEmail">
                                <Col componentClass={ControlLabel} sm={3}>E-mail</Col>
                                <Col sm={6}>
                                    <FormControl type="text" placeholder="E-mail" />
                                </Col>
                            </FormGroup>
                            <FormGroup controlId="formHorizontalCode">
                                <Col componentClass={ControlLabel} sm={3}>Verifiying Code</Col>
                                <Col sm={4}>
                                    <FormControl type="text" placeholder="Verification" />
                                </Col>
                                <Col sm={2}><Button bsStyle="primary">GET VERIFY</Button></Col>
                            </FormGroup>
                            <FormGroup>
                                <Col smOffset={3} sm={2}>
                                    <Button type="submit" bsStyle="primary">Submit</Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </Modal.Body>
                </Modal>
            </div> 
        )
    }
}

export default Wallet