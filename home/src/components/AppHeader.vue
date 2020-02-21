<template>
  <div
    class="grid__container__header">
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
    @apply border;
    @apply bg-gray-100;
    @apply border-gray-500;
    @apply flex;
    @apply justify-center;
    @apply items-center;
    @apply font-semibold;
    @apply text-4xl;
    @apply text-gray-800;
  }
</style>
