<script setup lang="ts">
import { countState } from '@store/CounterStore';
import { useStore } from '@nanostores/vue';

const $count = useStore(countState);
</script>

<template>
  <div class="flex items-center gap-8 justify-center">
    <button @click="countState.set($count + 1)">+</button>
    <p>Vue count is: {{ $count }}</p>
    <button @click="countState.set($count - 1)">-</button>
  </div>
</template>
