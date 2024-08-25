<template>
    <div class=" navbar-mobile w-full fixed top-0 left-0 z-50">
        <div class="flex gap-4 items-center justify-between py-2 border-b px-6 bg-white">
            <img src="/logo-transparent.png" alt="" class="w-12 h-auto">
            <HamburgerVue @click="openMenu = !openMenu" />
        </div>
        <transition name="slide">
            <nav v-if="openMenu" class="warp-menu bg-white p-6">
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
                    <li class="mm-menu" @mouseenter="openMenu" @mouseleave="initiateCloseMenu">
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
        </transition>

    </div>
</template>
<script setup>
import { ref } from "vue";
import HamburgerVue from "../elements/Hamburger.vue";

const openMenu = ref(false)

</script>
<style lang="postcss" scoped>
.menu {
    @apply flex flex-col ;
    li{
        @apply py-2;
        a{
            @apply p-2 ;
            &:hover{
                @apply bg-secondary-200 rounded-lg duration-300;
            }
         }
    }

    .sub-menu {
        @apply hidden bg-neutral-50 p-5 rounded-lg;
    }

&:hover {
    .sub-menu {
        @apply block
    }
}
}

.has-children {
    @apply relative;

    &::after {
        content: '▼';
        @apply absolute top-2 right-2 z-10;
    }
}

.slide-leave-active,
.slide-enter-active {
    @apply duration-300
}

.slide-enter {
    @apply translate-x-full duration-300
}

.slide-leave-to {
    @apply -translate-x-full duration-300
}
</style>