import {LitElement, html} from 'lit';
import {customElement, state} from 'lit/decorators.js';

import {AppStore, Store, States} from '../store';

@customElement('app-header')
export default class AppHeader extends LitElement {
  @AppStore() store!: Store;

  private _unsubscribeStates!: Unsubscriber;
  @state() states!: States;

  connectedCallback() {
    super.connectedCallback();
    this._unsubscribeStates = this.store.subscribe(
      states => (this.states = states)
    );
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this._unsubscribeStates();
  }

  render() {
    return html`
      <header>
        <div class="left"><h1>${this.states.name}</h1></div>
        <div class="right">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/chat">Chat</a></li>
            <li><a href="/account">Account</a></li>
          </ul>
        </div>
      </header>
    `;
  }
}
