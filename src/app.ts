import {LitElement, html} from 'lit';
import {customElement, query} from 'lit/decorators.js';
import {registerRoutes, Router} from './router';
import {store, Store} from './store';

import routes from './routes';

import './layouts/default.layout';

import './pages/home.page';
import './pages/404.page';

@customElement('app-root')
export class AppRoot extends LitElement {
  @query('#router-outlet') private _routerOutlet!: HTMLElement;

  connectedCallback() {
    super.connectedCallback();
    setTimeout(() => this.initApp(), 0);
  }

  router!: Router;
  store!: Store;

  constructor() {
    super(); // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (document as any).__tini_app__ = this;
    window.addEventListener('load', e => this.onLoaded(e));
  }

  initApp() {
    this.setupRouter();
    this.setupStore();
  }

  onLoaded(e: Event) {
    // ...
  }

  render() {
    return html`<div id="router-outlet"></div>`;
  }

  private setupRouter() {
    this.router = registerRoutes(this._routerOutlet, routes);
  }

  private setupStore() {
    this.store = store;
  }
}
