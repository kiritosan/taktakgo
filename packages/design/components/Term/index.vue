<script setup lang="ts">
import { ref } from 'vue'
const link = ref('')

</script>

<template>
    <button
    class="
      py-2
      px-4
      font-semibold
      rounded-lg
      shadow-md
      text-white
      bg-green-500
      hover:bg-green-700
      border-none
      cursor-pointer
    "
  >
    Click me
  </button>
  <div
    flex

    
    ring-1

  >
    <a :href="link" ring>https://test.com</a>
    <span>content</span>

    <div>block</div>
    <span>description</span>
  </div>
</template>
