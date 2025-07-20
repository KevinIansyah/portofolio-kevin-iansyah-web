<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Facebook, Github, Instagram, Linkedin, Twitter } from "lucide-vue-next";
import { ref } from "vue";

const email = ref("");

const subscribeNewsletter = () => {
  if (email.value) {
    // Handle newsletter subscription
    console.log("Subscribing email:", email.value);
    // You can add your newsletter subscription logic here
    email.value = "";
  }
};
</script>

<template>
  <footer class="bg-muted text-white">
    <div class="mx-auto pt-18 px-4 md:max-w-7xl lg:max-w-6xl">
      <div class="grid grid-cols-1 gap-8 lg:grid-cols-[2fr_1fr_1fr_1fr_1fr]">
        <!-- Company Info -->
        <div class="lg:col-span-1 lg:w-[80%]">
          <h3 class="text-lg font-semibold mb-4">Your Company</h3>
          <p class="text-gray-400 text-sm mb-6 max-w-xs">Making the world a better place through constructing elegant hierarchies.</p>

          <!-- Newsletter Signup -->
          <div>
            <h4 class="text-sm font-medium mb-3">Subscribe to our newsletter</h4>
            <div class="flex">
              <Input v-model="email" type="email" placeholder="Enter your email" class="flex-1" />
              <Button @click="subscribeNewsletter" class="ml-2 bg-white text-gray-900 hover:bg-gray-100">
                <ArrowRight class="h-4 w-4" />
              </Button>
            </div>
            <p class="text-xs text-gray-400 mt-2">Get the latest news and updates from our team.</p>
          </div>
        </div>

        <!-- Product -->
        <div>
          <h4 class="text-sm font-semibold mb-4">Product</h4>
          <ul class="space-y-3">
            <li><a href="#" class="text-sm text-foreground hover:text-muted-foreground transition-colors">Features</a></li>
            <li><a href="#" class="text-sm text-foreground hover:text-muted-foreground transition-colors">Pricing</a></li>
            <li><a href="#" class="text-sm text-foreground hover:text-muted-foreground transition-colors">Integrations</a></li>
            <li><a href="#" class="text-sm text-foreground hover:text-muted-foreground transition-colors">Changelog</a></li>
            <li><a href="#" class="text-sm text-foreground hover:text-muted-foreground transition-colors">Documentation</a></li>
          </ul>
        </div>

        <!-- Company -->
        <div>
          <h4 class="text-sm font-semibold mb-4">Company</h4>
          <ul class="space-y-3">
            <li><a href="#" class="text-sm text-foreground hover:text-muted-foreground transition-colors">About us</a></li>
            <li><a href="#" class="text-sm text-foreground hover:text-muted-foreground transition-colors">Blog</a></li>
            <li><a href="#" class="text-sm text-foreground hover:text-muted-foreground transition-colors">Careers</a></li>
            <li><a href="#" class="text-sm text-foreground hover:text-muted-foreground transition-colors">Customers</a></li>
            <li><a href="#" class="text-sm text-foreground hover:text-muted-foreground transition-colors">Brand</a></li>
          </ul>
        </div>

        <!-- Resources -->
        <div>
          <h4 class="text-sm font-semibold mb-4">Resources</h4>
          <ul class="space-y-3">
            <li><a href="#" class="text-sm text-foreground hover:text-muted-foreground transition-colors">Community</a></li>
            <li><a href="#" class="text-sm text-foreground hover:text-muted-foreground transition-colors">Contact</a></li>
            <li><a href="#" class="text-sm text-foreground hover:text-muted-foreground transition-colors">Support</a></li>
            <li><a href="#" class="text-sm text-foreground hover:text-muted-foreground transition-colors">FAQ</a></li>
            <li><a href="#" class="text-sm text-foreground hover:text-muted-foreground transition-colors">Terms of service</a></li>
          </ul>
        </div>

        <!-- Developers Section -->
        <div>
          <h4 class="text-sm font-medium mb-3">Developers</h4>
          <ul class="space-y-2">
            <li><a href="#" class="text-sm text-foreground hover:text-muted-foreground transition-colors">API</a></li>
            <li><a href="#" class="text-sm text-foreground hover:text-muted-foreground transition-colors">Status</a></li>
            <li><a href="#" class="text-sm text-foreground hover:text-muted-foreground transition-colors">GitHub</a></li>
            <li><a href="#" class="text-sm text-foreground hover:text-muted-foreground transition-colors">Team</a></li>
            <li><a href="#" class="text-sm text-foreground hover:text-muted-foreground transition-colors">Developer Blog</a></li>
          </ul>
        </div>
      </div>

      <!-- Bottom Section -->
      <div class="mt-18 py-8 border-t border-foreground">
        <div class="flex flex-col lg:flex-row justify-between items-center">
          <!-- Copyright -->
          <div class="mb-4 lg:mb-0">
            <p class="text-sm text-gray-400">© 2025 Your Company. All rights reserved.</p>
          </div>

          <!-- Social Links -->
          <div class="flex items-center space-x-4">
            <a href="#" class="text-foreground hover:text-muted-foreground transition-colors">
              <Facebook class="h-5 w-5" />
              <span class="sr-only">Facebook</span>
            </a>
            <a href="#" class="text-foreground hover:text-muted-foreground transition-colors">
              <Twitter class="h-5 w-5" />
              <span class="sr-only">Twitter</span>
            </a>
            <a href="#" class="text-foreground hover:text-muted-foreground transition-colors">
              <Instagram class="h-5 w-5" />
              <span class="sr-only">Instagram</span>
            </a>
            <a href="#" class="text-foreground hover:text-muted-foreground transition-colors">
              <Linkedin class="h-5 w-5" />
              <span class="sr-only">LinkedIn</span>
            </a>
            <a href="#" class="text-foreground hover:text-muted-foreground transition-colors">
              <Github class="h-5 w-5" />
              <span class="sr-only">GitHub</span>
            </a>
          </div>

          <!-- Legal Links -->
          <div class="flex space-x-6 text-sm text-gray-400 mt-4 lg:mt-0">
            <a href="#" class="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" class="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
