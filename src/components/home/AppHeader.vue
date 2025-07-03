<script setup lang="ts">
// import AppLogo from '@/components/AppLogo.vue';
// import AppLogoIcon from '@/components/AppLogoIcon.vue';
// import Breadcrumbs from '@/components/Breadcrumbs.vue';
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

import type { NavItem } from '@/types';
import {
  Briefcase,
  FolderKanban,
  ListCheck,
  Menu,
  Newspaper,
  Phone,
  User,
} from 'lucide-vue-next';
import { RouterLink, useRoute } from 'vue-router';
import ColorMode from './ColorMode.vue';

const route = useRoute();

const isCurrentRoute = (url: string) => route.path === url;

const activeItemStyles = (url: string) =>
  isCurrentRoute(url)
    ? 'text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100'
    : '';

const mainNavItems: NavItem[] = [
  { title: 'About Me', href: '#', icon: User },
  { title: 'Skills', href: '#', icon: ListCheck },
  { title: 'Projects', href: '#', icon: FolderKanban },
  { title: 'Experience', href: '#', icon: Briefcase },
  { title: 'Contact', href: '#', icon: Phone },
  { title: 'Blog', href: '#', icon: Newspaper },
];
</script>

<template>
  <div class="fixed top-0 w-full z-50 bg-background backdrop-blur-md shadow-xs">
    <div class="border-b border-sidebar-border/80">
      <div
        class="mx-auto flex h-16 items-center px-4 md:max-w-7xl lg:max-w-6xl"
      >
        <div class="lg:hidden">
          <Sheet>
            <SheetTrigger as-child>
              <Button variant="ghost" size="icon" class="mr-2 h-9 w-9">
                <Menu class="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" class="w-[300px] p-6">
              <SheetTitle class="sr-only">Navigation Menu</SheetTitle>
              <SheetHeader class="flex justify-start text-left">
                <h1 class="text-lg font-semibold text-center">Kevin Iansyah</h1>
              </SheetHeader>
              <div
                class="flex h-full flex-1 flex-col justify-between space-y-4"
              >
                <nav class="-mx-3 space-y-1">
                  <router-link
                    v-for="item in mainNavItems"
                    :key="item.title"
                    :to="item.href"
                    class="flex items-center gap-x-3 rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent"
                    :class="activeItemStyles(item.href)"
                  >
                    <component
                      v-if="item.icon"
                      :is="item.icon"
                      class="h-5 w-5"
                    />
                    {{ item.title }}
                  </router-link>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        <router-link class="flex items-center gap-x-2" to="/">
          <h1 class="text-lg font-semibold">Kevin Iansyah</h1>
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
                      class="flex items-center gap-x-2 px-3 py-2 text-sm font-medium hover:bg-primary hover:text-white rounded-md transition-all duration-75"
                      :class="activeItemStyles(item.href)"
                    >
                      <component :is="item.icon" class="h-4 w-4" />
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
