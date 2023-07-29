<template>
  <section :class="{ 'flex-col-reverse': data?.positionHero6 === 'bot' }" class="flex flex-col justify-center py-10 h-full mb-10 sm:mb-0 max-w-[1200px] mx-auto gap-10">
    <nuxt-img :src="`http://localhost:1337${data?.image.data?.attributes.url}`" alt=""
      class="w-full object-cover sm:h-[500px]" />
    <div class="p-4 sm:p-0">
      <div class="flex flex-col sm:flex-row bg-white rounded bg-opacity-60 sm:bg-transparent p-4 gap-6">
        <h1 class="w-full sm:w-1/2">{{ data?.title }}</h1>
        <div>
          <p>{{ data?.description }}</p>
          <div>
            <a :href="data?.button.link" class="btn inline-block px-4">{{ data?.button.label }}</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps({
  data: Object
})
</script>