<script setup lang="ts">
import Hero from '@/components/home/Hero.vue';
import Projects from '@/components/home/Projects.vue';
import Skills from '@/components/home/Skills.vue';
import HomeLayout from '@/layouts/HomeLayout.vue';
</script>

<template>
  <HomeLayout>
    <Hero />
    <div class="mx-auto px-4 md:max-w-7xl lg:max-w-6xl">
      <Skills />
    </div>
    <div class="bg-muted">
      <div class="mx-auto px-4 md:max-w-7xl lg:max-w-6xl">
        <Projects />
      </div>
    </div>
  </HomeLayout>
</template>
