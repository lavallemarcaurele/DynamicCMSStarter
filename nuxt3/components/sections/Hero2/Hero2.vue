<template>
  <section
    class="relative flex flex-col justify-center mb-10 h-full sm:flex-row sm:items-center max-w-[1200px] mx-auto gap-10">
    <nuxt-img v-if="data?.positionHero2 === 'left'" :src="`http://localhost:1337${data?.image.data?.attributes.url}`" alt=""
      class="absolute inset-0 w-full h-full object-cover sm:static sm:w-1/2 sm:object-cover sm:h-[700px] rounded" />
    <div class="relative z-10 p-4 sm:p-0">
      <div class="bg-white rounded bg-opacity-60 sm:bg-transparent p-4 inline-block">
        <GradientTitle :title="data?.title" :level="1" />
        <p>{{ data?.description }}</p>
        <GradientButton :link="data?.button.link" :label="data?.button.label" variant="primary" />
      </div>
    </div>
    <nuxt-img v-if="data?.positionHero2 === 'right'" :src="`http://localhost:1337${data?.image.data?.attributes.url}`" alt=""
      class="absolute inset-0 w-full h-full object-cover sm:static sm:w-1/2 sm:object-cover sm:h-[700px] rounded" />
  </section>
</template>

<script setup lang="ts">
defineProps({
  data: Object
})
</script>