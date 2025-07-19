<script setup lang="ts">
import BannerProject1 from "@/assets/projects/banner-project-1.png";
import BannerProject2 from "@/assets/projects/banner-project-2.png";
import BannerProject3 from "@/assets/projects/banner-project-3.png";
import FancyBox from "@/components/base/FancyBox.vue";
import Heading from "@/components/home/Heading.vue";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-vue-next";
import { computed, onMounted, onUnmounted, ref } from "vue";
import { RouterLink } from "vue-router";

const screenWidth = ref(window.innerWidth);
const updateWidth = () => (screenWidth.value = window.innerWidth);

onMounted(() => window.addEventListener("resize", updateWidth));
onUnmounted(() => window.removeEventListener("resize", updateWidth));

const projects = [
  {
    id: 1,
    title: "GA Service PT SIER",
    description:
      "Platform internal PT Surabaya Industrial Estate Rungkut untuk manajemen peminjaman fasilitas kantor seperti ruang dan kendaraan, dilengkapi fitur pelaporan otomatis untuk meningkatkan efisiensi operasional.",
    image: BannerProject1,
    link: "#",
  },
  {
    id: 2,
    title: "Clarities Laboratorium Hukum",
    description:
      "Platform informasi dan manajemen laboratorium hukum UPN Veteran Jatim, mencakup pengelolaan konten, modul, jadwal praktikum, kurikulum, peminjaman ruang, berita, dan pelatihan.",
    image: BannerProject2,
    link: "#",
  },
  {
    id: 3,
    title: "Mexpo CBT",
    description:
      "Platform digital Himpunan Mahasiswa S1 Manajemen Universitas Airlangga untuk pelaksanaan dan manajemen ujian Management Olympiad (MO), dilengkapi sistem penilaian otomatis untuk mendukung jalannya kompetisi secara efisien.",
    image: BannerProject3,
    link: "#",
  },
  // {
  //   id: 4,
  //   title: "CSIRT PT SIER",
  //   description:
  //     "Platform internal PT Surabaya Industrial Estate Rungkut untuk penyampaian informasi dan edukasi terkait keamanan siber, dilengkapi fitur pelaporan insiden untuk meningkatkan respons dan mitigasi ancaman.",
  //   image: BannerProject4,
  //   link: "#",
  // },
  // {
  //   id: 5,
  //   title: "Clarities Laboratorium Hukum",
  //   description:
  //     "Platform informasi dan manajemen laboratorium hukum UPN Veteran Jatim, mencakup pengelolaan konten, modul, jadwal praktikum, kurikulum, peminjaman ruang, berita, dan pelatihan.",
  //   image: BannerProject2,
  //   link: "#",
  // },
  // {
  //   id: 6,
  //   title: "CSIRT PT SIER",
  //   description:
  //     "Platform internal PT Surabaya Industrial Estate Rungkut untuk penyampaian informasi dan edukasi terkait keamanan siber, dilengkapi fitur pelaporan insiden untuk meningkatkan respons dan mitigasi ancaman.",
  //   image: BannerProject4,
  //   link: "#",
  // },
];

const visibleProjects = computed(() => {
  // if (screenWidth.value < 768) return projects.slice(0, 3);
  if (screenWidth.value < 1024) return projects.slice(0, 4);
  return projects;
});
</script>

<template>
  <section class="mx-auto px-4 md:max-w-6xl">
    <div class="py-18">
      <div class="px-4 lg:px-6 py-18 rounded-md bg-muted space-y-10">
        <Heading
          title="Studi Kasus Terbaru"
          subtitle="PROYEK SAYA"
          description="Beberapa proyek yang telah saya kerjakan, mulai dari landing page, aplikasi web interaktif hingga sistem informasi untuk pengelolaan data dan proses bisnis."
        />

        <FancyBox>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            <Card
              v-motion-slide-visible-bottom
              :delay="300"
              v-for="project in visibleProjects"
              :key="project.id"
              :class="cn('w-full gap-6', $attrs.class ?? '')"
            >
              <CardContent class="px-2 pt-2">
                <div class="w-full h-[200px] overflow-hidden rounded-md">
                  <a data-fancybox="projects" :href="project.image" :data-caption="project.title">
                    <img :src="project.image" alt="" class="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
                  </a>
                </div>
              </CardContent>
              <CardHeader>
                <CardTitle
                  class="tracking-tight bg-clip-text text-transparent font-bold"
                  style="background-image: linear-gradient(to right, var(--color-chart-1), var(--color-chart-5))"
                >
                  {{ project.title }}
                </CardTitle>
                <CardDescription class="text-foreground line-clamp-2">
                  {{ project.description }}
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <router-link :to="project.link" class="flex gap-2 items-center text-sm font-semibold">
                  Learn more <ArrowRight class="size-4" />
                </router-link>
              </CardFooter>
            </Card>
          </div>
        </FancyBox>

        <div class="flex w-full justify-center">
          <Button variant="project">
            <router-link to="#" class="flex gap-2 text-sm items-center">Explore All Projects <ArrowRight class="size-4" /></router-link>
          </Button>
        </div>
      </div>
    </div>
  </section>
</template>
