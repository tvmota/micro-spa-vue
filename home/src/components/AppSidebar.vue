<template>
  <aside class="grid__container__sidebar bg-green-300 shadow-lg">
    <ul class="flex flex-col font-sans mt-8">
      <li class="p-1 pl-2 " v-for="(route, idx) in rotas" :key="idx">
        <span
          @click="navigateTo(route.path)"
          class="cursor-pointer hover:underline hover:text-gray-600"
          :class="{'underline text-gray-600': routeLocation === route.path}"
          target="_self">
            {{route.name}}
        </span>
        <ul v-if="route.children">
          <li v-for="(subroute, subidx) in route.children" :key="subidx" target="_self">
            <span @click="navigateTo(`${route.path}${subroute.path}`)">
              {{subroute.name}}
            </span>
          </li>
        </ul>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  name: 'sidebar',
  data() {
    return {
      routeLocation: '',
      rotas: [
        {
          path: '/login',
          name: 'Login',
        },
        {
          path: '/app1',
          name: 'App1',
        },
        {
          path: '/app2',
          name: 'App2',
          children: [
            {
              path: '/about',
              name: 'About',
            },
          ],
        },
        {
          path: '/app3',
          name: 'App3',
        },
        {
          path: '/angularjs',
          name: 'angularjs',
        },
      ],
    };
  },
  methods: {
    navigateTo(path) {
      if (path === '/login') {
        window.sessionStorage.clear();
      }

      window.history.pushState(null, null, path);
      this.routeLocation = path;
    },
  },
  mounted() {
    this.routeLocation = window.location.pathname;
  },
};
</script>

<style>
  .grid__container__sidebar {
    grid-area: 2 / 1 / 6 / 2;
  }
</style>
