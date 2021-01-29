import ProductData from "./productData.js"
import ProductList from "./productList.js"

const dataSource = new ProductData("tents");
const listElements = document.querySelector(".product-list");
const productList = new ProductList("tents", listElements, dataSource);
productList.init();
