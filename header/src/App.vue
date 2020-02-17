<template>
  <div class="grid__container__header border bg-gray-100 border-gray-500 flex justify-center items-center font-semibold text-4xl text-gray-800">
    <h1>Header</h1>
  </div>
</template>

<script>
  export default {
    name: 'app-header',
  };
</script>

<style>
  .grid__container__header {
    grid-area: 1 / 1 / 2 / 6;
  }
</style>
