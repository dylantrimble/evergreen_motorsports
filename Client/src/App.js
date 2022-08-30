import './Main.css';
import React, { useEffect } from 'react'
import NavBar from './components/navBar/NavBar'
import HeroCarousel from './components/heroCarousel/HeroCarousel';
import { useStoreState, useStoreActions } from "easy-peasy"
import ProductCard from './components/productCard/ProductCard';
import FeatureAdd from './components/featureAdd/FeatureAdd';
import Footer from './components/footer/Footer';

function App() {
  const getData = useStoreActions(actions => actions.getData)
  useEffect(() => {
    console.log("fetching data")
    getData();
    //eslint-disable-next-line
  },[])
  const items = useStoreState(state => state.allProducts);


  const featuredItemsRender = item => {
    if (item.featured) {
      return (
        <ProductCard
          title={item.title}
          image={item.image}
          id={item.id}
          price={item.price}
          category={item.category}
          prod_desc={item.prod_desc}
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
      <FeatureAdd />
      <Footer />
    </>
  );
}

export default App;
