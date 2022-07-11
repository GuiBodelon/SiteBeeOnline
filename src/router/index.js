import { route } from 'quasar/wrappers'
import { createRouter, createMemoryHistory, createWebHistory, createWebHashHistory } from 'vue-router'
import routes from './routes'
import { Notify } from 'quasar'
import { useUserStore } from 'src/stores/user-store'

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default route(function (/* { store, ssrContext } */) {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : (process.env.VUE_ROUTER_MODE === 'history' ? createWebHistory : createWebHashHistory)

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,

    // Leave this as is and make changes in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    history: createHistory(process.env.VUE_ROUTER_BASE)
  })

  Router.beforeResolve((to, from, next) => {
    // If this isn't an initial page load.
    if (to.name) {
      // Start the route progress bar.
      // eslint-disable-next-line no-undef
      NProgress.start()
    }
    next()
  })

  Router.afterEach((to, from) => {
    // Complete the animation of the route progress bar.
    // eslint-disable-next-line no-undef
    NProgress.done()
  })

  Router.beforeEach((to, from, next) => {
    const userStore = useUserStore()
    const token = userStore.user.token
    if (to.matched.some(record => record.meta.requireAuth) && !token) {
      next({ name: 'Login', query: { next: to.fullPath } })
      Notify.create({
        textColor: 'white',
        icon: 'error',
        color: 'red-6',
        message: 'Você precisa estar autenticado para acessar esta página.'
      })
    } else {
      next()
    }
  })

  return Router
})
