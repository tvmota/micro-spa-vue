<template>
  <div id="app1">
    App1 is working!
    <test-my-component></test-my-component>
    <wc-button btnType="submit" btnLabel="btn-webcomp" @btn-click="handleClick"></wc-button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App1',
  methods: {
    handleClick(param) {
      console.log(param);
    },
  },
};
</script>
