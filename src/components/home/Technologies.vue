<script setup lang="ts">
import Heading from "@/components/home/Heading.vue";
import { techIcons } from "@/data/tech-icons";
import { useColorMode } from "@vueuse/core";
import { computed } from "vue";

const mode = useColorMode();

const isDark = computed(() => mode.value === "dark");
</script>

<template>
  <section class="mx-auto py-16 px-4 lg:max-w-6xl">
    <div class="space-y-14">
      <Heading
        title="Teknologi yang Digunakan"
        subtitle="Teknologi"
        description="Beberapa teknologi yang saya gunakan dalam pengembangan aplikasi web, mulai dari bahasa pemrograman hingga framework dan tools pendukung"
      />

      <div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4 lg:gap-6">
        <div
          v-motion-slide-visible-top
          :delay="500"
          v-for="(tech, index) in techIcons"
          :key="tech.id"
          :class="[
            'group flex flex-col items-center justify-center space-y-2 p-4 rounded-lg transition-all duration-300 bg-radial from-muted to-background',
            index === techIcons.length - 1 ? 'flex md:hidden lg:flex' : '',
          ]"
        >
          <img
            :src="isDark ? tech.dark : tech.light"
            :alt="tech.name"
            class="h-10 w-10 object-contain transition-transform duration-300 group-hover:scale-110"
          />
          <p class="text-sm text-center">
            {{ tech.name }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
