<script setup lang="ts">
import { Term } from '../../../../design'
</script>

<template>
  <header class="flex gap-x-10 justify-between pl-20 pr-10 items-center">
    <form action="search" flex
      items-center
    >
      <a href="/">
        <div class="i-logos-duckduckgo"
          text-3xl
        ></div>
      </a>
      <label class="relative inline-block" 
        ml-2
      >
        <span class="sr-only">Search</span>
        <span class="absolute inset-y-0 left-0 flex items-center pl-2">
          <div i-carbon:search></div>
        </span>
        <input class="placeholder:italic placeholder:text-slate-400 block bg-white w-100 border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="text" name="q"/>
      </label>
      <button type="submit" class="px-5 py-2 bg-sky-500 rounded-full ml-2 hover:bg-sky-600 focus:outline-none active:bg-sky-700 focus:ring focus:ring-sky-30 font-semibold text-white text-sm leading-5">搜索</button>
    </form>
    <div
      flex
    >
      <div class="i-twemoji-grinning-face-with-smiling-eyes hover:i-twemoji-face-with-tears-of-joy" 
        text-3xl
      />

    </div>
  </header>

  <div>
    <Term 
      v-for="(item, index) in 10" key="index"
      class="
        mt-6
        ml-20
        first:mt-12
      "
    ></Term>
      
  </div>

</template>
