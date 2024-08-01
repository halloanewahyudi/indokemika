<script setup>
import Summary from '../elements/Summary.vue'
import Card from '../elements/Card.vue'
import AnimScroll from '../elements/AnimScroll.vue'
</script>
<template>
    <div class="max-w-screen-lg mx-auto px-6 section ">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
            <div class="lg:col-span-5 flex flex-col justify-end lg:pt-32">
                <anim-scroll delay="1">
                    <div class="rounded-xl overflow-hidden max-w-[400px]  ">
                        <img class="object-fill "
                            src="https://beta2024.indokemika-group.com/wp-content/uploads/2024/05/ww5854gam1c.jpg"
                            alt="">
                    </div>
                </anim-scroll>
            </div>
            <div class="lg:col-span-7">
                <anim-scroll>
                    <Summary class="max-w-[500px]" title="Possimus vitae fugit fuga veritatis eos ad dolorum" />
                </anim-scroll>
            </div>
        </div>
    </div>
</template>