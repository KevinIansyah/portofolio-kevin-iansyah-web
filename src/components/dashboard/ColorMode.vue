<script setup lang="ts">
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useColorMode } from '@vueuse/core';
import { Monitor, Moon, Sun } from 'lucide-vue-next';

// Pass { disableTransition: false } to enable transitions
const mode = useColorMode({
  disableTransition: true,
});
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button
        variant="ghost"
        class="relative flex items-center justify-center w-9 h-9"
      >
        <Moon
          class="absolute size-4.5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 dar"
        />
        <Sun
          class="absolute size-4.5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
        />
        <span class="sr-only">Toggle theme</span>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      <DropdownMenuLabel>Appearance</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem class="cursor-pointer" @click="mode = 'light'">
        <Sun class="hover:text-white" />
        Light
      </DropdownMenuItem>
      <DropdownMenuItem class="cursor-pointer" @click="mode = 'dark'">
        <Moon class="hover:text-white" />
        Dark
      </DropdownMenuItem>
      <DropdownMenuItem class="cursor-pointer" @click="mode = 'auto'">
        <Monitor class="hover:text-white" />
        System
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
