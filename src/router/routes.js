
const routes = [
  {
    path: '/',
    name: 'Index',
    component: () => import('pages/Site/IndexPage.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('pages/LoginPage.vue')
  },
  {
    path: '/cadastro',
    nmame: 'Cadastro',
    component: () => import('pages/RegisterPage.vue')
  },
  {
    path: '/dashboard',
    component: () => import('layouts/MainLayout.vue'),
    meta: {
      requireAuth: true
    },
    children: [
      {
        path: '',
        name: 'Dashboard',
        component: () => import('pages/DashboardPage.vue'),
        meta: {
          requireAuth: false,
          breadcrumb: [
            { name: 'Dashboard', icon: 'dashboard' }
          ]
        }
      },
      {
        path: '/clientes',
        name: 'Clientes',
        component: () => import('pages/ClientesPage.vue'),
        meta: {
          requireAuth: true,
          breadcrumb: [
            { name: 'Clientes', icon: 'group' }
          ]
        },
        children: [
          {
            path: '/clientes/gestao',
            name: 'Gestão de Clientes',
            component: () => import('pages/GestaoClientesPage.vue'),
            meta: {
              requireAuth: true,
              breadcrumb: [
                { name: 'Clientes', link: '/clientes/gestao', icon: 'group' },
                { name: 'Gestão de Clientes', icon: 'manage_accounts' }
              ]
            }
          },
          {
            path: '/clientes/gestao-ponto',
            name: 'Gestão de Pontos',
            component: () => import('pages/GestaoPontosPage.vue'),
            meta: {
              requireAuth: true,
              breadcrumb: [
                { name: 'Clientes', link: '/clientes/gestao', icon: 'group' },
                { name: 'Gestão de Pontos', icon: 'manage_accounts' }
              ]
            }
          }
        ]
      },
      {
        path: '/vendedores',
        name: 'Vendedores',
        component: () => import('pages/VendedoresPage.vue')
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
