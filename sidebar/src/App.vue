<template>
  <aside class="grid__container__sidebar bg-green-300 shadow-lg">
    <ul class="flex flex-col font-sans mt-8">
      <li class="p-1 pl-2 " v-for="(route, idx) in rotas" :key="idx">
        <router-link :to="route.path" active-class="underline text-gray-600">
          {{route.name}}
        </router-link>
        <ul v-if="route.children">
          <li v-for="(subroute, subidx) in route.children" :key="subidx">
            <router-link :to="`${route.path}${subroute.path}`">{{subroute.name}}</router-link>
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
        rotas: [
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
