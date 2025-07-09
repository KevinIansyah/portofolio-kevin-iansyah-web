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
  <div class="text-center">
    <h3
      class="text-base font-bold tracking-tight bg-clip-text text-transparent"
      style="background-image: linear-gradient(to right, var(--color-chart-1), var(--color-chart-5))"
    >
      {{ subtitle }}
    </h3>
    <h2 class="text-2xl md:text-4xl font-bold font-serif text-foreground mb-4" :class="titleColor ?? ''">
      {{ title }}
    </h2>
    <p v-if="description" class="text-sm text-foreground max-w-md mx-auto" :class="descriptionColor ?? ''">
      {{ description }}
    </p>
  </div>
</template>
