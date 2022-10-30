import { LitElement, html, css } from 'lit-element';
import { estilosCompartidos } from './estilos-compartidos';

class CardBox extends LitElement {

    static get styles() {
        return [estilosCompartidos, css`
        :host {
            display: block;
            border: 1px solid #ddd;
        }
        `];
    }

    render() {
        return html`
        <slot></slot>
        `;
    }
}
customElements.define('card-box', CardBox);