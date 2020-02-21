<template>
  <div id="home" class="grid__container">
    <AppHeader />
    <AppSidebar />
    <main class="grid__container__content">
      <div id="app1"></div>
      <div id="app2"></div>
      <div id="app3"></div>
      <div id="angularjs"></div>
    </main>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';
import AppSidebar from '@/components/AppSidebar.vue';

export default {
  name: 'App',
  beforeCreate() {
    if (!sessionStorage.getItem('token')) {
      document.querySelector('#home').style.height = '0';
      document.querySelector('#home').style.display = 'none';
      window.history.pushState(null, null, '/login');
    } else {
      document.querySelector('#login').style.height = '0';
      document.querySelector('#login').style.display = 'none';
      document.querySelector('#home').style.height = '100%';
      document.querySelector('#home').style.display = 'block';
      if (window.location.pathname === '/login') {
        window.history.pushState(null, null, '/app1');
      }
    }
  },
  components: {
    AppHeader,
    AppSidebar,
  },
};
</script>

<style lang="scss">
  #home {
    height: 100%;
  }

  .grid__container {
    display: grid;
    height: 100%;
    grid-template-columns: 160px repeat(4, 1fr);
    grid-template-rows: 80px repeat(4, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
  }

  .grid__container__hidden {
    display: none;
  }

  .grid__container__content {
    grid-area: 2 / 2 / 6 / 6;
    padding: 8px;
  }
</style>
