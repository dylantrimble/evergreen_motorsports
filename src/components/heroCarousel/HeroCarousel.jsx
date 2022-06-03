import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./heroCarousel.css"
import { Carousel } from 'react-bootstrap'
import tandemHero from "../../images/home-imgs/Tandem.jpeg"
import chelseaHero from "../../images/home-imgs/CD-BC-Coilovers.png"

function HeroCarousel() {
    return (
        <>
        <div className="desktop-hero">
            <Carousel>
                <Carousel.Item interval={10000}>
                    <img
                        className="d-block w-100"
                        src={tandemHero}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Stay Sideways!!</h3>
                        <p>NRG Racing Seats and Work Wheels now in stock</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={10000}>
                    <img
                        className="d-block w-100"
                        src={chelseaHero}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Save 20% on BC-BR Coilovers</h3>
                        <p>Use Code Chelsea20 at checkout</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            </div>
            <div className="mobile-hero">

            </div>
        </>
    )
}

export default HeroCarousel