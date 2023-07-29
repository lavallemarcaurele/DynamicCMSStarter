<template>
  <section
    class="relative flex flex-col justify-center py-10 px-2 h-full sm:flex-row sm:items-center mb-10 sm:mb-0 max-w-[1200px] mx-auto gap-10">
    <nuxt-img :src="`http://localhost:1337${data?.image.data?.attributes.url}`" alt=""
      class="absolute inset-0 w-full h-full object-cover sm:static sm:w-1/2 sm:object-contain sm:h-[400px]"
      :class="{ 'order-2': data?.positionHero1 === 'right' }" />
    <div class="relative z-10 p-4 sm:p-0">
      <div class="bg-white rounded bg-opacity-60 sm:bg-transparent p-4 inline-block">
        <GradientTitle :title="data?.title" :level="1" />
        <p>{{ data?.description }}</p>
        <GradientButton v-if="data?.button" :link="data?.button.link" :label="data?.button.label" variant="primary" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps({
  data: Object
})
</script>