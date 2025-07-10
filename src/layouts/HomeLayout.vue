<script setup lang="ts">
import AppHeader from "@/components/home/AppHeader.vue";
</script>

<template>
  <AppHeader />
  <div class="-mt-[64px]">
    <slot />
  </div>
</template>
