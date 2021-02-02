export function qs(selector) {
  return document.querySelector(selector);
}

// retrieve data from localstorage
export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
// save data to local storage
export function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}
// set a listener for both touchend and click
export function setClick(selector, callback) {
  qs(selector).addEventListener('touchend', (event) => {
    event.preventDefault();
    callback();
  });
  qs(selector).addEventListener('click', callback);
}

export function getParams(param) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  return urlParams.get(param);
}

export function renderListWithTemplate(template, parent, list, callback) {
  list.forEach(item => {
    const clone = template.content.cloneNode(true);
    const templateWithData = callback(clone, item);
    parent.appendChild(templateWithData);
  })
}

export function renderWithTemplate(template, parent, data, callback) {
  if( callback){
    const clone = template.content.cloneNode(true);
    const templateWithData = callback(clone, data);
    parent.appendChild(templateWithData);
  }
}

export async function loadTemplate(path){
  let data = await fetch(path).then(response => response.text())
  let template = document.createElement("template")
  template.innerHTML = data;
  return template;
}

export function loadHeaderFooter(){
  const template = loadTemplate(path);
  const header = document.querySelector("#main-header");
  const footer = document.querySelector("#main-footer");

}
