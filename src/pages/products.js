import React from 'react'
import NavBar from '../components/navBar/NavBar'
import "../Main.css"
import { useStoreState } from "easy-peasy"
import ProductCard from '../components/productCard/ProductCard';
import Footer from "../components/footer/Footer"

function products() {
  const items = useStoreState(state => state.products);
  console.log(items);
  return (
    <>
      <NavBar />
      <img className="prod-hero-dt" src="/images/home-imgs/EGM-Long-Logo-Slap-HKS.png" alt='EGM logo' />
      <div className="prod-hero-mobile"></div>
      <div className="prod-page-grid">
        <aside className='filter-container'>
            <div className='filter-options'>
              <label htmlFor="type">Filter by type:</label>
              <select name="type" id="fbt">
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
                <option value="alphabetical">Alphabetical</option>
                <option value="type">Type</option>
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
              desc={item.desc}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default products