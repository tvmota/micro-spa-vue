class MyComponent extends HTMLElement{
  connectedCallback() {
    this.innerHTML = `<h1>Web component</h1>`;
  }
}

customElements.define('test-my-component', MyComponent);