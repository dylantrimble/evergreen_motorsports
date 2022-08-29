// import { thunk } from "easy-peasy";
import { action } from "easy-peasy";
import prodData from "./data/products.json"

export default {
    // State
    products: prodData,
    allProducts: prodData,
    selectedItem: localStorage.getItem("prodID") || 8,
    // Thunk
    // Actions
    selectItem: action((state, id) => {
        state.selectedItem = id;
    }),
    filterItems: action((state, param) => {
        state.products = state.products.filter(item => item.category.toLowerCase() === param.toLowerCase());
    }),
    resetFilter: action(state => {
        state.products = state.allProducts
    })
};