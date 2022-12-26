import {LitElement, html} from 'lit';
import {customElement, query} from 'lit/decorators.js';

import {AppService} from './services/app.service';
import {SettingService} from './services/setting.service';

import {registerRoutes, Router} from './router';
import {loadStore, Store} from './store';

import routes from './routes';
import configs from './configs/development';

import './layouts/default.layout';
import './pages/home.page';
import './pages/404.page';

declare global {
  interface HTMLElementTagNameMap {
    'app-root': AppRoot;
  }
}

@customElement('app-root')
export class AppRoot extends LitElement {
  @query('#router-outlet') private _routerOutlet!: HTMLElement;

  configs = configs;
  router!: Router;
  store!: Store;

  appService = new AppService();
  settingService = new SettingService();

  constructor() {
    super();
    window.addEventListener('load', e => this.onLoaded(e));
  }

  connectedCallback() {
    super.connectedCallback();
    setTimeout(() => this.initApp(), 0);
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
    this.store = loadStore();
  }
}

export function App() {
  return function (target: any, propertyKey: string) {
    Reflect.defineProperty(target, propertyKey, {
      get: () => document.querySelector('app-root'),
    });
  };
}

export function AppConfigs() {
  return function (target: any, propertyKey: string) {
    Reflect.defineProperty(target, propertyKey, {
      get: () => document.querySelector('app-root')?.configs,
    });
  };
}

export function Service(name?: string) {
  return function (target: any, propertyKey: string) {
    const instanceName = (
      name ? name[0].toLowerCase() + name.substring(1) : propertyKey
    ) as keyof AppRoot;
    Reflect.defineProperty(target, propertyKey, {
      get: () => document.querySelector('app-root')?.[instanceName],
    });
  };
}
