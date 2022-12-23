import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('app-header')
export default class AppHeader extends LitElement {
  @property() name = 'Foobutt';

  render() {
    return html`<p>App header!</p>`;
  }
}
