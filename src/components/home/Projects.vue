<script setup lang="ts">
import BannerProject1 from "@/assets/projects/banner-project-1.png";
import BannerProject2 from "@/assets/projects/banner-project-2.png";
import BannerProject3 from "@/assets/projects/banner-project-3.png";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { ArrowRight } from "lucide-vue-next";
import { RouterLink } from "vue-router";
import Heading from "./Heading.vue";

interface ProjectItem {
  id: number;
  title: string;
  description: string;
  tags: string[];
  category: string;
  image: string;
}

const projects: ProjectItem[] = [
  {
    id: 1,
    title: "REST API Development",
    description: "Designed and developed a scalable REST API using Node.js and Express for a healthcare provider.",
    tags: ["Node.js", "Express", "MongoDB", "Docker"],
    category: "Backend",
    image: BannerProject1,
  },
  {
    id: 2,
    title: "React Dashboard",
    description: "Built a customizable analytics dashboard with real-time data visualization using React and D3.js.",
    tags: ["React", "TypeScript", "D3.js", "Material UI"],
    category: "Frontend",
    image: BannerProject2,
  },
  {
    id: 3,
    title: "Cross-platform Mobile App",
    description: "Developed a cross-platform mobile application for event management with offline capabilities.",
    tags: ["React Native", "Redux", "Firebase", "Expo"],
    category: "Mobile",
    image: BannerProject3,
  },
];
</script>

<template>
  <section class="py-16 mx-auto px-4 max-w-6xl">
    <div class="space-y-10">
      <Heading
        title="Studi Kasus Terbaru"
        subtitle="Proyek Saya"
        description="Beberapa proyek yang telah saya kerjakan, mulai dari landing page, aplikasi web interaktif hingga sistem informasi untuk pengelolaan data dan proses bisnis."
      />

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        <Card v-for="project in projects" :key="project.id" class="group overflow-hidden flex flex-col rounded-lg">
          <div class="w-full h-50 overflow-hidden">
            <a data-fancybox="projects" :href="project.image" :data-caption="project.title">
              <img :src="project.image" alt="" class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
            </a>
          </div>

          <CardHeader class="pt-4 lg:pt-6">
            <h3 class="font-semibold text-lg">{{ project.title }}</h3>
            <Badge variant="secondary" class="mt-1">{{ project.category }}</Badge>
          </CardHeader>

          <CardContent class="text-sm text-muted-foreground p-4 lg:p-6">
            {{ project.description }}
          </CardContent>

          <CardFooter class="space-y-4 lg:space-y-6 inline">
            <div class="flex flex-wrap gap-2">
              <Badge v-for="tag in project.tags" :key="tag" variant="outline">
                {{ tag }}
              </Badge>
            </div>

            <Button class="shadow-none flex items-center justify-center gap-2">
              Lihat Detail
              <ArrowRight />
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div class="w-full flex justify-center">
        <Button variant="outline" class="shadow-none flex items-center justify-center gap-2" asChild>
          <RouterLink to="/projects">
            Lihat Semua Proyek
            <ArrowRight class="w-4 h-4" />
          </RouterLink>
        </Button>
      </div>
    </div>
  </section>
</template>
