<script setup >
import Summary from '../elements/Summary.vue'
import Card from '../elements/Card.vue'
const data = [
    {
        title:'Loremipsum',
        description:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, est?',
        image:'https://images.pexels.com/photos/7150650/pexels-photo-7150650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
        title:'Loremipsum lagi',
        description:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, est?',
        image:'https://images.pexels.com/photos/1010269/pexels-photo-1010269.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
]
</script>
<template>
    <div class="flex gap-9">
            <Summary />

    </div>
</template>