<script setup lang="ts">
import BannerProject1 from "@/assets/projects/banner-project-1.png";
import BannerProject2 from "@/assets/projects/banner-project-2.png";
import BannerProject3 from "@/assets/projects/banner-project-3.png";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-vue-next";
import { computed, ref } from "vue";
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
  // {
  //   id: 4,
  //   title: "Data Pipeline Architecture",
  //   description: "Designed and implemented a data processing pipeline for real-time analytics using Apache Kafka.",
  //   tags: ["Python", "Kafka", "AWS", "Airflow"],
  //   category: "Fullstack",
  //   image: "/images/data-pipeline.jpg",
  // },
  // {
  //   id: 5,
  //   title: "E-commerce Website",
  //   description: "Created a modern e-commerce platform with advanced filtering and payment integration.",
  //   tags: ["Next.js", "Stripe", "Tailwind CSS", "Prisma"],
  //   category: "Frontend",
  //   image: "/images/ecommerce-website.jpg",
  // },
  // {
  //   id: 6,
  //   title: "DevOps CI/CD Pipeline",
  //   description: "Set up automated CI/CD pipelines for a microservices architecture using GitHub Actions and Kubernetes.",
  //   tags: ["Kubernetes", "Docker", "GitHub Actions", "Terraform"],
  //   category: "Fullstack",
  //   image: "/images/devops-pipeline.jpg",
  // },
  // {
  //   id: 7,
  //   title: "iOS Fitness Tracker",
  //   description: "Developed a native iOS fitness tracking app with HealthKit integration and social features.",
  //   tags: ["Swift", "UIKit", "HealthKit", "CoreData"],
  //   category: "Mobile",
  //   image: "/images/ios-fitness-tracker.jpg",
  // },
  // {
  //   id: 8,
  //   title: "Blockchain Explorer",
  //   description: "Designed and developed a web-based blockchain explorer with detailed transaction visualization.",
  //   tags: ["Vue.js", "Web3.js", "GraphQL", "Node.js"],
  //   category: "Frontend",
  //   image: "/images/blockchain-explorer.jpg",
  // },
  // {
  //   id: 9,
  //   title: "Serverless Backend",
  //   description: "Built a cost-effective serverless backend using AWS Lambda and API Gateway for a startup.",
  //   tags: ["AWS Lambda", "DynamoDB", "Serverless", "Node.js"],
  //   category: "Backend",
  //   image: "/images/serverless-backend.jpg",
  // },
];

const filters = ["Semua", "Backend", "Frontend", "Mobile", "Fullstack"];
const activeFilter = ref("Semua");
const searchQuery = ref("");

const filteredProjects = computed(() => {
  return projects.filter((project) => {
    const matchCategory = activeFilter.value === "Semua" || project.category === activeFilter.value;
    const matchSearch = project.title.toLowerCase().includes(searchQuery.value.toLowerCase());
    return matchCategory && matchSearch;
  });
});

function setFilter(filter: string) {
  activeFilter.value = filter;
  searchQuery.value = "";
}

function clearFilters() {
  activeFilter.value = "Semua";
  searchQuery.value = "";
}
</script>

<template>
  <section class="mt-16 py-16 mx-auto px-4 max-w-6xl">
    <div class="space-y-14">
      <Heading
        title="Studi Kasus Terbaru"
        subtitle="Proyek Saya"
        description="Beberapa proyek yang telah saya kerjakan, mulai dari landing page, aplikasi web interaktif hingga sistem informasi untuk pengelolaan data dan proses bisnis."
      />

      <div class="space-y-4 lg:space-y-6">
        <div class="flex flex-col lg:flex-row gap-4 lg:gap-6 items-center justify-between">
          <div class="w-full flex justify-center lg:justify-start">
            <Input v-model="searchQuery" placeholder="Search projects or technologies..." class="w-full md:w-[50%] lg:w-[80%]" />
          </div>

          <div class="w-full flex gap-2 flex-wrap justify-center lg:justify-end">
            <Button
              v-for="filter in filters"
              :key="filter"
              variant="outline"
              :class="['shadow-none', { 'bg-primary text-primary-foreground dark:bg-primary dark:text-primary-foreground': activeFilter === filter }]"
              @click="setFilter(filter)"
            >
              {{ filter }}
            </Button>
          </div>
        </div>
        <p class="text-sm text-muted-foreground text-center lg:text-start">
          Menampilkan {{ filteredProjects.length }} dari {{ projects.length }} proyek
        </p>
      </div>

      <div
        v-if="filteredProjects.length === 0"
        class="flex flex-col items-center justify-center border border-dashed rounded-md p-10 text-center text-muted-foreground"
      >
        <p class="mb-4">Tidak ada proyek yang cocok dengan kriteria kamu</p>
        <Button @click="clearFilters">Bersihkan filter</Button>
      </div>

      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        <Card v-motion-fade-visible :delay="500" v-for="project in projects" :key="project.id" class="group overflow-hidden flex flex-col rounded-lg">
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
    </div>
  </section>
</template>
