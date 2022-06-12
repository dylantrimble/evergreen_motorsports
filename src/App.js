import './Main.css';
import React from 'react'
import NavBar from './components/navBar/NavBar'
import HeroCarousel from './components/heroCarousel/HeroCarousel';
import { useStoreState } from "easy-peasy"
import ProductCard from './components/productCard/ProductCard';
import FeatureAdd from './components/featureAdd/FeatureAdd';
import Footer from './components/footer/Footer';

function App() {
  const items = useStoreState(state => state.products);

  const featuredItemsRender = item => {
    if (item.featured) {
      return (
        <ProductCard
          title={item.title}
          image={item.image}
          id={item.id}
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
    <>
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
      <FeatureAdd/>
      <Footer/>
    </>
  );
}

export default App;
