import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./heroCarousel.css"
import { Carousel } from 'react-bootstrap'
const tandemHero = "/images/home-imgs/Tandem.png"
const chelseaHero = "/images/home-imgs/CD-BC-Coilovers.png"

function HeroCarousel() {
    return (
        <>
        <div className="desktop-hero">
            <Carousel>
                <Carousel.Item interval={10000}>
                    <img
                        className="d-block w-100"
                        src={process.env.PUBLIC_URL + tandemHero}
                        alt="3 car tandem, Final Bout"
                    />
                    <Carousel.Caption>
                        <h3>Stay Sideways!!</h3>
                        <p>NRG Racing Seats and Work Wheels now in stock</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={10000}>
                    <img
                        className="d-block w-100"
                        src={process.env.PUBLIC_URL + chelseaHero}
                        alt="Chelsea Denofa, BC racing add"
                    />
                    <Carousel.Caption>
                        <h3>Save 20% on BC-BR Coilovers</h3>
                        <p>Use Code Chelsea20 at checkout</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            </div>
            <div id="mobile-hero"></div>
        </>
    )
}

export default HeroCarousel