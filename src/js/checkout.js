import { loadHeaderFooter } from './utils.js';
import CheckoutProcess from './CheckoutProcess.js';

loadHeaderFooter();

const myCheckout = new CheckoutProcess('so-cart', '.checkout-summary');
myCheckout.init();

document
  .querySelector('#zip')
  .addEventListener('blur', myCheckout.calculateOrdertotal.bind(myCheckout));

document.querySelector('#checkoutSubmit')
  .addEventListener('click', (e) => {
    e.preventDefault();
    let myForm = document.forms[0];
    let chk_status = myForm.checkValidity();
    myForm.reportValidity();
    if(chk_status) 
      myCheckout.checkout();
  });