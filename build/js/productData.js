}
function getProductsData() {
    fetch("../json/tents.json")
      .then(convertToJson)
      .then((t) => {
        products = t;
    });
}