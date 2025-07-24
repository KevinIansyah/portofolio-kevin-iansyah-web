<script setup lang="ts">
import Heading from "@/components/home/Heading.vue";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { ArrowUpRight, BookOpen, Brain, Gamepad2, Hand, Rocket, Target } from "lucide-vue-next";
import { computed, ref } from "vue";

interface AboutItem {
  id: string;
  name: string;
  description: string;
  icon: any;
  color: string;
  principles: string[];
}

const aboutItems: AboutItem[] = [
  {
    id: "intro",
    name: "Haii, Saya Kevin Iansyah",
    description:
      "Saya adalah mahasiswa semester akhir jurusan Informatika di Universitas Pembangunan Nasional Veteran Jawa Timur, dengan minat kuat dalam pengembangan aplikasi web yang efisien, modern, dan mudah digunakan. Selama kuliah, saya aktif mengerjakan berbagai proyek baik secara individu maupun tim.",
    icon: Hand,
    color: "text-purple-500",
    principles: [
      "Fokus pada pengembangan aplikasi modern",
      "Berpengalaman dalam proyek individu dan tim",
      "Menerapkan praktik terbaik di setiap proyek",
    ],
  },
  {
    id: "background",
    name: "Latar Belakang",
    description:
      "Selama perjalanan saya sebagai developer, saya banyak belajar secara mandiri melalui dokumentasi, komunitas, dan proyek nyata — mulai dari landing page, aplikasi web, hingga sistem informasi.",
    icon: BookOpen,
    color: "text-pink-500",
    principles: [
      "Belajar mandiri dari dokumentasi dan komunitas",
      "Mengerjakan berbagai proyek nyata",
      "Pengalaman membangun aplikasi skala kecil hingga menengah",
    ],
  },
  {
    id: "skills",
    name: "Keahlian Saya",
    description:
      "Saya terbiasa menggunakan teknologi seperti Vue.js, React, Tailwind CSS, Laravel, dan NestJS. Saya juga memahami manajemen database dengan MySQL dan PostgreSQL, serta menggunakan REST API dan Git dalam proses pengembangan.",
    icon: Brain,
    color: "text-blue-500",
    principles: [
      "Menguasai frontend: Vue.js, React, Tailwind CSS",
      "Menguasai backend: Laravel, NestJS",
      "Berpengalaman dengan database MySQL & PostgreSQL",
      "Menggunakan Git secara rutin",
    ],
  },
  {
    id: "values",
    name: "Nilai yang Saya Pegang",
    description:
      "Bagi saya, kode yang baik tidak hanya harus jalan, tapi juga mudah dipelihara, konsisten, dan dimengerti oleh orang lain. Saya percaya pada *clean code*, komunikasi yang jelas, dokumentasi yang rapi, dan kolaborasi tim yang sehat. Saya juga senang belajar dari feedback untuk terus meningkatkan kualitas kerja saya di masa mendatang.",
    icon: Target,
    color: "text-amber-500",
    principles: [
      "Menulis kode yang mudah dibaca dan dipelihara",
      "Mengutamakan clean code dan dokumentasi rapi",
      "Terbuka pada feedback untuk perbaikan",
    ],
  },
  {
    id: "goals",
    name: "Apa yang Saya Cari?",
    description:
      "Saya selalu terbuka untuk tantangan baru, baik itu proyek freelance, part-time, maupun full-time. Tujuan saya adalah terus berkembang, baik secara teknis maupun sebagai problem solver.",
    icon: Rocket,
    color: "text-green-500",
    principles: [
      "Mencari peluang untuk tantangan baru",
      "Fokus pada pengembangan skill teknis dan soft skill",
      "Berambisi menjadi problem solver yang handal",
    ],
  },
  {
    id: "fun-fact",
    name: "Fun Fact",
    description:
      "Sering ngoding sambil dengerin lo-fi beats 🎧. Bisa fokus ngoding 8 jam nonstop kalau sudah nemu flow-nya 😄. Kalau lagi pusing, lagunya saya ganti jadi dangdut New Cobra biar semangat 💃.",
    icon: Gamepad2,
    color: "text-indigo-500",
    principles: ["Suka ngoding sambil mendengarkan musik", "Fokus tinggi saat menemukan flow", "Punya cara unik untuk menjaga mood"],
  },
];

const activeValue = ref<string>(aboutItems[0].id);

const currentValue = computed<AboutItem>(() => {
  return aboutItems.find((value) => value.id === activeValue.value) || aboutItems[0];
});
</script>

<template>
  <section>
    <div class="mx-auto py-16 px-4 max-w-6xl">
      <div class="space-y-14">
        <Heading
          title="Tentang Saya"
          subtitle="Profil"
          description="Beberapa hal tentang latar belakang, keahlian, dan nilai yang saya pegang dalam perjalanan saya sebagai Fullstack Web Developer"
        />

        <Tabs v-motion-slide-visible-top :delay="500" v-model="activeValue">
          <div class="flex justify-center">
            <div class="w-full lg:hidden">
              <Select v-model="activeValue">
                <SelectTrigger class="w-full shadow-none">
                  <SelectValue placeholder="Select a value" />
                </SelectTrigger>
                <SelectContent class="shadow-none">
                  <SelectItem v-for="value in aboutItems" :key="value.id" :value="value.id">
                    <div class="flex items-center gap-2">
                      <component :is="value.icon" :class="cn('h-4 w-4', value.color)" />
                      <span>{{ value.name }}</span>
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <TabsList class="hidden h-auto bg-transparent lg:flex gap-2">
              <TabsTrigger
                v-for="value in aboutItems"
                :key="value.id"
                :value="value.id"
                :class="cn('data-[state=active]:bg-muted gap-2', 'data-[state=active]:border data-[state=active]:shadow-none border-transparent ')"
              >
                <component :is="value.icon" :class="cn('h-4 w-4', value.color)" />
                <span>{{ value.name }}</span>
              </TabsTrigger>
            </TabsList>
          </div>

          <div v-motion-slide-visible-top :delay="500" class="bg-radial from-muted to-background p-4 lg:p-6 rounded-xl">
            <div class="space-y-6 md:col-span-6">
              <div class="mb-4 flex items-center gap-4">
                <div :class="cn('rounded-lg p-2.5', 'bg-primary/10')">
                  <component :is="currentValue.icon" :class="cn('h-7 w-7', currentValue.color)" />
                </div>
                <h3 class="text-xl font-bold">{{ currentValue.name }}</h3>
              </div>

              <div class="p-4 lg:p-6 bg-primary/10 rounded-lg">
                <p class="text-muted-foreground text-base">
                  {{ currentValue.description }}
                </p>
              </div>

              <div class="space-y-3 pt-2">
                <h4 class="font-medium">Prinsip Utama:</h4>
                <ul class="space-y-2">
                  <li v-for="(principle, i) in currentValue.principles" :key="i" class="text-bas flex items-start gap-2 e">
                    <ArrowUpRight :class="cn('mt-0.5 h-5 w-5', currentValue.color)" />
                    <span>{{ principle }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Tabs>
      </div>
    </div>
  </section>
</template>
