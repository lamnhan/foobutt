import {LitElement, html} from 'lit';
import {customElement, state} from 'lit/decorators.js';

import {store, States} from '../store';

@customElement('app-header')
export default class AppHeader extends LitElement {
  @state() states!: States;
  private _unsubscribeStates!: Unsubscriber;

  connectedCallback() {
    super.connectedCallback();
    this.onConnected();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.onDisconnected();
  }

  constructor() {
    super();
  }

  onConnected() {
    this._unsubscribeStates = store.subscribe(states => (this.states = states));
  }

  onDisconnected() {
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
