import React from 'react'
import "./productCard.css"


function ProductCard({title, image, id, desc, price, category, style}) {
    let shortDesc = [];
    const shrinkDesc = item => {
        shortDesc =[]
        if (item.length < 70){
            return item;
        }else{
            for(let i = 0; i < 70; i++){
                shortDesc.push(item[i]);
            }
            return shortDesc.join("") + "...";
        }
    }

    // console.log(shrinkDesc(desc));
  return (
    <div key={id} id={`product-${id}`} className={`prod-card ${category} ${style}`}>
        <div className="overlay"></div>
        <img className="prod-img" src={image} alt={title}/>
        <h2 className='title'>{title}</h2>
        <p className='prod-price'>${price}.00</p>
        <p className='prod-desc'>{shrinkDesc(desc)}</p>
        <button className='prod-btn' onClick={() => console.log("you clicked btn")}>View Item</button>
    </div>
  )
}

export default ProductCard