import React from 'react'
import {Switch,BrowserRouter as Router,Route} from 'react-router-dom'
import Home from '../components/Home'
import Order from '../components/Order'
import Wallet from '../components/Wallet'
import News from '../components/News'
import Login from '../components/Login'
import Register from '../components/Register'
import Apply from '../components/Apply'
import Detail from '../components/Detail'
import StepOne from '../components/StepOne'
import StepTwo from '../components/StepTwo'
import StepThree from '../components/StepThree'

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
                    <Route path="/apply-free" component={Apply} />
                    <Route path="/detail/:id" component={Detail} />
                    <Route path="/procedure-one" component={StepOne} />
                    <Route path="/procedure-two" component={StepTwo} />
                    <Route path="/procedure-three" component={StepThree} />
                </Switch>
            </Router>
        )
    }
}