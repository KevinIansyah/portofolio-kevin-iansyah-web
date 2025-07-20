<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

import ColorMode from "@/components/home/ColorMode.vue";
import type { NavItem } from "@/types";
import { Menu } from "lucide-vue-next";
import { RouterLink } from "vue-router";

const mainNavItems: NavItem[] = [
  { title: "Tentang Saya", href: "#tentang-saya" },
  { title: "Teknologi", href: "#teknologi" },
  { title: "Proyek", href: "#proyek" },
  { title: "Pengalaman", href: "#pengalaman" },
  { title: "Kontak", href: "#kontak" },
  { title: "Blog", href: "#blog" },
];
</script>

<template>
  <div class="sticky top-0 z-50 w-full bg-transparent backdrop-blur-sm transition-colors duration-300">
    <div>
      <div class="mx-auto flex h-16 items-center px-4 max-w-6xl">
        <div class="lg:hidden">
          <Sheet>
            <SheetTrigger as-child>
              <Button variant="ghost" size="icon" class="mr-2 h-9 w-9 text-foreground">
                <Menu class="size-6" />
                <span class="sr-only">Tombol buka navigasi</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="top" class="w-full h-auto bg-transparent p-6 backdrop-blur-md shadow-none">
              <SheetTitle class="sr-only">Navigation Menu</SheetTitle>
              <SheetDescription class="sr-only"> Daftar tautan navigasi utama pada situs web. </SheetDescription>
              <SheetHeader class="flex justify-center items-center">
                <!-- <img :src="Logo" alt="Logo" class="w-8 h-8" /> -->
                <span class="text-lg font-bold">KI</span>
              </SheetHeader>
              <div class="flex h-full flex-1 flex-col justify-between space-y-4">
                <nav class="space-y-1">
                  <RouterLink
                    v-for="item in mainNavItems"
                    :key="item.title"
                    :to="{ path: '/', hash: item.href }"
                    class="flex items-center gap-2 rounded-lg py-3 text-sm text-white font-medium"
                  >
                    {{ item.title }}
                  </RouterLink>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        <div class="w-full flex items-center justify-between space-x-2">
          <router-link class="flex items-center" to="/">
            <span class="text-lg font-bold">KI</span>
            <!-- <img :src="Logo" alt="Logo" class="w-8 h-8" /> -->
          </router-link>

          <div class="hidden h-full lg:flex">
            <NavigationMenu class="ml-10 flex h-full items-stretch">
              <NavigationMenuList class="flex h-full items-stretch space-x-2">
                <NavigationMenuItem v-for="(item, index) in mainNavItems" :key="index" class="relative flex h-full items-center">
                  <RouterLink
                    :to="{ path: '/', hash: item.href }"
                    class="flex items-center gap-x-2 px-3 py-2 text-sm text-foreground font-normal hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 rounded-md transition-all duration-300"
                  >
                    <span>{{ item.title }}</span>
                  </RouterLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <ColorMode />
        </div>
      </div>
    </div>
  </div>
</template>
