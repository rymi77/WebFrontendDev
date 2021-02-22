import { renderListWithTemplate, getLocalStorage, setLocalStorage } from './utils.js';

export default class CartList {
  constructor (key, listElement) {
    this.key = key;
    this.listElement = listElement;
  }

  async init() {
    
    const list = getLocalStorage(this.key);
    this.renderList(list);
    this.listElement.addEventListener('click', this.removeFromCart.bind(this));
  }
  
  removeFromCart(e) {
    let cartContents = getLocalStorage('so-cart');
    const item = e.target.dataset.id
    for(let i = 0; i < cartContents.length; i++) {
      console.log(cartContents[i]);
      if(cartContents[i].Id == item) {
          cartContents.splice(i, 1);
          break;
      }
    }
    setLocalStorage('so-cart', cartContents);
    this.renderList(cartContents);
  }

  prepareTemplate(template, product) {
    
    template.querySelector('.cart-card__image img').src =  product.Images.PrimaryMedium;
    template.querySelector('.cart-card__image img').alt += product.Name;
    template.querySelector('.card__name').textContent = product.Name;
    template.querySelector('.cart-card__color').textContent = product.Colors[0].ColorName;
    template.querySelector('.cart-card__price').textContent += product.FinalPrice; 
    template.querySelector('.removeFromCart').setAttribute('data-id', product.Id); 
    return template;
  }
  
  renderList(list) {
    // make sure the list is empty
    this.listElement.innerHTML = '';
    //get the template
    const template = document.getElementById('cart-card-template');
    renderListWithTemplate(template, this.listElement, list, this.prepareTemplate);
    const items = getLocalStorage('so-cart');
    document.getElementById("totalCartItems").innerHTML = ("Total Items: " + items.length);
  }
}