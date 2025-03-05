<template>
  <div>
    <h2>{{ displayValue }}</h2>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";

const props = defineProps({
  targetValue: {
    type: Number,
    required: true,
  },
});

const speed = 1;

const displayValue = ref(0);

onMounted(() => {
  const interval = setInterval(() => {
    if (displayValue.value < props.targetValue) {
      displayValue.value += 1;
    } else {
      clearInterval(interval);
    }
  }, speed);
});
</script>

<style scoped>
h2 {
  font-size: 1em;
  font-weight: bold;
  text-align: center;
}
</style>
