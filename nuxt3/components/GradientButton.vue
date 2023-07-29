<template>
    <a :href="link" class="inline-block py-2 px-4 rounded font-bold" :class="buttonClass">
      {{ label }}
    </a>
  </template>
  
  <script setup lang="ts">
  import { computed } from 'vue';
  
  const props = defineProps({
    link: String,
    label: String,
    variant: {
      type: String,
      default: 'primary'
    }
  });
  
  const buttonClass = computed(() => {
    switch (props.variant) {
      case 'secondary':
        return 'border-2 border-main bg-transparent text-main';
      case 'primary':
      default:
        return 'bg-gradient-to-r from-main to-secondary text-white';
    }
  });
  </script>
  