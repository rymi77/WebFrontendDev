export default class ProductList {

    constructor(category, listElements, dataSource){
        this.listElements = listElements;
        this.category = category;
        this.dataSource = dataSource;

    }

    async init(){
        const list = await this.dataSource.getData();
        this.renderList(list);
    }

    renderList(list) {

        template = document.getElementById("product-card-template");

        list.forEach(product => {
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
       template.querySelector(".card__name").textContent = product.NameWithoutBrand;
       template.querySelector(".product-card__price").textContent = product.FinalPrice;    
       return template; 


    }

}