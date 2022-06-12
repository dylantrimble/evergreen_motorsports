import React, { useState, useEffect } from 'react'
import "./productCard.css"
import { useStoreActions, useStoreState } from 'easy-peasy'
import { useNavigate } from "react-router-dom";


function ProductCard({title, image, id, desc, price, category, style}) {
    const selectProduct = useStoreActions(actions => actions.selectItem)
    const selectedItem = useStoreState(state => state.selectedItem)
    const [click, updateClick] = useState(false)
    let navigate = useNavigate()

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

    const handleClick = (e) => {
        e.preventDefault();
        console.log(id)
        selectProduct(id)
        updateClick(!click);
        navigate('../productInfo')
        console.log(selectedItem)
    }

    // useEffect(navigate('../productInfo'), [click])

    // console.log(id);
    console.log(selectedItem)
  return (
    <div key={id} id={`product-${id}`} className={`prod-card ${category} ${style}`}>
        <div className="overlay"></div>
        <img className="prod-img" src={image} alt={title}/>
        <h2 className='title'>{title}</h2>
        <p className='prod-price'>${price}.00</p>
        <p className='prod-desc'>{shrinkDesc(desc)}</p>
        <button className='prod-btn' onClick={e => handleClick(e)}>View Item</button>
    </div>
  )
}

export default ProductCard