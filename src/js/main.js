import ExternalServices from "./ExternalServices.js";
import ProductList from "./productList.js";
import { loadHeaderFooter } from "./utils.js";

loadHeaderFooter();

const dataSource = new ExternalServices("tents");
const listElements = document.querySelector(".product-list");
const productList = new ProductList("tents", listElements, dataSource);
productList.init();