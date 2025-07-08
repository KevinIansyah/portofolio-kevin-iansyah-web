import type { LucideIcon } from 'lucide-vue-next';

export interface NavItem {
  title: string;
  href: string;
  emoticon?: string;
  icon?: LucideIcon;
  isActive?: boolean;
}

export interface BreadcrumbItem {
  title: string;
  href: string;
}

export type BreadcrumbItemType = BreadcrumbItem;
