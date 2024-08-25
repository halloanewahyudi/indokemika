<template>
    <div class="navbar relative " :class="{ light: isLight }">
        <div class="container relative">
            <div class="flex gap-4 justify-between items-center ">
                <div class="logo">
                    <img src="/logo-transparent.png" alt="" srcset="">
                </div>
                <nav>
                    <ul class="menu">
                        <li>
                            <router-link to="/">Home</router-link>
                        </li>
                        <li class="has-children">
                            <router-link to=""> About</router-link>
                            <ul class="sub-menu">
                                <li> <router-link to="/about/overview"> Overview</router-link></li>
                                <li> <router-link to="/about/milestone"> Milestone</router-link></li>
                                <li> <router-link to="/about/vision-mission"> Vision & Misson</router-link></li>
                                <li> <router-link to="/about/code-of-conduct"> Code of Conduct</router-link></li>
                                <li> <router-link to="/about/logistic-facility"> Logistic & Facility</router-link></li>
                            </ul>
                        </li>
                        <li class="mm-menu"  @mouseenter="openMenu"  @mouseleave="initiateCloseMenu">
                            <router-link to=""> Products</router-link>
                        </li>
                        <li>
                            <router-link to="">News</router-link>
                        </li>
                        <li>
                            <router-link to="">Contact</router-link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
            <div  v-if="mmOpen" @mouseenter="cancelCloseMenu"  @mouseleave="initiateCloseMenu" class="mega-menu max-w-screen-lg mx-auto top-16">
                <div class="grid grid-cols-2 gap-10 divide-x">
                    <div class="flex flex-col gap-4">
                        <img src="/slide-1.jpg" alt="" class="rounded-xl">
                        <span>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis, ducimus!
                        </span>
                   <router-link class="btn max-w-max"> Read more</router-link>
                        </div>
                    <div class="px-6">
                        <ul class="mega-menu-menu">
                            <li> <router-link to=""> Coating and Ink </router-link> </li>
                            <li> <router-link to=""> Cosmetic & Personal Care </router-link> </li>
                            <li> <router-link to=""> Food Ingredients </router-link> </li>
                            <li> <router-link to=""> Industrial Chemical </router-link> </li>
                            <li> <router-link to=""> Oleo & Performance Chemicals </router-link> </li>
                            <li> <router-link to=""> Pharmaceutical Ingredients </router-link> </li>
                            <li> <router-link to=""> Plastic Chemicals </router-link> </li>
                            <li> <router-link to=""> Rubber Chemicals </router-link> </li>
                            <li> <router-link to=""> Special Project </router-link> </li>
                        </ul>
                    </div>
                </div>
            </div>
    </div>
</template>

<script lang="ts" setup>
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { onMounted,onUnmounted, ref } from "vue";

// State untuk mengontrol status megamenu
const mmOpen = ref(false);
let timeoutId: number | null = null;

// Fungsi untuk membuka megamenu
const openMenu = () => {
  mmOpen.value = true;
};

// Fungsi untuk menutup megamenu dengan penundaan
const initiateCloseMenu = () => {
  timeoutId = window.setTimeout(() => {
    mmOpen.value = false;
  }, 200); // Waktu tunda sebelum menutup
};

// Fungsi untuk membatalkan penutupan megamenu jika kursor kembali
const cancelCloseMenu = () => {
  if (timeoutId) {
    clearTimeout(timeoutId);
  }
};

// menambahkan class light untuk merubah backgeround

const isLight = ref(false);

const handleScroll = () => {
  isLight.value = window.scrollY < 200;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Initialize on load
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

</script>

<style lang="postcss" scoped>
.navbar.light {
    @apply text-white bg-transparent border-none ;
    .menu{
        li{
            &:hover{
                a{
                    @apply text-neutral-700
                }
            }
        }
    }
    .sub-menu,.mega-menu{
        @apply text-neutral-700 rounded-lg
    }
}

.navbar {
    @apply border-b-4 border-primary-500 flex fixed w-full top-0 left-0 z-50 bg-white;

    .logo {
        @apply py-2;

        img {
            max-width: 60px;
        }
    }

    nav {
        ul.menu {
            @apply flex flex-col lg:flex-row gap-4 items-center;

            li {
                position: relative;

                a {
                    display: inline-flex;
                    align-items: center;
                    @apply p-2 font-medium;

                    &:hover {
                        @apply bg-secondary-50 duration-200 rounded-lg;
                    }
                }
            }

            li.has-children {
                position: relative;

                .sub-menu {
                    @apply bg-white absolute hidden opacity-0 z-40 pt-8 p-6 rounded-b-xl border-b-4 border-primary-500;

                    a {
                        @apply font-normal text-sm block;
                    }
                }

                .sub-menu {
                    width: 200px;
                }

                &:hover {
                    .sub-menu {
                        @apply flex flex-col gap-1 opacity-100 duration-500 transition-all ease-linear;
                    }
                }
            }
        }
    }

    .mega-menu {
        @apply absolute top-full left-0 right-0 p-6 bg-white rounded-b-xl border-b-4 border-primary-500;

        .mega-menu-menu {
            @apply flex flex-col gap-4 text-sm;

            a {
                @apply p-2;
                &:hover {
                    @apply bg-secondary-50 rounded-lg duration-300;
                }
            }
        }
    }
}
</style>