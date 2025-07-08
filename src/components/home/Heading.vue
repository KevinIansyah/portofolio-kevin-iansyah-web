<script setup lang="ts">
interface Props {
  title: string;
  description?: string;
  titleColor?: string;
  descriptionColor?: string;
}

defineProps<Props>();
</script>

<template>
  <div class="space-y-0.5 text-center">
    <h2
      class="text-2xl md:text-3xl font-semibold tracking-tight"
      :class="titleColor ?? 'text-muted-foreground'"
    >
      {{ title }}
    </h2>
    <p
      v-if="description"
      class="text-sm"
      :class="descriptionColor ?? ''"
    >
      {{ description }}
    </p>
  </div>
</template>
