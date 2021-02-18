const baseURL = 'http://157.201.228.93:2992/'

function convertToJson(t) {
    if (t.ok) {
      return t.json();
    } else{
      throw new Error("Bad Response");
    }
}

class ProductData{
    constructor(category) {
    }
    
    getData(category) {
      return fetch(baseURL + `products/search/${category}`)
      .then(convertToJson).then((data) => data.Result);
      }

    async findProductById(id) {
      
      
      return fetch(baseURL + `product/${id}`)
      .then(convertToJson).then((data) => data.Result);
      
    }
}
export default ProductData;
