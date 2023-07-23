<template>
  <section class="flex justify-center py-10" :class="{ 'flex-row-reverse': data.position === 'right' }">
    <div class="flex justify-between max-w-[1200px]">
      <div>
        <h1>{{ data.title }}</h1>
        <p>{{ data.description }}</p>
        <a :href="data.button.link" class="btn">{{ data.button.label }}</a>
      </div>
      <nuxt-img :src="`http://localhost:1337${data.image.data.attributes.url}`" alt="" class="w-1/2" />
    </div>
  </section>
</template>
  
<script setup lang="ts">
defineProps({
  data: Object
})
</script>