<script setup lang="ts">
import Heading from '@/components/home/Heading.vue';
import { techIcons } from '@/data/tech-icons';
import { useColorMode } from '@vueuse/core';
import { computed } from 'vue';

const mode = useColorMode();

const isDark = computed(() => mode.value === 'dark');
</script>

<template>
  <section class="w-full h-auto">
    <div class="my-15 space-y-8">
      <Heading
        title="Kemampuan Teknis"
        description="Bahasa pemrograman, framework, dan tools yang saya gunakan dalam pengembangan"
      />

      <div
        class="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 gap-6"
      >
        <div
          v-for="(tech, index) in techIcons"
          :key="tech.id"
          :class="[
            'flex flex-col items-center justify-center space-y-2',
            index === techIcons.length - 1 ? 'hidden sm:flex' : '',
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
