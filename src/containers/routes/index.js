import React from 'react'
import {Switch,BrowserRouter as Router,Route} from 'react-router-dom'
import Home from '../components/Home'
import Order from '../components/Order'
import Wallet from '../components/Wallet'
import News from '../components/News'
import Login from '../components/Login'
import Register from '../components/Register'

export default class RouteMap extends React.Component{
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/order" component={Order} />
                    <Route path="/wallet" component={Wallet} />
                    <Route path="/news" component={News} /> 
                    <Route path="/login" component={Login} /> 
                    <Route path="/register" component={Register} />
                </Switch>
            </Router>
        )
    }
}