<template>
  <aside class="grid__container__sidebar">
    <div id="nav">
      <ul>
        <li v-for="(route, idx) in rotas" :key="idx">
          <router-link :to="route.path">{{route.name}}</router-link>
          <ul v-if="route.children">
            <li v-for="(subroute, subidx) in route.children" :key="subidx">
              <router-link :to="`${route.path}${subroute.path}`">{{subroute.name}}</router-link>
            </li>
          </ul>
        </li>
      </ul>
      <router-link to="/">Home</router-link> |
      <router-link to="/app1" replace>App1</router-link> |
      <router-link to="/app2">App2</router-link> |
    </div>
    <router-view/>
  </aside>
</template>

<script>
  export default {
    name: 'sidebar',
    data() {
      return {
        rotas: [
          {
            path: '/',
            name: 'Home'
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
            ]
          },
          {
            path: '/app3',
            name: 'App3',
          },
        ]
      };
    },
  };
</script>

<style>
  .grid__container__sidebar {
    grid-area: 2 / 1 / 6 / 2;
  }
</style>
