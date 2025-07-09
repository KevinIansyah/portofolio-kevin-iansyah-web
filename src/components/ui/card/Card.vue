<script setup lang="ts">
import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "vue";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <div
    data-slot="card"
    :class="cn('bg-radial-[at_50%_50%] from-muted to-background text-card-foreground flex flex-col rounded-xl border', props.class)"
  >
    <slot />
  </div>
</template>
