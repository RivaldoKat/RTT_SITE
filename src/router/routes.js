const branchNetworkPage = () => import('@/pages/BranchPlaceholderPage.vue')

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('@/pages/IndexPage.vue') },

      {
        path: 'vision-mission',
        component: () => import('@/pages/About_Rema_Pages/VisionMission.vue')
      },

      {
        path: 'our-presence',
        component: branchNetworkPage
      },

      {
        path: 'manufacturing-plant',
        component: () =>
          import('@/pages/About_Rema_Pages/ManufacturingPlant.vue')
      },

      {
        path: 'iso-certified',
        component: () => import('@/pages/About_Rema_Pages/IsoCertificate.vue')
      },

      {
        path: 'our-brands-services',
        component: () =>
          import('@/pages/About_Rema_Pages/BrandsAndServices.vue')
      },
      { path: 'contact', component: () => import('@/pages/ContactPage.vue') },
      {
        path: 'products/:type',
        component: () => import('@/pages/ProductPlaceholderPage.vue')
      },
      {
        path: 'branch/:slug?',
        component: branchNetworkPage
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('@/pages/ErrorNotFound.vue')
  }
]

export default routes
