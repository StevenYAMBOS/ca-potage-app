<template>
  <div class="text-black min-h-screen bg-white flex items-center justify-center">
    <div
      class="relative flex items-center w-2/4 h-12 rounded-lg focus-within:shadow-lg bg-myAntiFlashWhite overflow-hidden">
      <div class="grid place-items-center h-full w-12 text-gray-300">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>

      <input class="peer bg-myAntiFlashWhite h-full w-full outline-none text-sm text-gray-700 pr-2" type="text"
        id="search" placeholder="Recherchez vos produits ici !" />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "SearchBar",
  components: {
  },
}
</script>