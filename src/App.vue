<script setup>
import Navbar from './components/navbar/Navbar.vue'
import Loading from './components/elements/Loading.vue'

import { ref } from 'vue';
import SectionFooter from './components/layouts/SectionFooter.vue';

import NavbarMobile from './components/navbar/NavbarMobile.vue'
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
  <main class="plus-jakarta-sans-font ">
    <div v-if="isLoading">
      <Loading />
    </div>
    <main v-else >
      <div class="hidden lg:block">
        <Navbar />
      </div>
      <div class="block lg:hidden">
        <NavbarMobile/>
      </div>
      <Transition>
        <router-view></router-view>
      </Transition>
<SectionFooter />
    </main>
  </main>

</template>
<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
