<script setup lang="ts">
import { ref } from 'vue'
const link = ref('')

</script>

<template>
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
