import {LitElement, html} from 'lit';
import {customElement, state} from 'lit/decorators.js';

import {AppStore, Store, CHANGE_NAME, States} from '../store';
import {Service} from '../app';

import {AppService} from '../services/app.service';

@customElement('page-home')
export class PageHome extends LitElement {
  @AppStore() store!: Store;
  @state() states!: States;

  @Service() appService!: AppService;

  connectedCallback(): void {
    super.connectedCallback();
    this.store.subscribe(states => (this.states = states));
  }

  changeName() {
    this.store.commit(
      CHANGE_NAME,
      'Foobutt ' + Math.round(Math.random() * 100)
    );
  }

  render() {
    return html`
      <h1>Home page!</h1>
      <div>
        <button @click="${this.changeName}">
          Change name (${this.states.name})
        </button>
      </div>
    `;
  }
}
