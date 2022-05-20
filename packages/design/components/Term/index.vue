<script setup lang="ts">
const link = ref('')
const title = ref('')
const description = ref('')
</script>

<template>
  <div
    w-600px
    text-left
  >
    <div flex flex-col inline-block>
      <div>
        <a :href="link" 
          text-green
        >
          <div inline-block>
            <cite not-italic>
              {{ link }}
              https://github.com
              <span> › vitest-dev › vitest</span>
            </cite>
          </div>
          <h3 inline-block
            my-0
            hover:underline
            mb-2
          >{{ title }}vitest-dev/vitest: A Vite-native test framework. It's fast!</h3>
        </a>
      </div>
      
      <span>{{ description }}Vitest. A blazing fast unit-test framework powered by Vite ⚡️ · Get StartedWhy Vitest. Features. Vite's config, transformers, resolvers, and plugins.</span>

    </div>
  </div>
</template>
