<script setup lang="ts">
import heroImage from '@/assets/hero.gif';
import { Button } from '@/components/ui/button';
</script>

<template>
  <section
    class="w-full h-screen bg-cover bg-center flex items-center justify-center px-4 relative"
    :style="{ backgroundImage: `url(${heroImage})` }"
  >
    <div
      class="backdrop-blur-sm bg-black/20 rounded-xl p-8 max-w-xl text-center space-y-4"
    >
      <h1 class="text-white text-xl md:text-2xl font-medium mb-2">
        Halo, Saya
      </h1>
      <h2
        class="text-4xl md:text-5xl font-bold bg-clip-text text-transparent"
        style="
          background-image: linear-gradient(
            to right,
            var(--color-destructive),
            var(--color-chart-1),
            var(--color-chart-5)
          );
        "
      >
        Kevin Iansyah
      </h2>
      <p class="text-white text-sm md:text-base">
        Seorang Fullstack Web Developer dengan keahlian dalam pengembangan
        aplikasi web menggunakan teknologi modern seperti Vue, React, Tailwind
        CSS, Laravel, dan NestJS.
      </p>
      <div class="flex flex-wrap justify-center gap-4 pt-4">
        <Button as-child>
          <a href="#" class="font-semibold">Lihat Proyek</a>
        </Button>

        <Button as-child variant="outline">
          <a href="#" class="font-semibold">Unduh Resume</a>
        </Button>
      </div>

      <!-- <div class="flex justify-center gap-4 pt-6">
          <a href="https://github.com/kevin" target="_blank">
            <img src="/icons/gitahub.svg" class="h-6 w-6" alt="GitHub" />
          </a>
          <a href="https://linkedin.com/in/kevin" target="_blank">
            <img src="/icons/linkedin.svg" class="h-6 w-6" alt="LinkedIn" />
          </a>
          <a href="https://twitter.com/kevin" target="_blank">
            <img src="/icons/twitter.svg" class="h-6 w-6" alt="Twitter" />
          </a>
        </div> -->
    </div>
  </section>
</template>
