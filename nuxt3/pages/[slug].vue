<template>
  <div v-if="pageData">
    <component v-for="(componentData, index) in pageData.content" :key="index"
      :is="resolveComponent(componentData.__typename)" :data="componentData" />
  </div>
</template>

<script setup lang="ts">
import usePageData from '../utils/pageMixin';
const route = useRoute()
const pageData = usePageData('/' + route.params.slug)
</script>