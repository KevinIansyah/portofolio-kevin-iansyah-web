<script setup>
import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "lucide-vue-next";
</script>

<template>
  <section class="bg-background">
    <div class="min-h-screen mx-auto px-4 max-w-6xl relative flex items-center justify-center overflow-hidden lg:overflow-visible">
      <div class="absolute top-25 left-25 w-72 h-72 bg-purple-600/30 rounded-full blur-3xl animate-float-slow"></div>
      <div
        class="absolute top-40 left-0 md:top-50 md:left-120 lg:top-100 lg:left-150 xl:top-100 xl:left-100  w-64 h-64 bg-pink-500/30 rounded-full blur-3xl animate-float-medium"
      ></div>
      <div class="absolute bottom-25 right-25 w-72 h-72 bg-blue-500/30 rounded-full blur-3xl animate-float-fast"></div>
      <div
        class="absolute bottom-40 right-0 md:bottom-50 md:right-120 lg:bottom-100 lg:right-150 xl:bottom-100 xl:right-100 w-64 h-64 bg-yellow-500/30 rounded-full blur-3xl animate-float-slow"
      ></div>

      <div>
        <div class="flex justify-center">
          <div class="bg-transparent inline-flex items-center gap-x-2 rounded-full border p-1 ps-3 text-sm">
            Haii, Saya
            <span class="bg-muted/50 inline-flex items-center justify-center gap-x-2 rounded-full px-2.5 py-1.5 text-sm font-semibold">
              <ChevronRightIcon class="w-4 h-4" />
            </span>
          </div>
        </div>

        <div class="mx-auto mt-5 max-w-2xl text-center">
          <h1 class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Kevin Iansyah</h1>
        </div>

        <div class="mx-auto mt-5 max-w-3xl text-center">
          <p class="text-muted-foreground text-xl">
            Fullstack Web Developer berpengalaman dengan teknologi modern seperti Vue, React, Tailwind CSS, Laravel, dan NestJS.
          </p>
        </div>

        <div class="mt-8 flex justify-center gap-3">
          <Button size="lg" class="shadow-none">Lihat Proyek</Button>
          <Button size="lg" class="shadow-none" variant="outline">Unduh Resume</Button>
        </div>

        <div class="mt-5 flex items-center justify-center gap-x-1 sm:gap-x-3">
          <span class="text-muted-foreground text-sm">Dibangun dengan:</span>
          <span class="text-sm font-bold">Vue.js</span>
          <svg
            class="text-muted-foreground h-5 w-5"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M6 13L10 3" stroke="currentColor" stroke-linecap="round" />
          </svg>
          <span class="text-sm font-bold">NestJS</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes float {
  0% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(40px, -40px);
  }
  100% {
    transform: translate(0, 0);
  }
}

@keyframes float-reverse {
  0% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(-40px, 40px);
  }
  100% {
    transform: translate(0, 0);
  }
}

.animate-float-slow {
  animation: float 6s ease-in-out infinite;
}

.animate-float-medium {
  animation: float-reverse 5s ease-in-out infinite;
}

.animate-float-fast {
  animation: float 4s ease-in-out infinite;
}
</style>
