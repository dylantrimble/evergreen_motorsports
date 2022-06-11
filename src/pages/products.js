import React from 'react'
import NavBar from '../components/navBar/NavBar'
import "../Main.css"
import { useStoreState } from "easy-peasy"
import ProductCard from '../components/productCard/ProductCard';
import Footer from "../components/footer/Footer"

function products() {
  const items = useStoreState(state => state.products);
  // console.log(items);
  return (
    <>
      <NavBar/>
      <img className="prod-hero-dt" src="/images/home-imgs/EGM-Long-Logo-Slap-HKS.png" alt='EGM logo'/>
      <div className="prod-hero-mobile"></div>
      <div className="prod-container">
        {items.map(item => (
          <ProductCard
          title={item.title}
          image = {item.image}
          id = {item.id}
          price = {item.price}
          category = {item.category}
          desc = {item.desc}
          />
        ))}
      </div>
      <Footer/>
    </>
  )
}

export default products