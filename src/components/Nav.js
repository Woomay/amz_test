import React from 'react'
import {NavLink} from 'react-router-dom'
import Navbar from 'react-bootstrap/lib/Navbar'
import logo from '../public/img/logo.png'
import Glyphicon from 'react-bootstrap/lib/Glyphicon'
import Button from 'react-bootstrap/lib/Button'
import Badge from 'react-bootstrap/lib/Badge'

class MyNav extends React.Component {
    handleSelect = () => {
        console.info(this.eventKey)
        //test something
    }
    render() {
        return (
           <div className="nav">
                <div>
                    <img src={logo} alt="logo" />
                </div>
                <div className='navItem'>
                    <NavLink exact activeStyle={{color:'orange'}} to="/">Home</NavLink>
                    <NavLink activeStyle={{color:'orange'}} to="/order">Order</NavLink>
                </div>
                <div className="navMsg">
                    <NavLink activeStyle={{color:'orange'}} to="/wallet">Wallet</NavLink>
                    <NavLink activeStyle={{color:'orange'}} to="/news">News<Badge style={{backgroundColor: 'red'}} pullRight>2</Badge></NavLink>
                    <NavLink activeStyle={{color:'orange'}} to="/login">Login</NavLink>
                </div>  
           </div>
        )
    }
}
export default MyNav