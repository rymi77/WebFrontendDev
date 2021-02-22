
import ExternalServices from './ExternalServices.js';
import {getParams} from "./utils.js";
import ProductDetails from './productDetails.js';

const productId = getParam('product');
const dataSource = new ExternalServices('tents');

const product = new ProductDetails(productId, dataSource);
product.init();