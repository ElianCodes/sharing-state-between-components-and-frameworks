<script setup lang="ts">
import { ref } from 'vue';

const count = ref(0);
</script>

<template>
  <div class="flex items-center gap-8 justify-center">
    <button @click="count++">+</button>
    <p>Vue count is: {{ count }}</p>
    <button @click="count--">-</button>
  </div>
</template>
