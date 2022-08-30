import { action, thunk } from "easy-peasy";
// import prodData from "./data/products.json"

export default {
    // State
    products: [],
    allProducts: [],
    selectedItem: localStorage.getItem("prodID") || 8,
    // Thunk
    getData: thunk(async actions => {
        const res = await fetch("http://localhost:8080/api/all-products");

        const data = await res.json();
        console.log(data)
        actions.initData(data)
    }),
    // Actions
    initData: action ((state, data) => {
        state.allProducts = data
        state.products = data
    }),
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