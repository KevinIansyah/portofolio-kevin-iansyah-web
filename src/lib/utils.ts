import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function valueUpdater<T>(
  updaterOrValue: T | ((old: T) => T),
  refObj: { value: T }
) {
  if (typeof updaterOrValue === 'function') {
    refObj.value = (updaterOrValue as (old: T) => T)(refObj.value);
  } else {
    refObj.value = updaterOrValue;
  }
}
