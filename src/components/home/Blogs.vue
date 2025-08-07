<script setup lang="ts">
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { ArrowRight, Calendar, ChevronLeft, ChevronRight } from "lucide-vue-next";
import { computed, nextTick, onMounted, onUnmounted, ref, watch } from "vue";
import { RouterLink } from "vue-router";
import Heading from "./Heading.vue";
import HeadingLeft from "./HeadingLeft.vue";

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

const currentIndex = ref(0);
const isSwiping = ref(false);
const startX = ref(0);
const screenSize = ref({
  isMobile: false,
  isTablet: false,
  isDesktop: false,
});

const sliderRef = ref<HTMLDivElement>();
const containerRef = ref<HTMLDivElement>();

const visibleItems = computed(() => {
  return screenSize.value.isDesktop ? 3 : screenSize.value.isTablet ? 2 : 1;
});

const maxIndex = computed(() => {
  return Math.max(0, blogs.length - visibleItems.value);
});

const updateScreenSize = () => {
  if (typeof window !== "undefined") {
    const width = window.innerWidth;
    screenSize.value = {
      isMobile: width < 640,
      isTablet: width >= 640 && width < 1024,
      isDesktop: width >= 1024,
    };
  }
};

const handlePrevious = () => {
  currentIndex.value = Math.max(0, currentIndex.value - 1);
};

const handleNext = () => {
  currentIndex.value = Math.min(maxIndex.value, currentIndex.value + 1);
};

const setCurrentIndex = (index: number) => {
  currentIndex.value = index;
};

const scrollToCurrentIndex = async () => {
  if (sliderRef.value) {
    await nextTick();
    const cardElement = sliderRef.value.querySelector(".carousel-item") as HTMLElement;
    if (cardElement) {
      const cardWidth = cardElement.clientWidth;
      const scrollLeft = cardWidth * currentIndex.value;

      sliderRef.value.scrollTo({
        left: scrollLeft,
        behavior: "smooth",
      });
    }
  }
};

const handleTouchStart = (e: TouchEvent) => {
  isSwiping.value = true;
  startX.value = e.touches[0].clientX;
};

const handleTouchMove = (e: TouchEvent) => {
  if (!isSwiping.value) return;

  const currentX = e.touches[0].clientX;
  const diff = startX.value - currentX;

  if (Math.abs(diff) > 5) {
    e.preventDefault();
  }
};

const handleTouchEnd = (e: TouchEvent) => {
  if (!isSwiping.value) return;

  const currentX = e.changedTouches[0].clientX;
  const diff = startX.value - currentX;

  if (Math.abs(diff) > 50) {
    if (diff > 0 && currentIndex.value < maxIndex.value) {
      handleNext();
    } else if (diff < 0 && currentIndex.value > 0) {
      handlePrevious();
    }
  }

  isSwiping.value = false;
};

onMounted(() => {
  updateScreenSize();
  window.addEventListener("resize", updateScreenSize);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateScreenSize);
});

watch(
  [currentIndex, screenSize],
  () => {
    setTimeout(scrollToCurrentIndex, 50);
  },
  { deep: true }
);

watch(
  [screenSize, maxIndex],
  () => {
    currentIndex.value = Math.min(currentIndex.value, maxIndex.value);
  },
  { deep: true }
);
</script>

<template>
  <section class="py-16 mx-auto px-4 max-w-6xl" ref="containerRef">
    <div class="space-y-10">
      <div class="flex flex-wrap items-center justify-between gap-4">
        <div class="max-w-md space-y-1">
          <HeadingLeft
            class="hidden md:block"
            title="Artikel & Insight"
            subtitle="Blog"
            description="Berbagi pengetahuan, pengalaman, serta pandangan tentang teknologi, pengembangan web, dan tren industri terkini."
          />

          <Heading
            class="block md:hidden"
            title="Artikel & Insight"
            subtitle="Blog"
            description="Berbagi pengetahuan, pengalaman, serta pandangan tentang teknologi, pengembangan web, dan tren industri terkini."
          />
        </div>
        <div v-motion-fade-visible :delay="500" class="hidden items-center space-x-2 sm:flex">
          <Button
            variant="outline"
            size="icon"
            @click="handlePrevious"
            :disabled="currentIndex === 0"
            aria-label="Previous slide"
            class="shadow-none"
          >
            <ChevronLeft class="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" @click="handleNext" :disabled="currentIndex === maxIndex" aria-label="Next slide" class="shadow-none">
            <ChevronRight class="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div class="relative overflow-hidden space-y-4 md:space-y-8">
        <div
          ref="sliderRef"
          class="scrollbar-hide flex touch-pan-x snap-x snap-mandatory overflow-x-auto -mx-2 lg:-mx-3"
          style="scrollbar-width: none; -ms-overflow-style: none"
          @touchstart="handleTouchStart"
          @touchmove="handleTouchMove"
          @touchend="handleTouchEnd"
        >
          <div v-for="post in blogs" :key="post.id" class="carousel-item w-full flex-none snap-start sm:w-1/2 lg:w-1/3 px-2 lg:px-3">
            <Card v-motion-fade-visible :delay="500" class="group flex h-full flex-col overflow-hidden">
              <div class="w-full h-50 overflow-hidden">
                <img
                  :src="post.imageUrl"
                  :alt="post.title"
                  class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div class="absolute top-3 left-3">
                  <Badge class="bg-primary hover:bg-primary/90">
                    {{ post.category }}
                  </Badge>
                </div>
              </div>

              <CardHeader class="pt-4 lg:pt-6">
                <div class="text-muted-foreground mb-2 flex items-center text-xs sm:mb-3 sm:text-sm">
                  <Calendar class="mr-1 h-3 w-3" />
                  <span>{{ post.date }}</span>
                </div>
                <h3 class="line-clamp-2 font-semibold text-lg">
                  {{ post.title }}
                </h3>
              </CardHeader>

              <CardContent class="text-sm text-muted-foreground line-clamp-3 m-4 lg:m-6">
                {{ post.excerpt }}
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

        <div v-motion-fade-visible :delay="500" class="sm:hidden" v-if="maxIndex > 0">
          <div class="flex justify-center space-x-2">
            <button
              v-for="(_, i) in maxIndex + 1"
              :key="i"
              @click="setCurrentIndex(i)"
              :class="['h-2 rounded-full transition-all', i === currentIndex ? 'bg-primary w-6' : 'bg-primary/30 w-2']"
              :aria-label="`Go to slide ${i + 1}`"
            />
          </div>
        </div>

        <div v-motion-fade-visible :delay="500" class="flex items-center justify-between sm:hidden">
          <Button @click="handlePrevious" :disabled="currentIndex === 0" class="mr-2 h-9 flex-1 text-xs shadow-none">
            <ChevronLeft class="mr-1 h-4 w-4" />
            Prev
          </Button>
          <Button @click="handleNext" :disabled="currentIndex === maxIndex" class="ml-2 h-9 flex-1 text-xs shadow-none">
            Next
            <ChevronRight class="ml-1 h-4 w-4" />
          </Button>
        </div>

        <div v-motion-fade-visible :delay="500" class="flex justify-center">
          <Button variant="outline" class="w-full max-w-sm shadow-none" asChild>
            <RouterLink to="/blogs"> Lihat Semua Blog </RouterLink>
          </Button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
</style>
