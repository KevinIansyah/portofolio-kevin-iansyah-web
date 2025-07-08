<script setup lang="ts">
interface Props {
  title: string;
  description?: string;
}

defineProps<Props>();
</script>

<template>
  <div class="space-y-0.5 text-center">
    <h2 class="text-3xl font-semibold tracking-tight text-muted-foreground">
      {{ title }}
    </h2>
    <p v-if="description" class="text-sm">
      {{ description }}
    </p>
  </div>
</template>
