import './Main.css';
import React from 'react'
import NavBar from './components/navBar/NavBar'
import HeroCarousel from './components/heroCarousel/HeroCarousel';
import { useStoreState } from "easy-peasy"
import ProductCard from './components/productCard/ProductCard';

function App() {
  const items = useStoreState(state => state.products);

  const featuredItemsRender = item => {
    if (item.featured) {
      return (
        <ProductCard
          title={item.title}
          image={item.image}
          key={item.id}
          price={item.price}
          category={item.category}
          desc={item.desc}
          // eslint-disable-next-line
          style={'home-prod'}
        />
      )
    }
  }
  return (
    <div className="App">
      <NavBar />
      <HeroCarousel />

      <div className='featured-products'>
        <h1>Featured Products</h1>
        <div className="feature-cont">

          {items.map(item => (
            featuredItemsRender(item)
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
