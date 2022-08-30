import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { useStoreState, useStoreActions } from "easy-peasy"
import "./navBar.css"
import { Cart2 } from 'react-bootstrap-icons';


function NavBar() {
    const getData = useStoreActions(actions => actions.getData)
    useEffect(() => {
        console.log("fetching data")
        getData();
        //eslint-disable-next-line
    }, [])
    const [userSearch, updateUserSearch] = useState("");
    const filterItems = useStoreActions(actions => actions.filterItems)
    const resetFilter = useStoreActions(actions => actions.resetFilter)
    const nav = useNavigate();

    const handleChange = (event) => {
        updateUserSearch(event.target.value)
    }

    const searchProd = (e) => {
        e.preventDefault();
        resetFilter()
        filterItems(userSearch)
        localStorage.setItem("searchParam", userSearch)
        let path = `../products`;
        let currentPath = window.location.pathname;
        if (currentPath === "/products") {
            console.log("Already on prod page");
        } else {
            console.log(path);
            nav(path, { replace: true });
        }
    }


    return (
        <>
            <nav className='nav-bar'>
                <div className="icon-wrapper">
                    <Link to="/" className='egm-icon'></Link>
                    <section className='right-nav'>
                        <form onSubmit={searchProd} className='search-form-dt'>
                            <input className='search search-btn' type="submit" placeholder='Search' />
                            <input className='search search-box' type="text" placeholder='What are you looking for?' onChange={handleChange} />
                        </form>
                        <Link to="/cart" className='cart-icon'><Cart2 className='shop-cart-icon' />Cart(0)</Link>
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
            <form onSubmit={searchProd} className='search-form-mobile'>
                <input className='search search-btn' type="submit" placeholder='Search' />
                <input className='search search-box' type="text" placeholder='What are you looking for?' onChange={handleChange} />
            </form>
        </>
    )
}

export default NavBar