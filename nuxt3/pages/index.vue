<template>
    <div v-if="pageData && pageData.content">
        <div v-for="(component, index) in pageData.content" :key="index">
            <Hero1 v-if="component.__typename === 'ComponentHeroHero1'" :data="component" />
            <Hero2 v-if="component.__typename === 'ComponentHeroHero2'" :data="component" />
            <Hero3 v-if="component.__typename === 'ComponentHeroHero3'" :data="component" />
            <Hero4 v-if="component.__typename === 'ComponentHeroHero4'" :data="component" />
        </div>
    </div>
    <div v-else>
    </div>
</template>
    
<script setup lang="ts">
import Hero1 from '../components/sections/Hero1/Hero1.vue';
import Hero2 from '../components/sections/Hero2/Hero2.vue';
import Hero3 from '../components/sections/Hero3/Hero3.vue';
import Hero4 from '../components/sections/Hero4/Hero4.vue';
import usePageData from '../mixins/pageMixin.ts';

const pageData = usePageData('/')
</script>