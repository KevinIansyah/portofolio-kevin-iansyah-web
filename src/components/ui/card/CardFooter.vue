<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div
    data-slot="card-footer"
    :class="cn('flex items-center [.border-t]:pt-6 px-4 lg:px-6 pb-4 lg:pb-6', props.class)"
  >
    <slot />
  </div>
</template>
