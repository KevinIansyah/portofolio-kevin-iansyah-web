<script setup lang="ts">
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowRight, Calendar } from "lucide-vue-next";
import { computed, ref } from "vue";
import Heading from "./Heading.vue";

interface BlogItem {
  id: number;
  title: string;
  category: string;
  date: string;
  imageUrl: string;
  excerpt: string;
}

const blogs: BlogItem[] = [
  {
    id: 1,
    title: "Bagaimana Laravel Membantu Developer Membangun Aplikasi Skala Besar",
    category: "Laravel",
    date: "18 April 2023",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    excerpt:
      "Laravel menawarkan struktur yang rapi, fitur bawaan yang kuat, dan ekosistem yang kaya — membuatnya cocok untuk proyek besar dan kompleks.",
  },
  {
    id: 2,
    title: "Mengapa React Tetap Menjadi Pilihan Favorit untuk UI Modern",
    category: "React",
    date: "12 April 2023",
    imageUrl: "https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80",
    excerpt:
      "React memberikan efisiensi dan fleksibilitas dalam membangun antarmuka pengguna. Pelajari alasan mengapa library ini terus mendominasi ekosistem frontend.",
  },
  {
    id: 3,
    title: "Autentikasi dan Otorisasi di Aplikasi NestJS dengan JWT",
    category: "NestJS",
    date: "5 April 2023",
    imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    excerpt: "Pelajari cara implementasi sistem login aman menggunakan JWT di aplikasi backend berbasis NestJS.",
  },
  {
    id: 4,
    title: "Tren Web Development 2025: Teknologi dan Praktik yang Perlu Diikuti",
    category: "Tren",
    date: "29 Maret 2023",
    imageUrl: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80",
    excerpt: "Mulai dari SSR, Edge Functions, hingga AI-assisted coding — ini dia tren web development yang akan mendominasi tahun 2025.",
  },
  {
    id: 5,
    title: "Optimasi Performa Aplikasi React dengan Lazy Loading dan Memoization",
    category: "Frontend",
    date: "22 Maret 2023",
    imageUrl: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80",
    excerpt:
      "React memiliki banyak fitur untuk meningkatkan performa, mulai dari code-splitting hingga memoization. Ketahui cara penerapannya di proyek nyata.",
  },
  {
    id: 6,
    title: "Membangun Aplikasi Web Ramah Lingkungan: Praktik Pengembangan Berkelanjutan",
    category: "Sustainability",
    date: "15 Maret 2023",
    imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    excerpt: "Ketahui bagaimana pengembang dapat membangun aplikasi web yang hemat energi, cepat, dan berdampak kecil terhadap lingkungan.",
  },
];

const filters = ["Semua", "React", "Laravel", "NestJS"];
const activeFilter = ref("Semua");
const searchQuery = ref("");

const filteredBlogs = computed(() => {
  return blogs.filter((blog) => {
    const matchCategory = activeFilter.value === "Semua" || blog.category === activeFilter.value;
    const matchSearch = blog.title.toLowerCase().includes(searchQuery.value.toLowerCase());
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
        title="Artikel & Insight"
        subtitle="Blog"
        description="Berbagi pengetahuan, pengalaman, serta pandangan tentang teknologi, pengembangan web, dan tren industri terkini."
      />

      <div class="space-y-4 lg:space-y-6">
        <div class="flex flex-col lg:flex-row gap-4 lg:gap-6 items-center justify-between">
          <div class="w-full flex justify-center lg:justify-start">
            <Input v-model="searchQuery" placeholder="Cari blog atau kategori..." class="w-full md:w-[50%] lg:w-[80%]" />
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
        <p class="text-sm text-muted-foreground text-center lg:text-start">Menampilkan {{ filteredBlogs.length }} dari {{ blogs.length }} blog</p>
      </div>

      <div
        v-if="filteredBlogs.length === 0"
        class="flex flex-col items-center justify-center border border-dashed rounded-md p-10 text-center text-muted-foreground"
      >
        <p class="mb-4">Tidak ada blog yang cocok dengan filter Anda</p>
        <Button @click="clearFilters">Hapus filter</Button>
      </div>

      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        <Card v-motion-fade-visible :delay="500" v-for="blog in filteredBlogs" :key="blog.id" class="group flex h-full flex-col overflow-hidden">
          <div class="w-full h-50 overflow-hidden">
            <img :src="blog.imageUrl" :alt="blog.title" class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
            <div class="absolute top-3 left-3">
              <Badge class="bg-primary hover:bg-primary/90">
                {{ blog.category }}
              </Badge>
            </div>
          </div>

          <CardHeader class="pt-4 lg:pt-6">
            <div class="text-muted-foreground mb-2 flex items-center text-xs sm:mb-3 sm:text-sm">
              <Calendar class="mr-1 h-3 w-3" />
              <span>{{ blog.date }}</span>
            </div>
            <h3 class="line-clamp-2 font-semibold text-lg">
              {{ blog.title }}
            </h3>
          </CardHeader>

          <CardContent class="text-sm text-muted-foreground line-clamp-3 m-4 lg:m-6">
            {{ blog.excerpt }}
          </CardContent>

          <CardFooter class="inline">
            <Button variant="ghost" class="w-full shadow-none flex items-center justify-center gap-2">
              Baca Blog
              <ArrowRight />
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  </section>
</template>
