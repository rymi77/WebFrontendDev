const baseURL = 'http://157.201.228.93:2992/'

async function convertToJson(res) {
  const data = await res.json();
  if (res.ok) {
    return data;
  } else{
    let jsonResponse = JSON.stringify(data)
    throw { name: 'servicesError', message: jsonResponse };
  }
}

class ExteralServices{
  constructor() {
  }
  
  getData(category) {
    return fetch(baseURL + `products/search/${category}`)
    .then(convertToJson).then((data) => data.Result);
    }

  async findProductById(id) {
    return fetch(baseURL + `product/${id}`)
    .then(convertToJson).then((data) => data.Result);
  }
  async checkout(payload) {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    };
    return await fetch(baseURL + 'checkout/', options).then(convertToJson);
  }
}
export default ExteralServices;
