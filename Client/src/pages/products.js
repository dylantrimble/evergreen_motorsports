import React, { useState, useEffect } from 'react'
import NavBar from '../components/navBar/NavBar'
import "../Main.css"
import { useStoreState, useStoreActions } from "easy-peasy"
import ProductCard from '../components/productCard/ProductCard';
import Footer from "../components/footer/Footer"
import { Search } from 'react-bootstrap-icons';


function products() {


  const items = useStoreState(state => state.products);
  const resetFilter = useStoreActions(actions => actions.resetFilter);
  const filterItems = useStoreActions(actions => actions.filterItems)
  // const [curentPath, updateCurrentPath] = useState(window.location.pathname)
  const [filter, updateFilter] = useState("")
  // Search Filter
  const [param, updateParam] = useState(localStorage.getItem("searchParam"));
  // Reset Search bar filter
  useEffect(() => {
    resetFilter()
    if (param === "" && filter === "") {
      resetFilter()
      console.log(param)
    }else if(filter === "") {
      resetFilter();
    }else if (filter !== "") {
      resetFilter();
      localStorage.setItem("searchParam", "")
      filterItems(filter)
    }else if(param !== "") {
      console.log("param not empty", param)
      localStorage.setItem("searchParam", "")
    }else {
      resetFilter();
      console.log(param)
    }
    // console.log("new param", param)
  }, [filter, param])

  // Button filter
  const filterOption = (event) => {
    console.log(event.target.value)
    updateFilter(event.target.value)
  }

  return (
    <>
      <NavBar />
      <img className="prod-hero-dt" src="/images/home-imgs/EGM-Long-Logo-Slap-HKS.png" alt='EGM logo' />
      <div className="prod-hero-mobile"></div>
      <div className="prod-page-grid">
        <aside className='filter-container'>
          <div className='filter-options'>
            <label htmlFor="type">Filter by type:</label>
            <select name="type" id="fbt" onChange={filterOption}>
              <option value="">All</option>
              <option value="wheels">Wheels</option>
              <option value="seats">Seats</option>
              <option value="suspension">Suspension</option>
              <option value="stickers">Stickers</option>
            </select>
          </div>
          <div className='sort-options'>
            <label htmlFor="type">Sort:</label>
            <select name="type" id="fbt">
              <option value="ascending">Price (high to low)</option>
              <option value="decending">Price (low to high)</option>
              <option value="reset">Reset</option>
            </select>
          </div>
        </aside>
        <div className="prod-container">
          {items.map(item => (
            <ProductCard
              title={item.title}
              image={item.image}
              id={item.id}
              price={item.price}
              category={item.category}
              prod_desc={item.prod_desc}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default products