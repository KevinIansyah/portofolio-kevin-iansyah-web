<script setup lang="ts">
import Heading from "@/components/home/Heading.vue";
import { techIcons } from "@/data/tech-icons";
import { useColorMode } from "@vueuse/core";
import { computed } from "vue";

const mode = useColorMode();

const isDark = computed(() => mode.value === "dark");
</script>

<template>
  <section class="mx-auto px-4 lg:max-w-4xl overflow-x-hidden">
    <div class="space-y-10">
      <Heading
        title="Teknologi yang Digunakan"
        subtitle="TEKNOLOGI"
        description="Beberapa teknologi yang saya gunakan dalam pengembangan aplikasi web, mulai dari bahasa pemrograman hingga framework dan tools pendukung"
      />

      <div class="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-7 gap-6 overflow-y-hidden">
        <div
          v-for="(tech, index) in techIcons"
          :key="tech.id"
          :class="['flex flex-col items-center justify-center space-y-2', index === techIcons.length - 1 ? 'hidden sm:flex' : '']"
          v-motion
          :delay="300"
          :initial="{ opacity: 0, y: 60 }"
          :visible="{ opacity: 1, y: 0 }"
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
