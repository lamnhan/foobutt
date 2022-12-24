import {LitElement, html} from 'lit';
import {customElement} from 'lit/decorators.js';

@customElement('page-me')
export class PageMe extends LitElement {
  render() {
    return html`<h1>My account!</h1>`;
  }
}
