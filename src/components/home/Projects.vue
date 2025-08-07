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
    title: "GA Service PT SIER",
    description:
      "Platform internal PT Surabaya Industrial Estate Rungkut untuk manajemen peminjaman fasilitas kantor seperti ruang dan kendaraan, dilengkapi fitur pelaporan otomatis untuk meningkatkan efisiensi operasional.",
    tags: ["Laravel", "Blade", "MySQL"],
    category: "Fullstack",
    image: BannerProject1,
  },
  {
    id: 2,
    title: "Clarities Laboratorium Hukum",
    description:
      "Platform informasi dan manajemen Laboratorium Hukum UPN Veteran Jatim, mencakup pengelolaan konten, modul, jadwal praktikum, kurikulum, peminjaman ruang, berita, dan pelatihan.",
    tags: ["Laravel", "Blade", "MySQL"],
    category: "Fullstack",
    image: BannerProject2,
  },
  {
    id: 3,
    title: "Mexpo CBT",
    description:
      "Platform ujian berbasis komputer HIMA S1 Manajemen Universitas Airlangga untuk pelaksanaan Management Olympiad (MO), dengan sistem penilaian otomatis guna mendukung kompetisi yang efisien.",
    tags: ["Laravel", "Blade", "MySQL"],
    category: "Fullstack",
    image: BannerProject3,
  },
];
</script>

<template>
  <section class="py-16 mx-auto px-4 max-w-6xl">
    <div class="space-y-14">
      <Heading
        title="Studi Kasus Terbaru"
        subtitle="Proyek Saya"
        description="Beberapa proyek yang telah saya kerjakan, mulai dari landing page, aplikasi web interaktif hingga sistem informasi untuk pengelolaan data dan proses bisnis."
      />

      <div class="space-y-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          <Card
            v-motion-fade-visible
            :delay="500"
            v-for="project in projects"
            :key="project.id"
            class="group overflow-hidden flex flex-col rounded-lg"
          >
            <div class="w-full h-50 overflow-hidden">
              <a data-fancybox="projects" :href="project.image" :data-caption="project.title">
                <img
                  :src="project.image"
                  :alt="project.title"
                  class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </a>
            </div>

            <CardHeader class="pt-4 lg:pt-6">
              <h3 class="font-semibold text-lg">{{ project.title }}</h3>
              <Badge variant="secondary" class="mt-1">{{ project.category }}</Badge>
            </CardHeader>

            <CardContent class="text-sm text-muted-foreground line-clamp-3 m-4 lg:m-6">
              {{ project.description }}
            </CardContent>

            <CardFooter class="space-y-4 lg:space-y-6 inline">
              <div class="flex flex-wrap gap-2">
                <Badge v-for="tag in project.tags" :key="tag" variant="outline">
                  {{ tag }}
                </Badge>
              </div>

              <Button variant="ghost" class="w-full shadow-none flex items-center justify-center gap-2">
                Lihat Detail
                <ArrowRight />
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div v-motion-fade-visible :delay="500" class="flex justify-center">
          <Button variant="outline" class="w-full max-w-sm shadow-none" asChild>
            <RouterLink to="/projects"> Lihat Semua Proyek </RouterLink>
          </Button>
        </div>
      </div>
    </div>
  </section>
</template>
