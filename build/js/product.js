import ProductData from './productData.js';
import {getParams} from "./utils.js";
import ProductDetails from './productDetails.js';

const productId = getParam('product');
const dataSource = new ProductData('tents');

const product = new ProductDetails(productId, dataSource);
product.init();
