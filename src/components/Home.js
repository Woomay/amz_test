import React from 'react'
import Button from 'react-bootstrap/lib/Button'

import NavItem from 'react-bootstrap/lib/NavItem'
import NavDropdown from 'react-bootstrap/lib/NavDropdown'
import Carousel from 'react-bootstrap/lib/Carousel'
import CarouselItem from 'react-bootstrap/lib/CarouselItem'
import CarouselCaption from 'react-bootstrap/lib/CarouselCaption'
import Nav from './Nav'
import banner1 from '../public/img/banner1.jpg'


class Home extends React.Component {
    render() {
        return (
            <div className="container">
                <Nav />
                <Carousel>
                    <Carousel.Item>
                        <img width={750} height={500} alt="900x500" src={banner1}/>
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                    </Carousel.Item>
                    {/* <Carousel.Item>
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
                    </Carousel.Item> */}
                </Carousel>
            </div>
        )
    }
}

export default Home