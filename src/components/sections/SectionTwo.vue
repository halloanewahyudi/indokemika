<script setup>
import Summary from '../elements/Summary.vue'
import Card from '../elements/Card.vue'
import AnimScroll from '../elements/AnimScroll.vue'
</script>
<template>
    <section class="relative">
        <img src="https://images.pexels.com/photos/2569839/pexels-photo-2569839.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" class="rounded-xl absolute top-24 -left-12 w-[400px] h-[560px] object-fill">
        <div class="max-w-screen-lg mx-auto px-6 section ">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
            <div class="lg:col-span-5 flex flex-col justify-cemter  lg:pt-32">
                <anim-scroll >
                    <div class="rounded-xl overflow-hidden max-w-[400px]  ">
                        <img class="object-fill h-[380px]"
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
    </section>

</template>