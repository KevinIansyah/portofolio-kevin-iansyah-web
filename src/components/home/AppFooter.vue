<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-vue-next";
import { ref } from "vue";
import Separator from "../ui/separator/Separator.vue";

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
        <div class="grid grid-cols-1 gap-8 lg:grid-cols-[2fr_1fr_1fr_1fr_1fr]">
          <div class="lg:col-span-1 lg:w-[80%]">
            <h3 class="text-lg font-semibold mb-4">KI</h3>
            <p class="text-muted-foreground text-sm mb-6 max-w-xs"> Fullstack Web Developer berpengalaman dengan teknologi modern seperti Vue, React, Tailwind CSS, Laravel, dan NestJS.</p>

            <div>
              <h4 class="text-sm font-medium mb-4">Subscribe to our blogs</h4>
              <div class="flex">
                <Input v-model="email" type="email" placeholder="Enter your email" class="text-sm flex-1" />
                <Button @click="subscribeNewsletter" class="ml-2">
                  <ArrowRight />
                </Button>
              </div>
              <p class="text-sm text-muted-foreground mt-2">Get the latest blog and updates from our team.</p>
            </div>
          </div>

          <div>
            <h4 class="text-sm font-semibold mb-4">Product</h4>
            <ul class="space-y-4">
              <li><a href="#" class="text-sm text-foreground hover:text-muted-foreground transition-colors">Features</a></li>
              <li><a href="#" class="text-sm text-foreground hover:text-muted-foreground transition-colors">Pricing</a></li>
              <li><a href="#" class="text-sm text-foreground hover:text-muted-foreground transition-colors">Integrations</a></li>
              <li><a href="#" class="text-sm text-foreground hover:text-muted-foreground transition-colors">Changelog</a></li>
              <li><a href="#" class="text-sm text-foreground hover:text-muted-foreground transition-colors">Documentation</a></li>
            </ul>
          </div>

          <div>
            <h4 class="text-sm font-semibold mb-4">Company</h4>
            <ul class="space-y-4">
              <li><a href="#" class="text-sm text-foreground hover:text-muted-foreground transition-colors">About us</a></li>
              <li><a href="#" class="text-sm text-foreground hover:text-muted-foreground transition-colors">Blog</a></li>
              <li><a href="#" class="text-sm text-foreground hover:text-muted-foreground transition-colors">Careers</a></li>
              <li><a href="#" class="text-sm text-foreground hover:text-muted-foreground transition-colors">Customers</a></li>
              <li><a href="#" class="text-sm text-foreground hover:text-muted-foreground transition-colors">Brand</a></li>
            </ul>
          </div>

          <div>
            <h4 class="text-sm font-semibold mb-4">Resources</h4>
            <ul class="space-y-4">
              <li><a href="#" class="text-sm text-foreground hover:text-muted-foreground transition-colors">Community</a></li>
              <li><a href="#" class="text-sm text-foreground hover:text-muted-foreground transition-colors">Contact</a></li>
              <li><a href="#" class="text-sm text-foreground hover:text-muted-foreground transition-colors">Support</a></li>
              <li><a href="#" class="text-sm text-foreground hover:text-muted-foreground transition-colors">FAQ</a></li>
              <li><a href="#" class="text-sm text-foreground hover:text-muted-foreground transition-colors">Terms of service</a></li>
            </ul>
          </div>

          <div>
            <h4 class="text-sm font-medium mb-4">Developers</h4>
            <ul class="space-y-2">
              <li><a href="#" class="text-sm text-foreground hover:text-muted-foreground transition-colors">API</a></li>
              <li><a href="#" class="text-sm text-foreground hover:text-muted-foreground transition-colors">Status</a></li>
              <li><a href="#" class="text-sm text-foreground hover:text-muted-foreground transition-colors">GitHub</a></li>
              <li><a href="#" class="text-sm text-foreground hover:text-muted-foreground transition-colors">Team</a></li>
              <li><a href="#" class="text-sm text-foreground hover:text-muted-foreground transition-colors">Developer Blog</a></li>
            </ul>
          </div>
        </div>
      </div>

      <Separator />

      <div class="py-10">
        <div class="flex flex-col lg:flex-row justify-between items-center">
          <div class="mb-4 lg:mb-0">
            <p class="text-sm text-muted-foreground">© 2025 Your Company. All rights reserved.</p>
          </div>

          <div class="flex space-x-6 text-sm text-muted-foreground mt-4 lg:mt-0">
            <a href="#" class="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" class="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
