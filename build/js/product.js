import "/productData.js";

import {getParams} from "./utils.js";

let products = [];
function convertToJson(t) {
  if (t.ok) return t.json();
  throw new Error("Bad Response");
}
function setLocalStorage(t, e) {
  localStorage.setItem(t, JSON.stringify(e));
}
function getProductsData() {
  fetch("../json/tents.json")
    .then(convertToJson)
    .then((t) => {
      products = t;
    });
}
function addToCart(t) {
  const e = products.find((n) => n.Id === t.target.dataset.id);
  setLocalStorage("so-cart", e);
}
getProductsData();
  document.getElementById("addToCart").addEventListener("click", addToCart);
