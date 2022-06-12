import React, {useState} from 'react'
import NavBar from '../components/navBar/NavBar'
import { useStoreState } from "easy-peasy"
import Footer from "../components/footer/Footer"

function productInfo() {
    const id = useStoreState(state => state.selectedItem);
    const items = useStoreState(state => state.products);
    const [featuredImg, updateFeaturedImg] = useState(items[id].image);

    const renderWheelsOption = () => {
        return(
            <form className='product-options'>
                <label htmlFor="size" className='opts-lab'>Select Size :</label>
                <select name="size" id="wheel-size" className='opts'>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                </select>
                <label htmlFor="bolts" className='opts-lab'>Select Bolt Pattern :</label>
                <select name="bolts" id="prod-bolts" className='opts'>
                    <option value="5x114.3">5x114.3</option>
                    <option value="5x120">5x120</option>
                    <option value="5x100">5x100</option>
                    <option value="4x114.3">4x114.3</option>
                </select>
                <label htmlFor="color" className='opts-lab'>Select Color :</label>
                <select name="color" id="prod-color" className='opts'>
                    <option value="white">White Face, Chrome Lip</option>
                    <option value="machine">Machine Face, Chrome Lip</option>
                    <option value="gold">Gold Face, Chrome Lip</option>
                    <option value="blackBronze">Black Face, Bronze Lip</option>
                </select>
                <label htmlFor="quantity" min="0" max="8" className='opts-lab'>Quantity <i>*price is per wheel*</i> :</label>
                <input type="number" id="quantity" name="quantity" className='opts' />
            </form>
        )
    }

    const renderSeatOption = () => {
        return (
            <form className='product-options'>
                <label htmlFor="size" className='opts-lab'>Select Size :</label>
                <select name="size" id="wheel-size" className='opts'>
                    <option value="Med">Medium</option>
                    <option value="Lrg">Large</option>
                </select>
                <label htmlFor="brackets" className='opts-lab'>Select Brackets :</label>
                <select name="brackets" id="prod-bolts" className='opts'>
                    <option value="floor">Floor Mount</option>
                    <option value="slider">Slider</option>
                    <option value="fixed">Fixed</option>
                </select>
                <label htmlFor="quantity" min="0" max="8" className='opts-lab'>Quantity <i>*price is per seat*</i> :</label>
                <input type="number" id="quantity" name="quantity" className='opts' />
            </form>
        )
    }

    const renderSuspension = () => {
        return(
            <form className='product-options'>
                <label htmlFor="type" className='opts-lab'>Select type :</label>
                <select name="type" id="wheel-size" className='opts'>
                    <option value="reg">Regular</option>
                    <option value="super">Super Low</option>
                </select>
                <label htmlFor="spring-f" className='opts-lab'>Select spring rate front :</label>
                <select name="spring-f" id="prod-bolts" className='opts'>
                    <option value="6">6kg </option>
                    <option value="7">7kg</option>
                    <option value="8">8kg</option>
                    <option value="9">9kg </option>
                    <option value="10">10kg</option>
                    <option value="11">11kg</option>
                    <option value="12">12kg</option>
                </select>
                <label htmlFor="spring-f" className='opts-lab'>Select spring rate rear :</label>
                <select name="spring-r" id="prod-bolts" className='opts'>
                    <option value="4.5">4.5kg </option>
                    <option value="5">5kg</option>
                    <option value="6">6kg</option>
                    <option value="7">7kg </option>
                    <option value="8">8kg</option>
                    <option value="9">9kg</option>
                    <option value="10">10kg</option>
                </select>
                <label htmlFor="quantity" min="0" max="8" className='opts-lab'>Quantity <i>*price is for set of 4*</i> :</label>
                <input type="number" id="quantity" name="quantity" className='opts' />
            </form>
        )
    }

    const renderStickers = () => {
        return (
            <form className='product-options'>
            <label htmlFor="type" className='opts-lab'>Select type :</label>
            <select name="type" id="wheel-size" className='opts'>
                <option value="gloss">Gloss</option>
                <option value="matte">Matte</option>
            </select>
            <label htmlFor="size" className='opts-lab'>Select Size :</label>
            <select name="size" id="prod-bolts" className='opts'>
                <option value="small">small</option>
                <option value="medium">medium</option>
                <option value="large">large</option>
            </select>
            <label htmlFor="quantity" min="0" max="8" className='opts-lab'>Quantity <i>*price is for single sticker*</i> :</label>
            <input type="number" id="quantity" name="quantity" className='opts' />
        </form>  
        )
    }

    return (
        <>
            <NavBar />
            <div className="product-info-container">
                <div className="pi-images-cont">
                    <div className="showcase-img">
                        <img src={featuredImg} alt={items[id].title} />
                    </div>
                    <div className="img-choices">
                        <img src={items[id].image} alt={items[id].title} onClick={e => updateFeaturedImg(e.target.src)}/>
                        <img src={items[id].alt_img} alt={items[id].title} onClick={e => updateFeaturedImg(e.target.src)}/>
                    </div>
                </div>
                <div className="options-container">
                    <h1>{items[id].title}</h1>
                    <h3>${items[id].price}.00</h3>
                    {items[id].category === "Wheels" ? renderWheelsOption() : console.log("Not wheels")}
                    {items[id].category === "Suspension" ? renderSuspension() : console.log("Not Suspension")}
                    {items[id].category === "Seats" ? renderSeatOption() : console.log("Not Seats")}
                    {items[id].category === "Stickers" ? renderStickers() : console.log("Not Stickers")}
                    <button className='add2cart-btn'>Add to cart</button>
                    <p>{items[id].desc}</p>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default productInfo