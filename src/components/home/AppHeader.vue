<script setup lang="ts">
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

import Logo from '@/assets/logo.svg';
import ColorMode from '@/components/home/ColorMode.vue';
import type { NavItem } from '@/types';
import { useColorMode } from '@vueuse/core';
import {
  Briefcase,
  FolderKanban,
  ListCheck,
  Newspaper,
  Phone,
  User,
} from 'lucide-vue-next';
import { onMounted, onUnmounted, ref } from 'vue';
import { RouterLink, useRoute } from 'vue-router';

const isScrolled = ref(false);

const mode = useColorMode();

const handleScroll = () => {
  isScrolled.value = window.scrollY > window.innerHeight;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

const route = useRoute();

const isCurrentRoute = (url: string) => route.path === url;

const activeItemStyles = (url: string) =>
  isCurrentRoute(url)
    ? 'text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100'
    : '';

const mainNavItems: NavItem[] = [
  { title: 'Tentang Saya', emoticon: '👨‍💼', href: '#', icon: User },
  { title: 'Kemampuan', emoticon: '🧠', href: '#', icon: ListCheck },
  { title: 'Proyek', href: '#', emoticon: '📁', icon: FolderKanban },
  { title: 'Pengalaman', href: '#', emoticon: '💼', icon: Briefcase },
  { title: 'Blog', href: '#', emoticon: '📰', icon: Newspaper },
  { title: 'Kontak', href: '#', emoticon: '📞', icon: Phone },
];
</script>

<template>
  <div
    :class="[
      'sticky top-0 w-full z-50 backdrop-blur-sm shadow-xs transition-colors duration-300',
      mode === 'dark'
        ? 'bg-black/20'
        : isScrolled
        ? 'bg-white/90'
        : 'bg-black/20',
    ]"
  >
    <div>
      <div
        class="mx-auto flex h-16 items-center px-4 md:max-w-7xl lg:max-w-6xl"
      >
        <div class="lg:hidden">
          <Sheet>
            <SheetTrigger as-child>
              <Button
                variant="ghost"
                size="icon"
                :class="[
                  'mr-2 h-9 w-9',
                  mode === 'dark'
                    ? 'text-white'
                    : isScrolled
                    ? 'text-foreground'
                    : 'text-white',
                ]"
              >
                <!-- <Menu class="size-6" /> -->
                <span class="text-xl">🍔</span>
                <span class="sr-only">Navigation Button</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="top"
              :class="[
                'w-full h-auto p-6 backdrop-blur-md',
                mode === 'dark'
                  ? 'bg-black/20'
                  : isScrolled
                  ? 'bg-white/90'
                  : 'bg-black/20',
              ]"
            >
              <SheetTitle class="sr-only">Navigation Menu</SheetTitle>
              <SheetHeader class="flex justify-center items-center">
                <img :src="Logo" alt="Logo" class="w-8 h-8" />
              </SheetHeader>
              <div
                class="flex h-full flex-1 flex-col justify-between space-y-4"
              >
                <nav class="space-y-1">
                  <router-link
                    v-for="item in mainNavItems"
                    :key="item.title"
                    :to="item.href"
                    :class="[
                      'flex items-center gap-2 rounded-lg py-3 text-sm font-medium',
                      mode === 'dark'
                        ? 'text-white'
                        : isScrolled
                        ? 'text-foreground'
                        : 'text-white',
                      activeItemStyles(item.href),
                    ]"
                  >
                    <span>{{ item.emoticon }}</span>
                    <!-- <component :is="item.icon" class="h-5 w-5" /> -->
                    {{ item.title }}
                  </router-link>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        <router-link class="flex items-center" to="/">
          <img :src="Logo" alt="Logo" class="w-8 h-8" />
        </router-link>

        <div class="ml-auto flex items-center space-x-2">
          <div class="relative flex items-center space-x-1">
            <div class="hidden h-full lg:flex lg:flex-1">
              <NavigationMenu class="ml-10 flex h-full items-stretch">
                <NavigationMenuList class="flex h-full items-stretch space-x-2">
                  <NavigationMenuItem
                    v-for="(item, index) in mainNavItems"
                    :key="index"
                    class="relative flex h-full items-center"
                  >
                    <router-link
                      :to="item.href"
                      :class="[
                        'flex items-center gap-x-2 px-3 py-2 text-sm font-semibold hover:bg-primary hover:text-white rounded-md transition-all duration-300',
                        mode === 'dark'
                          ? 'text-white'
                          : isScrolled
                          ? 'text-foreground'
                          : 'text-white',
                        activeItemStyles(item.href),
                      ]"
                    >
                      <span>{{ item.emoticon }}</span>
                      <!-- <component :is="item.icon" class="h-4 w-4" /> -->
                      <span>{{ item.title }}</span>
                    </router-link>
                    <div
                      v-if="isCurrentRoute(item.href)"
                      class="absolute bottom-0 left-0 h-0.5 w-full translate-y-px bg-black dark:bg-white"
                    />
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            <ColorMode />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
