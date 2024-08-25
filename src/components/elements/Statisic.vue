<template>
    <div ref="counterElement">
      <span> {{ currentCount }} </span>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref, onMounted, watch } from 'vue';
  const props = defineProps({
    start:{
        type:Number,
        default:0
    },
    end:{
        type:Number,
        default:100
    }
  })
  // Initial counter value and target value
  const currentCount = ref(props.start);
  const targetCount = ref(props.end);
  
  // Element reference
  const counterElement = ref<HTMLElement | null>(null);
  
  // Function to increment counter
  const incrementCounter = () => {
    if (currentCount.value < targetCount.value) {
      currentCount.value++;
      requestAnimationFrame(incrementCounter);
    }
  };
  
  // Intersection Observer callback
  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        incrementCounter();
      }
    });
  };
  
  // Mount observer on component mount
  onMounted(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1, // Trigger when 10% of the element is visible
    });
  
    if (counterElement.value) {
      observer.observe(counterElement.value);
    }
  });
  </script>
  