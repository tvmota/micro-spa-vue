<template>
  <div id="navbar-app">
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
  </div>
</template>

<script>
  export default {
    name: 'navbar',
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
            children: [
              {
                path: '/app3',
                name: 'App3',
              },
            ]
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
          }
        ]
      };
    },
  };
</script>

<style>
#navbar-app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #f3f3f3;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
