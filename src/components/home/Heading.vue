<script setup lang="ts">
interface Props {
  title: string;
  subtitle?: string;
  description?: string;
  titleColor?: string;
  descriptionColor?: string;
}

defineProps<Props>();
</script>

<template>
  <div v-motion-fade-visible :delay="500" class="mx-auto max-w-3xl space-y-4 text-center">
    <div class="bg-primary/10 text-primary inline-block rounded-lg px-3 py-1 text-sm">{{ subtitle }}</div>
    <h2 class="text-3xl font-bold tracking-tight md:text-4xl">{{ title }}</h2>
    <p class="text-muted-foreground">
      {{ description }}
    </p>
  </div>
</template>
