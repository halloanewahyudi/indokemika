<script setup>
import Slideshow from '../components/elements/SlideshowTwo.vue'
import IconInstagramVue from '../components/icons/IconInstagram.vue'
import IconMiailVue from '../components/icons/IconMiail.vue'
import IconYoutubeVue from '../components/icons/IconYoutube.vue'

import SectionOne from '../components/sections/home/SectionOne.vue'
import SectionTwo from '../components/sections/home/SectionTwo.vue'
import SectionThree from '../components/sections/home/SectionThree.vue'
import ExploreCompany from '../components/sections/home/ExploreCompany.vue'
import SectionFive from '../components/sections/home/SectionFive.vue'
import SectionSix from '../components/sections/home/SectionSix.vue'
import SectionFooter from '../components/layouts/SectionFooter.vue'
import AplProducts from '../components/sections/home/AplProducts.vue'
import ApplicationProducts from '../components/sections/home/ApplicationProducts.vue'
import Loading from '../components/elements/Loading.vue'
import { onMounted, onUnmounted, ref } from 'vue'
import Products from '../components/sections/home/Products.vue'
import Popup from '../components/elements/Popup.vue'
import Sertificate from '../components/sections/home/Sertificate.vue'



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
  const midPoint = rect.top + rect.height / 2;
  return (
    midPoint >= 0 &&
    midPoint <= (window.innerHeight || document.documentElement.clientHeight)
  );
};

// Event handler untuk scroll
const onScroll = () => {
  let found = false;
  for (const section of sections.value) {
    const el = document.querySelector(`[data-index="${section.index}"]`);
    if (el && isElementInViewport(el)) {
      activeSection.value = section.index;
      found = true;
      console.log(`Active section: ${section.index}`); // Debug log
      break;
    }
  }
  if (!found) {
    activeSection.value = null;
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
  <main>
    <Popup />
    <div
      class="nav-bullet z-50 fixed top-1/2 -translate-y-1/2  left-6 hidden lg:flex flex-col justify-between items-center ">
      <!-- ini nantinya sebuah navigasi bullet jika salahsatu di klik manka akan scroll section yang di tuju berdasrkan data-index -->
      <div :class="{ active: activeSection === section.index }" class="nav-item flex flex-col items-center w-4 h-max"
        v-for="section in sections" :key="section.index">
        <div class="flex gap-2 items-center justify-center">
          <button class="bullet w-2 h-2 block rounded-full border-primary-500 border shrink-0"
            @click="scrollToSection(section.index)" :class="{ active: activeSection === section.index }">
          </button>
          <span class="number absolute -right-3 text-sm text-primary-500">
            {{ section.index + 1 }}
          </span>
        </div>
        <div class="line w-0.5 h-16 bg-primary-100  block bodrder-l"></div>
      </div>
    </div>

    <SectionOne data-index="0" id="one" class="section" />
    <SectionTwo data-index="1" id="two" class="section sec2" />
    <div class=" pt-20  bg-primary-100 rounded-t-[100px] ">
      <Products data-index="2" id="three" class="section  relative" />
      <ExploreCompany data-index="3" id="four" class="section pt-10 relative z-10 " />
    </div>
    <div class="bg-secondary-100 pt-44 -mt-28 pb-16 relative">
    <!--   <SectionFive data-index="4" id="five" class="section relative z-0 " /> -->
      <Sertificate />
    </div>

  </main>
</template>
<style scoped>
.bullet {
  @apply flex flex-col items-center justify-center relative bg-primary-50 block;
}

.bullet.active {
  @apply bg-primary-500 h-4 w-4 transition-all duration-300 ease-linear border-secondary-200;
}

.nav-bullet::after {
  content: '';
  @apply border-l border-primary-200 block h-full w-2;
}

.nav-item:last-child .line {
  display: none;
}

.nav-item .number {
  display: none;
  font-size: 12px;
  font-style: italic;
}

.nav-item.active .number {
  display: block;
}

.sec2 {
  background: url('../assets/bg-aksen.png')no-repeat right center;
  background-size: 30%;
  background-position-x: 110%;
}
</style>