export default class ProductList {

    constructor(category, listElements, dataSource){
        this.listElements = listElements;
        this.category = category;
        this.dataSource = dataSource;

        const list = await this.dataSource.getData();

        this.renderList(list);
    }

    renderList(productList) {

        template = document.getElementById("product-card-template");

        productList.forEach(product => {
            const clone = template.content.cloneNode(true);
            const hydratedTemplate = this.prepareTemplate(clone, product);
            this.listElement.appendChild(hydratedTemplate);

            
        });



    }

    prepareTemplate(template, product) {

       template.querySelector("a").href += product.Id;
       template.querySelector("img").src = product.Image;
       template.querySelector("img").alt += product.Name;
       template.querySelector(".card__brand").textContent = product.Brand;
       template.querySelector(".card__name").textContent = product.Name;
       template.querySelector(".product-card__price").textContent = product.ListPrice;     


    }

}
/*
<template id="product-card-template">
      <li class="product-card">
        <a href="product_pages/product-details.html?product=">
        <img
          src=""
          alt="Image of "
        />
        <h3 class="card__brand"></h3>
        <h2 class="card__name"></h2>
        <p class="product-card__price">$</p></a>
      </li>
    </template>
    */