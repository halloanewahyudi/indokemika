<script setup >
import Navbar from './components/elements/Navbar.vue'
import SectionOne from './components/sections/SectionOne.vue'
import SectionTwo from './components/sections/SectionTwo.vue'
import SectionThree from './components/sections/SectionThree.vue'
import SectionFour from './components/sections/SectionFour.vue'
import SectionFive from './components/sections/SectionFive.vue'
import SectionSix from './components/sections/SectionSix.vue'
import SectionFooter from './components/sections/SectionFooter.vue'
import { ref, onMounted, onUnmounted } from 'vue';

// Definisikan section data
const sections = ref([
  { index: 0, id: 'one' },
  { index: 1, id: 'two' },
  { index: 2, id: 'three' },
  { index: 3, id: 'four' },
  { index: 4, id: 'five' }
]);

// State untuk menyimpan section aktif
const activeSection = ref(null);

// Fungsi untuk scroll ke section yang dituju
const scrollToSection = (index) => {
  const section = document.querySelector(`[data-index="${index}"]`);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

// Fungsi untuk memeriksa apakah elemen terlihat di viewport
const isElementInViewport = (el) => {
  const rect = el.getBoundingClientRect();
  return rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);
};

// Event handler untuk scroll
const onScroll = () => {
  for (const section of sections.value) {
    const el = document.querySelector(`[data-index="${section.index}"]`);
    if (el && isElementInViewport(el)) {
      activeSection.value = section.index;
      break;
    }
  }
};

onMounted(() => {
  window.addEventListener('scroll', onScroll);
  onScroll(); // Initial check
});

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll);
});
</script>
<template>
  <main class="plus-jakarta-sans-font">
<navbar/>
<div>
  <div>
    <div class="nav-bullet z-50 fixed top-1/2 -translate-y-1/2  left-8 hidden lg:flex flex-col justify-between items-center gap-12">
       <!-- ini nantinya sebuah navigasi bullet jika salahsatu di klik manka akan scroll section yang di tuju berdasrkan data-index -->
       <button class="bullet w-3 h-3 block rounded-full border-primary-500 border" v-for="section in sections" :key="section.index"  @click="scrollToSection(section.index)" :class="{ active: activeSection === section.index }">
           
          </button>
          <div class="w-1  block bodrder-l"></div>
    </div>
  <SectionOne data-index="0" id="one" class="section" />
  <SectionTwo  data-index="1" id="two" class="section"/>
  <SectionThree data-index="2" id="three" class="section" />
  <SectionFour data-index="3" id="four" class="section relative z-10" />
  <SectionFive data-index="4" id="five" class="section relative -mt-48 bottom-0 z-0 " />
  </div>
  <SectionSix />
  <SectionFooter />
</div>
  </main>
</template>
<style scoped>
.bullet{
  @apply flex flex-col items-center justify-center relative bg-primary-50;
}
.bullet::after{
content: '';
@apply border-l border-primary-200  block absolute h-14 top-0 bottom-0;
}

.bullet::after > :last-child {
  display: none;
}
.bullet.active{
  @apply bg-primary-500
}

</style>