<script setup lang="ts">
import AppFooter from "@/components/home/AppFooter.vue";
import AppHeader from "@/components/home/AppHeader.vue";
</script>

<template>
  <AppHeader />
  <div class="-mt-[64px]">
    <slot />
  </div>
  <!-- <div>
    <slot />
  </div> -->
  <AppFooter />
</template>
