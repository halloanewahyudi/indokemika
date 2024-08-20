<script setup>
import Navbar from './components/layouts/Navbar.vue'
import Loading from './components/elements/Loading.vue'

import { ref } from 'vue';
import SectionFooter from './components/layouts/SectionFooter.vue';

// State untuk mengontrol tampilan loading
const isLoading = ref(true);

// Fungsi untuk mensimulasikan proses loading
const simulateLoading = () => {
  isLoading.value = true;
  setTimeout(() => {
    isLoading.value = false;
  }, 2000); // Durasi loading 2 detik
};

// Set loading to false after initial load
setTimeout(() => {
  isLoading.value = false;
}, 3000);

</script>
<template>
  <main class="plus-jakarta-sans-font">
    <div v-if="isLoading">
      <Loading />
    </div>
    <main v-else>
      <Navbar />
      <router-view></router-view>
<SectionFooter />
    </main>
  </main>

</template>