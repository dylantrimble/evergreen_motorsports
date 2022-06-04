import React from 'react'
import NavBar from '../components/navBar/NavBar'
import "../Main.css"
import { useStoreState } from "easy-peasy"
import ProductCard from '../components/productCard/ProductCard';

function products() {
  const items = useStoreState(state => state.products);
  console.log(items);
  return (
    <>
      <NavBar/>
      <img className="prod-hero" src="/images/home-imgs/EGM-Long-Logo-Slap-HKS.png"/>
      <div className="prod-container">
        {items.map(item => (
          <ProductCard
          title={item.title}
          image = {item.image}
          key = {item.id}
          price = {item.price}
          category = {item.category}
          desc = {item.desc}
          />
        ))}
      </div>
    </>
  )
}

export default products