<script lang="ts" setup>
import { ref } from 'vue';
const sertificate = ['/sertificate/aeo.jpeg', '/sertificate/smeta.jpeg',  '/sertificate/iso.jpeg']
</script>

<template>
    <section class="">
        <div class="container">
            <div class="flex flex-wrap items-center justify-center gap-5 w-full">
                <img v-for="item in sertificate" :key="item" :src="item" alt="" class="h-16 w-auto object-contain rounded-xl">
            </div>
        </div>
    </section>
</template>
<style lang="postcss" scoped></style>
