import {Route} from '@vaadin/router';

const routes: Route[] = [
  {
    path: '',
    component: 'layout-default',
    children: [
      {
        path: '',
        component: 'page-home',
      },
    ],
  },
  {
    path: 'account',
    component: 'layout-default',
    children: [
      {
        path: '',
        component: 'page-me',
        action: async () => {
          await import('./pages/me.page');
        },
      },
    ],
  },
  {
    path: 'chat',
    component: 'layout-default',
    children: [
      {
        path: '',
        component: 'page-chat',
        action: async () => {
          await import('./pages/chat.page');
        },
      },
    ],
  },
  {
    path: '(.*)',
    component: 'page-404',
  },
];

export default routes;
