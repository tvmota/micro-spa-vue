<template>
  <div id="home">
    home
    <!--img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/-->
    <div class="grid__container">
      <div id="app-header"></div>
      <div id="app-sidebar"></div>
      <main class="grid__container__content">
        <div id="app1"></div>
        <div id="app2"></div>
        <div id="app3"></div>
        <div id="angularjs"></div>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang="scss">
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
