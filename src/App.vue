<script setup>
import Navbar from './components/elements/Navbar.vue'
import SectionOne from './components/sections/SectionOne.vue'
import SectionTwo from './components/sections/SectionTwo.vue'
import SectionThree from './components/sections/SectionThree.vue'
import SectionFour from './components/sections/SectionFour.vue'
import SectionFive from './components/sections/SectionFive.vue'
</script>
<template>
  <main class="plus-jakarta-sans-font">
<navbar/>
<div>
  <SectionOne />
  <SectionTwo />
  <SectionThree />
  <SectionFour class="relative z-10" />
  <SectionFive class="relative -mt-48 bottom-0 z-0 " />
</div>
  </main>

</template>
