import { MotionDirective as motion } from "@vueuse/motion";
import type { Directive } from "vue";

export const vMotion = motion() as Directive;
