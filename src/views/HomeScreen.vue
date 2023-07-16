<template>
  <NavBar />
  <SearchBar />
</template>

<script lang="ts">
import SearchBar from '@/components/SearchBar.vue';
import NavBar from '../components/NavBar.vue';

export default {
  components: {
    // eslint-disable-next-line vue/no-unused-components
    NavBar,
    // eslint-disable-next-line vue/no-unused-components
    SearchBar,
  },
}
</script>
