<template>
  <!-- <HelloWorld msg="LESGOOOO" /> -->
  <SideBar v-if="showBar" v-bind:toggle="toggleBar" />
  <nav class="navbar navbar-light fixed-top px-5">
    <button @click="toggleBar" class="btn">
      &#9776;
    </button>
  </nav>
  <div>
    <RouterView />
  </div>
</template>

<script>
import SideBar from './components/SideBar.vue';

export default {
  name: 'App',
  components: {
    SideBar
  },
  data () {
    return {
      showBar: false
    }
  },
  methods: {
    toggleBar () {
      this.showBar = !this.showBar
    }
  }
}
</script>

<style>
#app {
  font-family: 'Roboto', sans-serif;
  text-align: center;
  font-size: 14px;
  color: #000000;
  margin-top: 60px;
}

.btn {
  background-color: #fffafa;
  color: #143D81;
  apdding: 15px 15px;
}
</style>
