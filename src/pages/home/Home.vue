<script setup lang="ts">
import About from '@/components/home/About.vue';
import Hero from '@/components/home/Hero.vue';
import Projects from '@/components/home/Projects.vue';
import Skills from '@/components/home/Skills.vue';
import HomeLayout from '@/layouts/HomeLayout.vue';
</script>

<template>
  <HomeLayout>
    <Hero />
    <div class="bg-background" id="tentang-saya">
      <About />
    </div>
    <div class="bg-muted py-15" id="kemampuan">
      <Skills />
    </div>
    <div class="bg-background" id="proyek">
      <Projects />
    </div>
  </HomeLayout>
</template>
