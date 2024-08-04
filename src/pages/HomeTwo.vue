<script setup >

import SecOne from '../components/sections/SecOne.vue'
import SecTwo from '../components/sections/SecTwo.vue'
import SecThree from '../components/sections/SecThree.vue'
import SecFour from '../components/sections/SecFour.vue'
import SecFive from '../components/sections/SecFive.vue'
import SecSix from '../components/sections/SecSix.vue'
import SecFooter from '../components/sections/SecFooter.vue'
import Loading from '../components/elements/Loading.vue'
import { ref, onMounted, onUnmounted } from 'vue';


// Definisikan Sec data
const Secs = ref([
  { index: 0, id: 'one' },
  { index: 1, id: 'two' },
  { index: 2, id: 'three' },
  { index: 3, id: 'four' },
  { index: 4, id: 'five' }
]);


// State untuk menyimpan Sec aktif
const activeSec = ref(null);

// Fungsi untuk scroll ke Sec yang dituju
const scrollToSec = (index) => {
  const Sec = document.querySelector(`[data-index="${index}"]`);
  if (Sec) {
    Sec.scrollIntoView({ behavior: 'smooth' });
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
  for (const Sec of Secs.value) {
    const el = document.querySelector(`[data-index="${Sec.index}"]`);
    if (el && isElementInViewport(el)) {
      activeSec.value = Sec.index;
      found = true;
      console.log(`Active Sec: ${Sec.index}`); // Debug log
      break;
    }
  }
  if (!found) {
    activeSec.value = null;
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

<div>
  <div>
    <div class="nav-bullet z-50 fixed top-1/2 -translate-y-1/2  left-10 hidden lg:flex flex-col justify-between items-center ">
       <!-- ini nantinya sebuah navigasi bullet jika salahsatu di klik manka akan scroll Sec yang di tuju berdasrkan data-index -->
        <div :class="{ active: activeSec === Sec.index }" class="nav-item flex flex-col items-center w-4 h-max" v-for="Sec in Secs" :key="Sec.index">
         <div class="flex gap-2 items-center justify-center">
          <button class="bullet w-2 h-2 block rounded-full border-primary-500 border shrink-0"   @click="scrollToSec(Sec.index)" :class="{ active: activeSec === Sec.index }">
          </button>
          <span class="number absolute -right-7 text-sm">
            {{ Sec.index+1 }} / {{  Secs.length }}
          </span>
         </div>
          <div class="line w-0.5 h-16 bg-primary-500  block bodrder-l"></div>
        </div>
    </div>
  <SecOne data-index="0" id="one" class="Sec" />
  <SecTwo  data-index="1" id="two" class="Sec"/>
  <SecThree data-index="2" id="three" class="Sec" />
  <SecFour data-index="3" id="four" class="Sec relative z-10" />
  <SecFive data-index="4" id="five" class="Sec relative -mt-48 bottom-0 z-0 " />
  </div>
  <SecSix />
  <SecFooter />
</div>
  </main>
</template>
<style scoped>
.bullet{
  @apply flex flex-col items-center justify-center relative bg-primary-50 block;
}

.bullet.active{
  @apply bg-primary-500 h-4 w-4 transition-all duration-300 ease-linear border-secondary-200;
}
.nav-bullet::after{
   content: '';
   @apply border-l border-primary-500 block h-full w-2;
}
.nav-item:last-child .line{
  display: none;
}

.nav-item .number{
  display: none ;
  font-size: 12px ;
  font-style: italic;
}
.nav-item.active .number{
  display: block;
}

</style>
