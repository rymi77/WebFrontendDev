class ProductData{
    convertToJson(t) {
        if (t.ok) return t.json();
        throw new Error("Bad Response");
    }
    
    getProductsData() {
        fetch("../json/tents.json")
          .then(convertToJson)
          .then((t) => {
            products = t;
        });
    }

    findProductById(t){
        const e = products.find((n) => n.Id === t.target.dataset.id);
    }
}
export default ProductData;

