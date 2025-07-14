<script setup lang="ts">
import heroImage from "@/assets/hero.gif";
import { Button } from "@/components/ui/button";
</script>

<template>
  <section
    class="w-full h-screen bg-cover bg-center flex items-center justify-center px-4 relative"
    :style="{ backgroundImage: `url(${heroImage})` }"
  >
    <div v-motion-fade-visible :delay="300" class="backdrop-blur-sm bg-black/20 rounded-md p-4 md:p-6 max-w-xl text-center shadow-xs">
      <div v-motion-fade-visible :delay="700">
        <h3 class="text-white text-lg font-medium mb-2">👋 Haii, Saya</h3>
        <h2
          class="text-4xl md:text-5xl font-bold bg-clip-text text-transparent font-serif mb-4"
          style="background-image: linear-gradient(to right, var(--color-chart-1), var(--color-chart-5))"
        >
          Kevin Iansyah
        </h2>
        <p class="text-white text-sm">
          Seorang Fullstack Web Developer dengan keahlian dalam pengembangan aplikasi web menggunakan teknologi modern seperti Vue, React, Tailwind
          CSS, Laravel, dan NestJS.
        </p>
        <div class="flex justify-center mx-auto gap-4 pt-8 w-full md:w-[60%]">
          <Button
            as-child
            variant="outline"
            class="text-background bg-transparent border-background hover:bg-input/20 hover:text-background dark:border-foreground dark:text-foreground dark:bg-transparent dark:hover:bg-input/20 shadow-none rounded-full flex-1"
          >
            <a href="#"><span class="mr-1">📁</span>Lihat Proyek </a>
          </Button>

          <Button
            as-child
            variant="outline"
            class="text-background bg-transparent border-background hover:bg-input/20 hover:text-background dark:border-foreground dark:text-foreground dark:bg-transparent dark:hover:bg-input/20 shadow-none rounded-full flex-1"
          >
            <a href="#"><span class="mr-1">📝</span>Unduh Resume </a>
          </Button>
        </div>
      </div>
    </div>
  </section>
</template>
