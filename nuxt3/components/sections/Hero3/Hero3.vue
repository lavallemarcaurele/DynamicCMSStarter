<template>
  <section class="flex justify-center mb-20">
    <div class="relative flex justify-between max-w-[1200px]">
      <nuxt-img :src="`http://localhost:1337${data?.image.data?.attributes.url}`" alt="" class="w-full h-full object-cover" />
      <div class="absolute inset-0 flex flex-col justify-center items-center text-white">
        <h1>{{ data?.title }}</h1>
        <p>{{ data?.description }}</p>
        <a :href="data?.button.link" class="btn inline-block px-4">{{ data?.button.label }}</a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps({
  data: Object
});
</script>