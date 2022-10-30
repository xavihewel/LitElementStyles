import { LitElement, html, css } from 'lit-element';
import { estilosCompartidos } from './estilos-compartidos';

class CardBox extends LitElement {

    static get styles() {
        return [estilosCompartidos, css`
        div {
            border: 1px solid #ddd;
        }
        `];
    }

    render() {
        return html`
        <div><slot></slot></div>
        `;
    }
}
customElements.define('card-box', CardBox);