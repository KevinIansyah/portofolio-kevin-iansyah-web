<script lang="ts" setup>
import { cn } from "@/lib/utils";
import { reactiveOmit } from "@vueuse/core";
import type { StepperTriggerProps } from "reka-ui";
import { StepperTrigger, useForwardProps } from "reka-ui";
import type { HTMLAttributes } from "vue";

const props = defineProps<StepperTriggerProps & { class?: HTMLAttributes["class"] }>();

const delegatedProps = reactiveOmit(props, "class");

const forwarded = useForwardProps(delegatedProps);
</script>

<template>
  <StepperTrigger v-bind="forwarded" :class="cn('p-1 flex flex-col items-center text-center gap-1 rounded-md', props.class)">
    <slot />
  </StepperTrigger>
</template>
