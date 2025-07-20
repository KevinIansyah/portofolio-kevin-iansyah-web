<script setup lang="ts">
import Heading from "@/components/home/Heading.vue";
import { Button } from "@/components/ui/button";
import { Stepper, StepperDescription, StepperItem, StepperSeparator, StepperTitle } from "@/components/ui/stepper";
import { Check } from "lucide-vue-next";

const steps = [
  {
    step: 1,
    title: "Your details",
    description: "Provide your name and email address. We will use this information to create your account",
  },
  {
    step: 2,
    title: "Company details",
    description: "A few details about your company will help us personalize your experience",
  },
  {
    step: 3,
    title: "Invite your team",
    description: "Start collaborating with your team by inviting them to join your account. You can skip this step and invite them later",
  },
];
</script>

<template>
  <section class="mx-auto px-4 md:max-w-7xl lg:max-w-6xl">
    <div class="space-y-10">
      <Heading title="PENGALAMAN SAYA" description="Kumpulan pengalaman profesional saya dalam membangun dan mengelola aplikasi web" />

      <div class="leading-relaxed p-4 lg:p-6 rounded-md border bg-radial-[at_75%_75%] from-muted to-background">
        <Stepper orientation="vertical" class="mx-auto flex w-full max-w-xl flex-col justify-start gap-10">
          <StepperItem v-for="step in steps" :key="step.step" :step="step.step" state="completed" class="relative flex w-full items-start gap-6">
            <StepperSeparator
              v-if="step.step !== steps.length"
              class="absolute left-[18px] top-[38px] block h-[105%] w-0.5 shrink-0 rounded-full bg-primary"
            />

            <Button size="icon" class="rounded-full bg-primary">
              <Check class="size-5" />
            </Button>

            <div class="flex flex-col gap-1">
              <StepperTitle class="font-semibold text-base text-primary">
                {{ step.title }}
              </StepperTitle>
              <StepperDescription class="text-sm">
                {{ step.description }}
              </StepperDescription>
            </div>
          </StepperItem>
        </Stepper>
      </div>
    </div>
  </section>
</template>
