import {LitElement, html} from 'lit';
import {customElement} from 'lit/decorators.js';

@customElement('page-chat')
export class PageChat extends LitElement {
  render() {
    return html`<h1>Chat home!</h1>`;
  }
}
