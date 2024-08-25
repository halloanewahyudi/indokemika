<template>
   
    <div class="grid grid-cols-1 lg:grid-cols-4 items-center justify-center lg:divide-x gap-5 lg:gap-0 ">
        <div class="text-center px-6 ">
            <Statistic end="1987" class="text-3xl lg:text-6xl font-light text-primary-50" />
            <span> Experience since </span>
        </div>
        <div class="text-center px-6 ">
            <Statistic end="9" class="text-3xl lg:text-6xl font-light text-primary-50" />
            <span> Product Applications </span>
        </div>
        <div class="text-center px-6 ">
            <Statistic end="15" class="text-3xl lg:text-6xl font-light text-primary-50" />
            <span> Partners </span>
        </div>
        <div class="text-center px-6 ">
            <Statistic end="5" class="text-3xl lg:text-6xl font-light text-primary-50" />
            <span> Certification </span>
        </div>
    </div>

</template>

<script setup>
import Statistic from '../elements/Statisic.vue'
</script>

<style lang="postcss" scoped>

</style>