import {LitElement, html} from 'lit';
import {customElement} from 'lit/decorators.js';

import '../components/header.component';

@customElement('layout-default')
export default class LayoutDefault extends LitElement {
  render() {
    return html`
      <div class="layout-default">
        <div class="header"><app-header /></div>
        <div class="page"><slot></slot></div>
      </div>
    `;
  }
}
