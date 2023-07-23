<template>
  <section
    class="relative flex flex-col justify-center mb-10 h-full sm:flex-row sm:items-center max-w-[1200px] mx-auto gap-10">
    <nuxt-img v-if="data.positionHero2 === 'left'" :src="`http://localhost:1337${data.image.data.attributes.url}`" alt=""
      class="absolute inset-0 w-full h-full object-cover sm:static sm:w-1/2 sm:object-cover sm:h-[700px]" />
    <div class="relative z-10 p-4 sm:p-0">
      <div class="bg-white rounded bg-opacity-60 sm:bg-transparent p-4 inline-block">
        <h1>{{ data.title }}</h1>
        <p>{{ data.description }}</p>
        <div>
          <a :href="data.button.link" class="btn inline-block px-4">{{ data.button.label }}</a>
        </div>
      </div>
    </div>
    <nuxt-img v-if="data.positionHero2 === 'right'" :src="`http://localhost:1337${data.image.data.attributes.url}`" alt=""
      class="absolute inset-0 w-full h-full object-cover sm:static sm:w-1/2 sm:object-cover sm:h-[700px]" />
  </section>
</template>

<script setup lang="ts">
defineProps({
  data: Object
})
</script>