<template>
    <div v-if="articleData">
      <component v-for="(componentData, index) in articleData.content" :key="index"
        :is="resolveComponent(componentData.__typename)" :data="componentData" />
    </div>
  </template>
  
  <script setup lang="ts">
  import useArticleData from '../../utils/articleMixin';
  const route = useRoute()
  const articleData = useArticleData('/' + route.params.slug)
  </script>