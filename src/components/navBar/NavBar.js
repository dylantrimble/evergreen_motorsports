import React from 'react'
import { Link } from "react-router-dom";
import "./navBar.css"
import { Cart2 } from 'react-bootstrap-icons';


function NavBar() {
    return (
        <>
            <nav className='nav-bar'>
                <div className="icon-wrapper">
                    <Link to="/" className='egm-icon'></Link>
                    <section className='right-nav'>
                    <form action="" className='search-form-dt'>
                        <input className='search search-btn' type="submit" placeholder='Search' />
                        <input className='search search-box' type="text" placeholder='What are you looking for?'/>
                    </form>
                    <Link to="/cart" className='cart-icon'><Cart2 className='shop-cart-icon'/>Cart(0)</Link>
                    </section>
                </div>
                <div className="nav-wrap">
                    <div className="menu-wrap">
                    <input type="checkbox" className="toggler" />
                    <div className="hamburger">
                        <div></div>
                    </div>
                    <div className="menu">
                        <div>
                            <div>
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/products">Products</Link></li>
                                    <li><Link to="/cart">Cart</Link></li>
                                    <li><Link to="/contact">Contact</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    </div>
                    <p className='promo-code'>Get 15% off with code "egm15" at checkout!</p>
                </div>
            </nav>
            <form action="" className='search-form-mobile'>
                        <input className='search search-btn' type="submit" placeholder='Search' />
                        <input className='search search-box' type="text" placeholder='What are you looking for?'/>
            </form>
        </>
    )
}

export default NavBar