import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/lib/renderRoutes';
import history from '@tmp/history';
import RendererWrapper0 from '/Users/chenyin/WebstormProjects/marble/src/pages/.umi/LocaleWrapper.jsx';
import _dvaDynamic from 'dva/dynamic';

const Router = require('dva/router').routerRedux.ConnectedRouter;

const routes = [
  {
    path: '/user',
    component: __IS_BROWSER
      ? _dvaDynamic({
          component: () => import('../../layouts/UserLayout'),
          LoadingComponent: require('/Users/chenyin/WebstormProjects/marble/src/components/PageLoading/index')
            .default,
        })
      : require('../../layouts/UserLayout').default,
    routes: [
      {
        path: '/user',
        redirect: '/user/login',
        exact: true,
      },
      {
        path: '/user/login',
        component: __IS_BROWSER
          ? _dvaDynamic({
              app: require('@tmp/dva').getApp(),
              models: () => [
                import('/Users/chenyin/WebstormProjects/marble/src/pages/User/models/register.js').then(
                  m => {
                    return { namespace: 'register', ...m.default };
                  },
                ),
              ],
              component: () => import('../User/Login'),
              LoadingComponent: require('/Users/chenyin/WebstormProjects/marble/src/components/PageLoading/index')
                .default,
            })
          : require('../User/Login').default,
        exact: true,
      },
      {
        path: '/user/register',
        component: __IS_BROWSER
          ? _dvaDynamic({
              app: require('@tmp/dva').getApp(),
              models: () => [
                import('/Users/chenyin/WebstormProjects/marble/src/pages/User/models/register.js').then(
                  m => {
                    return { namespace: 'register', ...m.default };
                  },
                ),
              ],
              component: () => import('../User/Register'),
              LoadingComponent: require('/Users/chenyin/WebstormProjects/marble/src/components/PageLoading/index')
                .default,
            })
          : require('../User/Register').default,
        exact: true,
      },
      {
        path: '/user/register-result',
        component: __IS_BROWSER
          ? _dvaDynamic({
              app: require('@tmp/dva').getApp(),
              models: () => [
                import('/Users/chenyin/WebstormProjects/marble/src/pages/User/models/register.js').then(
                  m => {
                    return { namespace: 'register', ...m.default };
                  },
                ),
              ],
              component: () => import('../User/RegisterResult'),
              LoadingComponent: require('/Users/chenyin/WebstormProjects/marble/src/components/PageLoading/index')
                .default,
            })
          : require('../User/RegisterResult').default,
        exact: true,
      },
      {
        component: () =>
          React.createElement(
            require('/Users/chenyin/WebstormProjects/marble/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
              .default,
            { pagesPath: 'src/pages', hasRoutesInConfig: true },
          ),
      },
    ],
  },
  {
    path: '/',
    component: __IS_BROWSER
      ? _dvaDynamic({
          component: () => import('../../layouts/BasicLayout'),
          LoadingComponent: require('/Users/chenyin/WebstormProjects/marble/src/components/PageLoading/index')
            .default,
        })
      : require('../../layouts/BasicLayout').default,
    Routes: [require('../Authorized').default],
    authority: ['admin', 'user'],
    routes: [
      {
        path: '/',
        redirect: '/dashboard/workspace',
        exact: true,
      },
      {
        path: '/dashboard',
        name: 'dashboard',
        icon: 'dashboard',
        routes: [
          {
            path: '/dashboard/workspace',
            name: 'workspace',
            component: __IS_BROWSER
              ? _dvaDynamic({
                  component: () => import('../Dashboard/Workspace'),
                  LoadingComponent: require('/Users/chenyin/WebstormProjects/marble/src/components/PageLoading/index')
                    .default,
                })
              : require('../Dashboard/Workspace').default,
            exact: true,
          },
          {
            component: () =>
              React.createElement(
                require('/Users/chenyin/WebstormProjects/marble/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
                  .default,
                { pagesPath: 'src/pages', hasRoutesInConfig: true },
              ),
          },
        ],
      },
      {
        path: '/sample',
        name: 'sample',
        icon: 'compass',
        routes: [
          {
            path: '/sample/list',
            name: 'list',
            component: __IS_BROWSER
              ? _dvaDynamic({
                  app: require('@tmp/dva').getApp(),
                  models: () => [
                    import('/Users/chenyin/WebstormProjects/marble/src/pages/Sample/models/sample.js').then(
                      m => {
                        return { namespace: 'sample', ...m.default };
                      },
                    ),
                  ],
                  component: () => import('../Sample/SampleList'),
                  LoadingComponent: require('/Users/chenyin/WebstormProjects/marble/src/components/PageLoading/index')
                    .default,
                })
              : require('../Sample/SampleList').default,
            exact: true,
          },
          {
            path: '/sample/new',
            name: 'new',
            hideInMenu: true,
            component: __IS_BROWSER
              ? _dvaDynamic({
                  app: require('@tmp/dva').getApp(),
                  models: () => [
                    import('/Users/chenyin/WebstormProjects/marble/src/pages/Sample/models/sample.js').then(
                      m => {
                        return { namespace: 'sample', ...m.default };
                      },
                    ),
                  ],
                  component: () => import('../Sample/SampleForm'),
                  LoadingComponent: require('/Users/chenyin/WebstormProjects/marble/src/components/PageLoading/index')
                    .default,
                })
              : require('../Sample/SampleForm').default,
            exact: true,
          },
          {
            path: '/sample/:id',
            name: 'edit',
            hideInMenu: true,
            component: __IS_BROWSER
              ? _dvaDynamic({
                  app: require('@tmp/dva').getApp(),
                  models: () => [
                    import('/Users/chenyin/WebstormProjects/marble/src/pages/Sample/models/sample.js').then(
                      m => {
                        return { namespace: 'sample', ...m.default };
                      },
                    ),
                  ],
                  component: () => import('../Sample/SampleForm'),
                  LoadingComponent: require('/Users/chenyin/WebstormProjects/marble/src/components/PageLoading/index')
                    .default,
                })
              : require('../Sample/SampleForm').default,
            exact: true,
          },
          {
            component: () =>
              React.createElement(
                require('/Users/chenyin/WebstormProjects/marble/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
                  .default,
                { pagesPath: 'src/pages', hasRoutesInConfig: true },
              ),
          },
        ],
      },
      {
        path: '/webUser',
        name: 'webUser',
        icon: 'compass',
        routes: [
          {
            path: '/webUser/list',
            name: 'list',
            component: __IS_BROWSER
              ? _dvaDynamic({
                  app: require('@tmp/dva').getApp(),
                  models: () => [
                    import('/Users/chenyin/WebstormProjects/marble/src/pages/WebUser/models/webUser.js').then(
                      m => {
                        return { namespace: 'webUser', ...m.default };
                      },
                    ),
                  ],
                  component: () => import('../WebUser/WebUserList'),
                  LoadingComponent: require('/Users/chenyin/WebstormProjects/marble/src/components/PageLoading/index')
                    .default,
                })
              : require('../WebUser/WebUserList').default,
            exact: true,
          },
          {
            path: '/webUser/new',
            name: 'new',
            hideInMenu: true,
            component: __IS_BROWSER
              ? _dvaDynamic({
                  app: require('@tmp/dva').getApp(),
                  models: () => [
                    import('/Users/chenyin/WebstormProjects/marble/src/pages/WebUser/models/webUser.js').then(
                      m => {
                        return { namespace: 'webUser', ...m.default };
                      },
                    ),
                  ],
                  component: () => import('../WebUser/WebUserForm'),
                  LoadingComponent: require('/Users/chenyin/WebstormProjects/marble/src/components/PageLoading/index')
                    .default,
                })
              : require('../WebUser/WebUserForm').default,
            exact: true,
          },
          {
            path: '/webUser/:id',
            name: 'edit',
            hideInMenu: true,
            component: __IS_BROWSER
              ? _dvaDynamic({
                  app: require('@tmp/dva').getApp(),
                  models: () => [
                    import('/Users/chenyin/WebstormProjects/marble/src/pages/WebUser/models/webUser.js').then(
                      m => {
                        return { namespace: 'webUser', ...m.default };
                      },
                    ),
                  ],
                  component: () => import('../WebUser/WebUserForm'),
                  LoadingComponent: require('/Users/chenyin/WebstormProjects/marble/src/components/PageLoading/index')
                    .default,
                })
              : require('../WebUser/WebUserForm').default,
            exact: true,
          },
          {
            component: () =>
              React.createElement(
                require('/Users/chenyin/WebstormProjects/marble/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
                  .default,
                { pagesPath: 'src/pages', hasRoutesInConfig: true },
              ),
          },
        ],
      },
      {
        name: 'exception',
        icon: 'warning',
        path: '/exception',
        hideInMenu: true,
        routes: [
          {
            path: '/exception/403',
            name: 'not-permission',
            component: __IS_BROWSER
              ? _dvaDynamic({
                  app: require('@tmp/dva').getApp(),
                  models: () => [
                    import('/Users/chenyin/WebstormProjects/marble/src/pages/Exception/models/error.js').then(
                      m => {
                        return { namespace: 'error', ...m.default };
                      },
                    ),
                  ],
                  component: () => import('../Exception/403'),
                  LoadingComponent: require('/Users/chenyin/WebstormProjects/marble/src/components/PageLoading/index')
                    .default,
                })
              : require('../Exception/403').default,
            exact: true,
          },
          {
            path: '/exception/404',
            name: 'not-find',
            component: __IS_BROWSER
              ? _dvaDynamic({
                  app: require('@tmp/dva').getApp(),
                  models: () => [
                    import('/Users/chenyin/WebstormProjects/marble/src/pages/Exception/models/error.js').then(
                      m => {
                        return { namespace: 'error', ...m.default };
                      },
                    ),
                  ],
                  component: () => import('../Exception/404'),
                  LoadingComponent: require('/Users/chenyin/WebstormProjects/marble/src/components/PageLoading/index')
                    .default,
                })
              : require('../Exception/404').default,
            exact: true,
          },
          {
            path: '/exception/500',
            name: 'server-error',
            component: __IS_BROWSER
              ? _dvaDynamic({
                  app: require('@tmp/dva').getApp(),
                  models: () => [
                    import('/Users/chenyin/WebstormProjects/marble/src/pages/Exception/models/error.js').then(
                      m => {
                        return { namespace: 'error', ...m.default };
                      },
                    ),
                  ],
                  component: () => import('../Exception/500'),
                  LoadingComponent: require('/Users/chenyin/WebstormProjects/marble/src/components/PageLoading/index')
                    .default,
                })
              : require('../Exception/500').default,
            exact: true,
          },
          {
            path: '/exception/trigger',
            name: 'trigger',
            hideInMenu: true,
            component: __IS_BROWSER
              ? _dvaDynamic({
                  app: require('@tmp/dva').getApp(),
                  models: () => [
                    import('/Users/chenyin/WebstormProjects/marble/src/pages/Exception/models/error.js').then(
                      m => {
                        return { namespace: 'error', ...m.default };
                      },
                    ),
                  ],
                  component: () => import('../Exception/TriggerException'),
                  LoadingComponent: require('/Users/chenyin/WebstormProjects/marble/src/components/PageLoading/index')
                    .default,
                })
              : require('../Exception/TriggerException').default,
            exact: true,
          },
          {
            component: () =>
              React.createElement(
                require('/Users/chenyin/WebstormProjects/marble/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
                  .default,
                { pagesPath: 'src/pages', hasRoutesInConfig: true },
              ),
          },
        ],
      },
      {
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () => import('../404'),
              LoadingComponent: require('/Users/chenyin/WebstormProjects/marble/src/components/PageLoading/index')
                .default,
            })
          : require('../404').default,
        exact: true,
      },
      {
        component: () =>
          React.createElement(
            require('/Users/chenyin/WebstormProjects/marble/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
              .default,
            { pagesPath: 'src/pages', hasRoutesInConfig: true },
          ),
      },
    ],
  },
  {
    component: () =>
      React.createElement(
        require('/Users/chenyin/WebstormProjects/marble/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
          .default,
        { pagesPath: 'src/pages', hasRoutesInConfig: true },
      ),
  },
];
window.g_routes = routes;
const plugins = require('umi/_runtimePlugin');
plugins.applyForEach('patchRoutes', { initialValue: routes });

export { routes };

export default class RouterWrapper extends React.Component {
  unListen() {}

  constructor(props) {
    super(props);

    // route change handler
    function routeChangeHandler(location, action) {
      plugins.applyForEach('onRouteChange', {
        initialValue: {
          routes,
          location,
          action,
        },
      });
    }
    this.unListen = history.listen(routeChangeHandler);
    // dva 中 history.listen 会初始执行一次
    // 这里排除掉 dva 的场景，可以避免 onRouteChange 在启用 dva 后的初始加载时被多执行一次
    const isDva =
      history.listen
        .toString()
        .indexOf('callback(history.location, history.action)') > -1;
    if (!isDva) {
      routeChangeHandler(history.location);
    }
  }

  componentWillUnmount() {
    this.unListen();
  }

  render() {
    const props = this.props || {};
    return (
      <RendererWrapper0>
        <Router history={history}>{renderRoutes(routes, props)}</Router>
      </RendererWrapper0>
    );
  }
}
