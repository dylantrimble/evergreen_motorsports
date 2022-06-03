import './Main.css';
import React from 'react'
import NavBar from './components/navBar/NavBar'
import HeroCarousel from './components/heroCarousel/HeroCarousel';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <HeroCarousel/>
      <div>App</div>
    </div>
  );
}

export default App;
