class CardComponent extends HTMLElement {

    static get observedAttributes() {
        return ['img','tittle', 'text', 'review', 'price','state'];
    }

    constructor(){
        super();
    };

    attributeChangedCallback(name, oldValue, newValue) {
        if(oldValue !== newValue)
            name.this;

}

customElements.define("card-component", CardComponent)