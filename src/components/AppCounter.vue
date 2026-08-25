<script lang="ts" setup>
import { ref, defineProps } from 'vue'

const props = defineProps({
  initialCount: {
    type: Number,
    required: false,
    default: 0,
  },
})

const count = ref(props.initialCount)

const increment = () => count.value++
const decrement = () => count.value--
</script>

<template>
  <div>
    <h1>
      Clicks: <span id="count">{{ count }}</span>
    </h1>
    <button id="increment" @click="increment">Increment</button>
    <button id="decrement" @click="decrement">Decrement</button>
  </div>
</template>

<style scoped>
div {
  text-align: center;
}
</style>
