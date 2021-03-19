class Card extends HTMLElement {
  constructor() { 
    super();

    this.innerHTML = `${this.getAttribute('name')}`;
  }
}

window.customElements.define('card-component', Card);