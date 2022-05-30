<!-- https://stackoverflow.com/questions/65946335/how-to-make-parent-div-activate-styling-of-child-div-for-hover-and-active -->
<template>
  <a href="/dashboard">
      <div class="flex flex-row space-x-8 w-72 text-lg pb-3 text-gray-200"> 
          
          <div class="h-8 w-8 rounded transform -translate-x-7 hover:bg-green-300"></div>

          <div class="flex flex-row items-center space-x-8 transform -translate-x-10 -translate-y-1">
              <i class="bi bi-columns-gap hover:text-green-300 transform translate-x-1"></i>
              <h2 class="hover:font-semibold hover:text-green-300 transform translate-y-1 text-base">Dashboard</h2>
          </div>
      </div>
  </a>
</template>
