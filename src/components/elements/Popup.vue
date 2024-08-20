<script setup>
import { onMounted, ref } from 'vue';
import IconCloseVue from '../icons/IconClose.vue';
import gsap from 'gsap';



const open = ref(false)


onMounted(() => {
    setTimeout(() => {
  
        gsap.fromTo('.popup', {
            opacity: 0,
            scale: .4,
        }, {
            opacity: 1,
            scale: 1,
            duration: 1
        })
        open.value = true
    }, 5000);
})

</script>

<template>
<Transition>
    <div v-if="open"
        class=" fixed top-0 left-0 w-full h-full flex flex-col justify-center items-center  bg-black bg-opacity-70 z-50">
        <div class="popup max-w-xl w-full h-[560px] flex flex-col justify-end p-6 lg:p-8 rounded-xl bg-secondary-200  relative overflow-hidden"
            style="background-image: url('img-popup.jpg')">
            <button @click="open = false" class="absolute right-0 top-0 p-5 z-20 text-secondary-200 ">
                <IconCloseVue class="w-7 h-7" />
            </button>
            <div class="text-white relative z-10">
                <h4 class="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit</h4>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque veniam blanditiis doloremque nostrum
                    facere deleniti esse minus dolores animi possimus?</p>
                <button class="py-2 px-5 rounded-xl bg-secondary-200 text-primary-950 hover:bg-secondary-300 duration-300">
                    Read More
                </button>
            </div>
            <div class="absolute top-0 left-0 w-full h-full bg-primary-950 opacity-50"></div>
        </div>
    </div>
</Transition>
</template>
<style lang="postcss" scoped>
.popup {
    background-size: cover;
    background-repeat: no-repeat;
}

.v-enter-active,
.v-leave-active {
  @apply opacity-100 duration-300;
  .popup{
    @apply scale-100 
  }
}

.v-enter-from,
.v-leave-to {
  @apply opacity-0; 
  .popup{
    @apply scale-50;
  }
}
</style>