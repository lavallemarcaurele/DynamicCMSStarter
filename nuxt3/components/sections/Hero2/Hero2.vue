<template>
  <section class="flex justify-center py-10" :class="{ 'flex-row-reverse': data.position === 'right' }">
    <div>
      <h1 class="text-3xl">{{ data.title }}</h1>
      <p class="text-lg">{{ data.description }}</p>
      <a :href="data.button.link" class="btn">{{ data.button.label }}</a>
    </div>
    <nuxt-img :src="`http://localhost:1337${data.image.data.attributes.url}`" alt="" class="w-1/2" />
  </section>
</template>
  
<script setup lang="ts">
defineProps({
  data: Object
})
</script>
