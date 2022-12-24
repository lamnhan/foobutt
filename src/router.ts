import {Router, Route} from '@vaadin/router';

export const router = new Router();

export function registerRoutes(outlet: HTMLElement, routes: Route[]) {
  router.setOutlet(outlet);
  router.setRoutes(routes);
  return router;
}

export {Router};
