<script setup lang="ts">
import Heading from "@/components/home/Heading.vue";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const leftColumn = [
  {
    icon: "👋",
    title: "Haii, Saya Kevin Iansyah",
    description: `
      Saya adalah mahasiswa semester akhir jurusan <strong>Informatika</strong> di 
      <strong>Universitas Pembangunan Nasional Veteran Jawa Timur</strong>, dengan minat kuat dalam pengembangan 
      aplikasi web yang efisien, modern, dan mudah digunakan. Selama kuliah, saya aktif mengerjakan berbagai proyek baik secara individu maupun tim.
    `,
  },
  {
    icon: "📚",
    title: "Latar Belakang",
    description: `
      Selama perjalanan saya sebagai developer, saya banyak belajar secara mandiri melalui dokumentasi, komunitas, 
      dan proyek nyata — mulai dari landing page, aplikasi web, hingga sistem informasi.
    `,
  },
  {
    icon: "🧠",
    title: "Keahlian Saya",
    description: `
      Saya terbiasa menggunakan teknologi seperti <strong>Vue.js</strong>, <strong>React</strong>, 
      <strong>Tailwind CSS</strong>, <strong>Laravel</strong>, dan <strong>NestJS</strong>. 
      Saya juga memahami manajemen database dengan <strong>MySQL</strong> dan <strong>PostgreSQL</strong>, serta menggunakan <strong>REST API</strong> dan <strong>Git</strong> dalam proses pengembangan.
    `,
  },
];

const rightColumn = [
  {
    icon: "🎯",
    title: "Nilai yang Saya Pegang",
    description: `
      Bagi saya, kode yang baik tidak hanya harus jalan, tapi juga mudah dipelihara, konsisten, dan dimengerti oleh orang lain. 
      Saya percaya pada <em>clean code</em>, komunikasi yang jelas, dokumentasi yang rapi, dan kolaborasi tim yang sehat. 
      Saya juga senang belajar dari feedback untuk terus meningkatkan kualitas kerja saya di masa mendatang.
    `,
  },
  {
    icon: "🚀",
    title: "Apa yang Saya Cari?",
    description: `
      Saya selalu terbuka untuk tantangan baru, baik itu proyek freelance, part-time, maupun full-time. 
      Tujuan saya adalah terus berkembang, baik secara teknis maupun sebagai problem solver.
    `,
  },
  {
    icon: "🎮",
    title: "Fun Fact",
    description: `
      <ul class="list-disc list-outside ml-4">
        <li>Sering ngoding sambil dengerin lo-fi beats 🎧</li>
        <li>Bisa fokus ngoding 8 jam nonstop kalau udah nemu flow-nya 😄</li>
        <li>Kalau lagi pusing, lagunya saya ganti jadi dangdut New Cobra biar lebih semangat 💃</li>
      </ul>
    `,
  },
];
</script>

<template>
  <section class="mx-auto px-4 md:max-w-7xl lg:max-w-6xl">
    <div class="py-18 space-y-10">
      <Heading
        title="Tentang Saya"
        subtitle="PROFIL"
        description="Beberapa hal tentang latar belakang, keahlian, dan nilai yang saya pegang dalam perjalanan saya sebagai Fullstack Web Developer"
      />

      <div class="rounded-md flex flex-col md:flex-row gap-4 lg:gap-6">
        <div class="flex-1 space-y-4 lg:space-y-6">
          <div v-for="item in leftColumn" :key="item.title">
            <Card :class="cn('w-full', $attrs.class ?? '')">
              <div class="pt-4 px-4 lg:pt-6 lg:px-6 mb-2">
                <span class="text-2xl">{{ item.icon }}</span>
              </div>
              <CardHeader>
                <CardTitle
                  class="tracking-tight bg-clip-text text-transparent font-bold"
                  style="background-image: linear-gradient(to right, var(--color-chart-1), var(--color-chart-5))"
                >
                  {{ item.title }}
                </CardTitle>
                <CardDescription class="sr-only">Tentang saya bagian {{ item.title }}</CardDescription>
              </CardHeader>
              <CardContent class="px-4 pb-4 lg:px-6 lg:pb-6">
                <p v-html="item.description" class="text-sm text-foreground"></p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div class="flex-1 space-y-4 lg:space-y-6">
          <div v-for="item in rightColumn" :key="item.title">
            <Card :class="cn('w-full', $attrs.class ?? '')">
              <div class="pt-4 px-4 lg:pt-6 lg:px-6 mb-2">
                <span class="text-2xl">{{ item.icon }}</span>
              </div>
              <CardHeader>
                <CardTitle
                  class="tracking-tight bg-clip-text text-transparent font-bold"
                  style="background-image: linear-gradient(to right, var(--color-chart-1), var(--color-chart-5))"
                >
                  {{ item.title }}
                </CardTitle>
                <CardDescription class="sr-only">Tentang saya bagian {{ item.title }}</CardDescription>
              </CardHeader>
              <CardContent class="px-4 pb-4 lg:px-6 lg:pb-6">
                <p v-html="item.description" class="text-sm text-foreground"></p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
