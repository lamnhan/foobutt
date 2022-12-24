import {LitElement, html} from 'lit';
import {customElement} from 'lit/decorators.js';

@customElement('page-404')
export class Page404 extends LitElement {
  render() {
    return html`<h1>Oops, nothing here to see 🫣</h1>`;
  }
}
