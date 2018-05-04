import React from 'react'
import {NavLink} from 'react-router-dom'
import Navbar from 'react-bootstrap/lib/Navbar'
import logo from '../public/img/logo.png'
import Glyphicon from 'react-bootstrap/lib/Glyphicon'
import Button from 'react-bootstrap/lib/Button'

class Nav extends React.Component {
    handleSelect = () => {
        console.info(this.eventKey)
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
                    <NavLink activeStyle={{color:'orange'}} to="/wallet">
                        <Glyphicon glyph="usd" />
                        Wallet
                    </NavLink>
                    <NavLink activeStyle={{color:'orange'}} to="/news">News</NavLink>
                    <NavLink activeStyle={{color:'orange'}} to="/login">Login</NavLink>
                </div>  
           </div>
        )
    }
}
export default Nav