<script setup>

import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { usePages } from '../../store/pages';

const page = usePages()
const route = useRoute()

const sidebar = ref(null)
onMounted(() => {
   // scroll sidebar
document.addEventListener('scroll', function() {
	const sidebar = document.querySelector('.sidebar');
	const scrollTop = window.scrollY;

	// create styles object
const top = {
	top: '100px',
	position: 'fixed',
  }
  
  const center = {
	top: '0',
	position: 'relative',
  }
  
	if (scrollTop > 400) {
		Object.assign(sidebar.style, top)
	 //  sidebar.style.top = '100px';
	} else {
	 //  sidebar.style.top = '0px';
	  Object.assign(sidebar.style, center)
	}

	console.log(sidebar.style.top);
  });
})
</script>
<template>
    <div class="bg-primary-50 relative">
        <div
            class="absolute top-0 left-0 h-full w-full bg-gradient-to-t from-primary-950 to-white z-10 opacity-50">
        </div>
        <img :src="`${route.meta.banner}`" class="hero w-full h-[380px] object-cover ">
    </div>
    <div class="container py-20 relative content-wrapper">
        <div class=" grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 lg:divide-x  ">
            <div class="lg:col-span-3 ">
                <div ref="sidebar" class="sidebar bg-white p-6 rounded-2xl z-40 flex flex-col divide-y divide-primary-100 duration-300">
                    <router-link to="/about/overview">
                        <span> Company Overview </span>
                    </router-link>
                    <router-link to="/">
                        <span>Milestone </span>
                    </router-link>
                    <router-link to="/"> <span>Vision & Mission </span>
                    </router-link>
                    <router-link to="/">
                        <span> Code of Conduct </span>
                    </router-link>
                    <router-link to="/">
                        <span>Logistic & Facility </span>
                    </router-link>
                </div>
            </div>
            <div class="lg:col-span-9 lg:pl-10">
                <div class="mb-5">
                    <h2 class="mb-4 text-2xl">{{ route.meta.title }}</h2>
                    <div class="w-20 lg:w-44 h-1.5 bg-secondary-200"></div>
                </div>

                <router-view v-slot="{ Component, route }" class="">
  <transition :name="route.meta.transition">
    <component :is="Component" />
  </transition>
</router-view>
            </div>
        </div>
    </div>
</template>
<style lang="postcss" scoped>
.hero {
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}

.sidebar {
    a {
        @apply px-4 py-2 border-l-4 border-transparent relative;

        &::before {
            content: '';
            @apply absolute top-0 left-0 bg-secondary-200 w-0 h-full rounded-r-full z-0;
        }

        &:hover::before {
            @apply w-full h-full duration-300 delay-75
        }

        span {
            @apply relative;
        }
    }

    .router-link-active {
        @apply border-secondary-200
    }
}
</style>