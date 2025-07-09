<script setup lang="ts">
import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "vue";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <h3 data-slot="card-title mb-4" :class="cn('font-semibold', props.class)">
    <slot />
  </h3>
</template>
