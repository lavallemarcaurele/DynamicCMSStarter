<template>
  <section :class="{ 'flex-col-reverse': data?.positionHero6 === 'bot' }" class="flex flex-col justify-center h-full mb-10 sm:mb-0 max-w-[1200px] mx-auto gap-10">
    <nuxt-img :src="`http://localhost:1337${data?.image.data?.attributes.url}`" alt=""
      class="w-full object-cover sm:h-[500px]" />
    <div class="px-4 sm:px-0">
      <div class="flex flex-col sm:flex-row bg-white rounded bg-opacity-60 sm:bg-transparent sm:p-4 sm:gap-6">
        <GradientTitle :title="data?.title" :level="1" class="w-full sm:w-1/2"/>
        <div>
          <p>{{ data?.description }}</p>
          <div>
            <GradientButton :link="data?.button.link" :label="data?.button.label" variant="secondary" />
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