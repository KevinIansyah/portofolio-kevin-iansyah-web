<script setup lang="ts">
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useColorMode } from "@vueuse/core";

const mode = useColorMode({
  disableTransition: true,
});
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button class="relative flex items-center justify-center w-9 h-9 ml-5 rounded-full">
        <span class="absolute rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"> 🌙 </span>
        <span class="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100">☀️</span>
        <!-- <Moon
          class="absolute size-4.5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
        />
        <Sun
          class="absolute size-4.5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
        /> -->
        <span class="sr-only">Toggle theme</span>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuLabel class="py-3 md:py-1">Tampilan</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem class="py-3 md:py-1" @click="mode = 'light'">
        <!-- <Sun class="hover:text-white" /> -->
        <span class="mr-1">🌙</span>Light
      </DropdownMenuItem>
      <DropdownMenuItem class="py-3 md:py-1" @click="mode = 'dark'">
        <!-- <Moon class="hover:text-white" /> -->
        <span class="mr-1">☀️</span>Dark
      </DropdownMenuItem>
      <DropdownMenuItem class="py-3 md:py-1" @click="mode = 'auto'">
        <!-- <Monitor class="hover:text-white" /> -->
        <span class="mr-1">🖥️</span>System
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
