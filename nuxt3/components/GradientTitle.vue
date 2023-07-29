<template>
  <component :is="tag" v-if="titleParts">
    <span v-html="titleParts[0]" />
    <span class="bg-clip-text text-transparent bg-gradient-to-r from-main to-secondary" v-html="titleParts[1]" />
    <span v-html="titleParts[2]" />
  </component>
</template>

  
  <script setup lang="ts">
  import { ref, watchEffect } from 'vue';
  
  const props = defineProps({
    title: {
      type: String,
      default: ''
    },
    level: {
      type: Number,
      default: 1
    }
  });
  
  const titleParts = ref(null);
  const tag = ref('h1');
  
  watchEffect(() => {
    titleParts.value = props.title.split('**');
    tag.value = `h${props.level}`;
  });
  </script>  