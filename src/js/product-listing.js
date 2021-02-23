import ExternalServices from "./ExternalServices.js";
import ProductList from "./productList.js";
import { loadHeaderFooter, getParams } from "./utils.js";

loadHeaderFooter();

const category = getParams('category');
const dataSource = new ExternalServices();
const listElements = document.querySelector(".product-list");
const productList = new ProductList(category, listElements, dataSource);
productList.init();




