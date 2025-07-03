<script setup lang="ts">
import type { SidebarProps } from '@/components/ui/sidebar';

import NavMain from '@/components/dashboard/NavMain.vue';
// import NavUser from '@/components/dashboard/NavUser.vue';
import TeamSwitcher from '@/components/dashboard/TeamSwitcher.vue';
import {
  AudioWaveform,
  Command,
  Frame,
  GalleryVerticalEnd,
  LayoutDashboard,
  SquareTerminal,
} from 'lucide-vue-next';

import {
  Sidebar,
  SidebarContent,
  // SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from '@/components/ui/sidebar';

const props = withDefaults(defineProps<SidebarProps>(), {
  collapsible: 'icon',
});

const data = {
  user: {
    name: 'shadcn',
    email: 'm@example.com',
    avatar: '/avatars/shadcn.jpg',
  },
  teams: [
    {
      name: 'Kevin Iansyah',
      logo: GalleryVerticalEnd,
      plan: 'Enterprise',
    },
    {
      name: 'Acme Corp.',
      logo: AudioWaveform,
      plan: 'Startup',
    },
    {
      name: 'Evil Corp.',
      logo: Command,
      plan: 'Free',
    },
  ],
  navMain: [
    {
      title: 'Dashboard',
      url: '/dashboard',
      icon: LayoutDashboard,
    },
    {
      title: 'Pages',
      url: '#',
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: 'Blogs',
          url: '/dashboard/blogs',
        },
        {
          title: 'Skills',
          url: '#',
        },
      ],
    },
  ],
  projects: [
    {
      name: 'Design Engineering',
      url: '#',
      icon: Frame,
    },
  ],
};
</script>

<template>
  <Sidebar v-bind="props">
    <SidebarHeader>
      <TeamSwitcher :teams="data.teams" />
    </SidebarHeader>
    <SidebarContent>
      <NavMain :items="data.navMain" />
      <!-- <NavProjects :projects="data.projects" /> -->
    </SidebarContent>
    <!-- <SidebarFooter>
      <NavUser :user="data.user" />
    </SidebarFooter> -->
    <SidebarRail />
  </Sidebar>
</template>
