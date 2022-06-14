// import { thunk } from "easy-peasy";
import { action } from "easy-peasy";
import prodData from "./data/products.json"

export default {
    // State
    products: prodData,
    selectedItem: localStorage.getItem("prodID") || 8,
    // Thunk
    // Actions
    selectItem: action((state, id) => {
        state.selectedItem = id;
    }),
};