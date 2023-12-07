<template>
  <!-- <HelloWorld msg="LESGOOOO" /> -->
  <!-- <SideBar v-if="showBar" v-bind:toggle="toggleBar" /> -->
  <aside v-if="showBar" class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <div class="brand-link">
      <span class="font-weight-light">SI Iuran RT 2 RW 3</span>
      <button class="btn ml-3" @click="toggleBar">&times;</button>
    </div>

    <!-- Sidebar -->
    <div class="sidebar">
      <!-- Sidebar user panel (optional) -->
      <!-- <div class="user-panel mt-3 pb-3 mb-3 d-flex">
        <div class="image">
        </div>
        <div class="info">
          <a href="#" class="d-block">Alexander Pierce</a>
        </div>
      </div> -->

      <!-- Sidebar Menu -->
      <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu">
          <li class="nav-item">
            <router-link to="/">Beranda</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/iuran">Iuran</router-link>
          </li>
          <!-- Dropdown data pengeluaran -->
          <li class="nav-item">
            <router-link to="/pengeluaran">Pengeluaran RT</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/pengeluaran">Pemasukan RT</router-link>
          </li>
          <li class="nav-item">
            <router-link to="">Akun</router-link>
          </li>
          <li class="nav-item">
            <router-link to="">Warga</router-link>
          </li>
        </ul>
      </nav>
      <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
  </aside>
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
// import SideBar from './components/SideBar.vue';

export default {
  name: 'App',
  // components: {
  //   SideBar
  // },
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
  padding: 15px 15px;
}
</style>
