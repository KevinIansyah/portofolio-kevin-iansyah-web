<script setup lang="ts">
import About from "@/components/home/About.vue";
import Blogs from "@/components/home/Blogs.vue";
import Contact from "@/components/home/Contact.vue";
import Hero from "@/components/home/Hero.vue";
import Projects from "@/components/home/Projects.vue";
import Technologies from "@/components/home/Technologies.vue";
import HomeLayout from "@/layouts/HomeLayout.vue";
</script>

<template>
  <HomeLayout>
    <Hero />
    <About id="tentang-saya" />
    <Technologies id="teknologi" />
    <Projects id="proyek" />
    <Contact id="kontak" />
    <Blogs id="blog" />
  </HomeLayout>
</template>
