<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import { createNamespacedHelpers } from 'vuex';
import HelloWorld from '@/components/HelloWorld.vue'

const { mapGetters, mapActions, mapState } = createNamespacedHelpers('app2');

export default {
  name: 'home',
    computed: {
    ...mapGetters([
      'getStoreApp2',
    ]),
    ...mapState([
      'storeApp2',
    ]),
  },
  methods: {
    ...mapActions([
      'updateStoreApp2',
    ]),
  },
  mounted() {
    this.$store.dispatch('app2/updateStoreApp2');
  },
  components: {
    HelloWorld
  }
}
</script>
