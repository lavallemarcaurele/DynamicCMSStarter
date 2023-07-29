<template>
  <section class="flex justify-center mb-20">
    <div class="relative flex justify-between max-w-[1200px]">
      <nuxt-img :src="`http://localhost:1337${data?.image.data?.attributes.url}`" alt="" class="w-full h-full object-cover" />
      <div class="absolute inset-0 flex flex-col justify-center items-center text-white">
        <GradientTitle :title="data?.title" :level="1" />
        <p>{{ data?.description }}</p>
        <GradientButton :link="data?.button.link" :label="data?.button.label" variant="primary" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps({
  data: Object
});
</script>