<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { NavItem } from "@/types";
import { ArrowRight } from "lucide-vue-next";
import { ref } from "vue";
import { RouterLink } from "vue-router";
import Separator from "../ui/separator/Separator.vue";

const mainNavItems: NavItem[] = [
  { title: "Tentang Saya", href: "#tentang-saya" },
  { title: "Teknologi", href: "#teknologi" },
  { title: "Proyek", href: "#proyek" },
  { title: "Pengalaman", href: "#pengalaman" },
  { title: "Kontak", href: "#kontak" },
  { title: "Blog", href: "#blog" },
];

interface SocialItem {
  name: string;
  url: string;
}

const socials: SocialItem[] = [
  { name: "Facebook", url: "https://web.facebook.com/kevin.iansyah/" },
  { name: "Instagram", url: "https://www.instagram.com/keviniansyah/" },
  { name: "Twitter", url: "#" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/kevin-iansyah/" },
  { name: "GitHub", url: "https://github.com/KevinIansyah" },
];

interface GeneralLinkItem {
  title: string;
  href: string;
}

const generalLinks: GeneralLinkItem[] = [
  { title: "Semua Blog", href: "/blogs" },
  { title: "Semua Proyek", href: "/projects" },
  { title: "API Publik", href: "/api" },
];

const email = ref("");

const subscribeNewsletter = () => {
  if (email.value) {
    console.log("Subscribing email:", email.value);
    email.value = "";
  }
};
</script>

<template>
  <footer class="bg-muted text-foreground">
    <div class="mx-auto px-4 max-w-6xl">
      <div class="py-16">
        <div class="grid grid-cols-1 gap-8 lg:grid-cols-[2fr_1fr_1fr_1fr]">
          <div class="lg:col-span-1 lg:w-[80%]">
            <h3 class="text-lg font-semibold mb-4">KI</h3>
            <p class="text-muted-foreground text-sm mb-6 max-w-xs">
              Fullstack Web Developer berpengalaman dengan teknologi modern seperti Vue, React, Tailwind CSS, Laravel, dan NestJS.
            </p>

            <div>
              <h4 class="text-sm font-medium mb-4">Berlangganan Blog</h4>
              <div class="flex">
                <Input v-model="email" type="email" placeholder="Masukkan email Anda" class="text-sm flex-1" />
                <Button @click="subscribeNewsletter" class="ml-2 shadow-none">
                  <ArrowRight />
                  <span class="sr-only">Tombol berlangganan blog</span>
                </Button>
              </div>
              <p class="text-xs text-muted-foreground mt-4">Dapatkan artikel dan pembaruan terbaru seputar web development langsung ke email Anda.</p>
            </div>
          </div>

          <div>
            <h4 class="text-sm font-semibold mb-4">Navigasi</h4>
            <ul class="space-y-4">
              <li v-for="item in mainNavItems" :key="item.title">
                <RouterLink :to="{ path: '/', hash: item.href }" class="text-sm text-foreground hover:text-muted-foreground transition-colors">
                  {{ item.title }}
                </RouterLink>
              </li>
            </ul>
          </div>

          <div>
            <h4 class="text-sm font-semibold mb-4">Media Sosial</h4>
            <ul class="space-y-4">
              <li v-for="item in socials" :key="item.name">
                <a
                  :href="item.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-sm text-foreground hover:text-muted-foreground transition-colors"
                >
                  {{ item.name }}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 class="text-sm font-semibold mb-4">Jelajahi</h4>
            <ul class="space-y-4">
              <li v-for="item in generalLinks" :key="item.title">
                <RouterLink :to="item.href" class="text-sm text-foreground hover:text-muted-foreground transition-colors">
                  {{ item.title }}
                </RouterLink>
              </li>
            </ul>
          </div>

          <!-- <div>
            <h4 class="text-sm font-semibold mb-4">Resources</h4>
            <ul class="space-y-4">
              <li><a href="#" class="text-sm text-foreground hover:text-muted-foreground transition-colors">Community</a></li>
              <li><a href="#" class="text-sm text-foreground hover:text-muted-foreground transition-colors">Contact</a></li>
              <li><a href="#" class="text-sm text-foreground hover:text-muted-foreground transition-colors">Support</a></li>
              <li><a href="#" class="text-sm text-foreground hover:text-muted-foreground transition-colors">FAQ</a></li>
              <li><a href="#" class="text-sm text-foreground hover:text-muted-foreground transition-colors">Terms of service</a></li>
            </ul>
          </div> -->

          <!-- <div>
            <h4 class="text-sm font-medium mb-4">Developers</h4>
            <ul class="space-y-2">
              <li><a href="#" class="text-sm text-foreground hover:text-muted-foreground transition-colors">API</a></li>
              <li><a href="#" class="text-sm text-foreground hover:text-muted-foreground transition-colors">Status</a></li>
              <li><a href="#" class="text-sm text-foreground hover:text-muted-foreground transition-colors">GitHub</a></li>
              <li><a href="#" class="text-sm text-foreground hover:text-muted-foreground transition-colors">Team</a></li>
              <li><a href="#" class="text-sm text-foreground hover:text-muted-foreground transition-colors">Developer Blog</a></li>
            </ul>
          </div> -->
        </div>
      </div>

      <Separator />

      <div class="py-10">
        <div class="flex flex-col lg:flex-row justify-center items-center">
          <div class="mb-4 lg:mb-0">
            <p class="text-sm text-muted-foreground">© 2025 Kevin Iansyah. All rights reserved.</p>
          </div>

          <!-- <div class="flex space-x-6 text-sm text-muted-foreground mt-4 lg:mt-0">
            <a href="#" class="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" class="hover:text-white transition-colors">Terms of Service</a>
          </div> -->
        </div>
      </div>
    </div>
  </footer>
</template>
