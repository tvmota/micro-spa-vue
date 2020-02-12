import Router from 'vue-router'
import Home from './views/Home.vue'

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/app1',
      name: 'app1-home',
      component: Home,
      children: [
        {
          path: '/app3',
          name: 'app3-home',
          component: {
            render (c) { return c('router-view') },
          },
        },
      ],
    },
  ],
});
