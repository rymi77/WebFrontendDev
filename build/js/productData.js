function convertToJson(t) {
    if (t.ok) return t.json();
    throw new Error("Bad Response");
}

function getProductsData() {
    fetch("../json/tents.json")
      .then(convertToJson)
      .then((t) => {
        products = t;
    });
}