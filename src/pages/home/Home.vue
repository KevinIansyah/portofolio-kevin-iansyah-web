<script setup lang="ts">
import About from "@/components/home/About.vue";
import Experiences from "@/components/home/Experiences.vue";
import Hero from "@/components/home/Hero.vue";
import Projects from "@/components/home/Projects.vue";
import Technologies from "@/components/home/Technologies.vue";
import HomeLayout from "@/layouts/HomeLayout.vue";
</script>

<template>
  <HomeLayout>
    <Hero />
    <div class="bg-gradient-to-b from-background to-muted" id="tentang-saya">
      <About />
    </div>
    <div class="bg-gradient-to-b from-muted to-background" id="teknologi">
      <Technologies />
    </div>
    <div class="bg-background" id="proyek">
      <Projects />
    </div>
    <div class="bg-background" id="pengalaman">
      <Experiences />
    </div>
  </HomeLayout>
</template>
