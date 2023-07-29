<template>
  <section class="flex justify-center mb-20 flex-col items-center">
    <div class="max-w-[1200px] text-center ">
      <h1>{{ data.title }}</h1>
      <p>{{ data.description }}</p>
      <a :href="data.button.link" class="btn inline-block px-4">{{ data.button.label }}</a>
    </div>
    <nuxt-img :src="`http://localhost:1337${data.image.data.attributes.url}`" alt=""
      class="w-[600px] h-full object-cover mt-5 rounded" />
  </section>
</template>

<script setup lang="ts">
defineProps({
  data: Object
});
</script>
