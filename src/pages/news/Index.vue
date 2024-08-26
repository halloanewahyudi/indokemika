<template>
    <div>
        <div class="bg-primary-50 relative">
        <div class="absolute top-0 left-0 h-full w-full bg-gradient-to-t from-primary-950 to-black z-10 opacity-50">
        </div>
        <img :src="`${route.meta.banner}`" class="hero w-full h-[380px] object-cover ">
        <DividerVue class="absolute left-0 -bottom-1 z-20" />
    </div>
    <div class="container py-20">
        <div class="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-10">
            <div class="" v-for="item in posts.posts" :key="item">
                <div>
                    <img src="https://placehold.co/600x400/f4f2f4/d3d3d3" alt="" class="rounded-xl">
                    <span class="text-sm">{{ item.Date }}</span>
                    <h5 class="text-lg font-medium">{{ item.title }}</h5>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import DividerVue from '../../components/Divider.vue';
import { usePosts } from '../../store/posts';
const route = useRoute()
const posts = usePosts()

</script>

<style lang="scss" scoped>

</style>