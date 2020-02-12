<template>
  <div class="home">
    <div>
      <img alt="Vue logo" src="../assets/logo.png">
    </div>
    <router-link to="/app2/about">App2's about page</router-link>
    <br/>
    <router-link to="/app1/app3">app3 inside</router-link>
  </div>
</template>

<script>
// @ is an alias to /src
import { createNamespacedHelpers } from 'vuex';
import HelloWorld from '@/components/HelloWorld.vue';

const { mapGetters, mapActions } = createNamespacedHelpers('app1');

export default {
  name: 'home',
  computed: {
    ...mapGetters([
      'getStoreApp1',
    ]),
  },
  methods: {
    ...mapActions([
      'updateStoreApp1',
    ]),
  },
  mounted() {
    this.updateStoreApp1();
    this.$store.dispatch('app2/updateStoreApp2');
  },
  components: {
    HelloWorld
  }
}
</script>
