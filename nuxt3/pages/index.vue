<template>
    <div v-if="pageData && pageData.content">
        <component v-for="(componentData, index) in pageData.content" :key="index"
            :is="resolveComponent(componentData.__typename)" :data="componentData" />
    </div>
</template>

<script setup lang="ts">
import usePageData from '../utils/pageMixin.ts';
import { resolveComponent } from '../utils/componentResolver';

const pageData = usePageData('/');

resolveComponent();
</script>