import {LitElement, html} from 'lit';
import {customElement} from 'lit/decorators.js';

import {store, CHANGE_NAME} from '../store';

@customElement('page-home')
export class PageHome extends LitElement {
  changeName() {
    store.commit(CHANGE_NAME, 'Foobutt ' + Math.round(Math.random() * 100));
  }

  render() {
    return html`
      <h1>Home page!</h1>
      <div>
        <button @click="${this.changeName}">Change name</button>
      </div>
    `;
  }
}
