import React from 'react'
import "./productCard.css"

function ProductCard({title, image, id, desc, price, category}) {
  return (
    <div key={id} id={`product-${id}`} className={`prod-card ${category}`}>
        <img className="prod-img" src={image} alt={title}/>
        <h1 className='title'>{title}</h1>
        <h3>${price}.00</h3>
        <button className='prod-btn' onClick={() => console.log("you clicked btn")}>View Item</button>
    </div>
  )
}

export default ProductCard