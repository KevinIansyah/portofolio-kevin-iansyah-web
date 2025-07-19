<script setup lang="ts">
import Heading from "@/components/home/Heading.vue";
import { techIcons } from "@/data/tech-icons";
import { useColorMode } from "@vueuse/core";
import { computed } from "vue";

const mode = useColorMode();

const isDark = computed(() => mode.value === "dark");
</script>

<template>
  <section class="mx-auto px-4 lg:max-w-5xl">
    <div class="space-y-10">
      <Heading
        title="Teknologi yang Digunakan"
        subtitle="TEKNOLOGI"
        description="Beberapa teknologi yang saya gunakan dalam pengembangan aplikasi web, mulai dari bahasa pemrograman hingga framework dan tools pendukung"
      />

      <div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4 lg:gap-6">
        <div
          v-motion-slide-visible-bottom
          :delay="300"
          v-for="(tech, index) in techIcons"
          :key="tech.id"
          :class="[
            'bg-radial from-muted to-background flex flex-col items-center justify-center space-y-2 p-4 rounded-md',
            index === techIcons.length - 1 ? 'flex md:hidden lg:flex' : '',
          ]"
        >
          <img
            :src="isDark ? tech.dark : tech.light"
            :alt="tech.name"
            class="h-10 w-10 object-contain transition-transform duration-200 hover:scale-110"
          />
          <p class="text-sm text-center">
            {{ tech.name }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
