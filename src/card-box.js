import { LitElement, html, css } from 'lit-element';
import { estilosCompartidos } from './estilos-compartidos';

class CardBox extends LitElement {

    static get styles() {
        return [estilosCompartidos, css`
        :host {
            display: block;
            border: 1px solid #ddd;
            margin-bottom: 15px;
        }
        :host([hidden]) {
            display: none;
        }
        :host(.red) {
            border-color: red;
        }
        :host(.red) span {
            color: red;
        }
        `];
    }

    render() {
        return html`
        <slot></slot>
        <span>cerrar</span>
        `;
    }
}
customElements.define('card-box', CardBox);