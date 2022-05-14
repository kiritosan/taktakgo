<script setup lang="ts">
import logo from "~/asset/logo.svg"

</script>

<template>
<div mb-8>
  <img :src="logo" alt="logo" w-60 mx-auto>
</div>
<form action="search"
  flex row px-100 justify-between
>
  <label class="relative block basis-7/10" 
  >
    <span class="sr-only">Search</span>
    <span class="absolute inset-y-0 left-0 flex items-center pl-2">
      <div i-carbon:search></div>
    </span>
    <input class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="text" name="q"/>
  </label>
  <button class="basis-2/10 bg-sky-500 hover:bg-sky-600 focus:outline-none focus:ring focus:ring-sky-300 active:bg-sky-700 px-5 py-2 text-sm leading-5 rounded-full font-semibold text-white">
    搜索
  </button>

</form>
<div mt-8 font-semibold text-3xl>
  <p>不堪网络追踪之扰？我们可以助你一臂之力。</p>
</div>
<div mt-26 font-semibold>
  <p>遍及所有设备的隐私保护</p>
</div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
