<template>
  <section class="flex justify-around h-full py-10 max-w-[1200px] mx-auto gap-10">
      <div v-for="(item, index) in data?.advantage" :key="index" class="flex flex-col items-center text-center">
        <nuxt-icon :name="item.icon" class="mb-3"/>
        <p class="font-semibold">{{ item.title }}</p>
        <p>{{ item.description }}</p>
      </div>
  </section>
</template>

<script setup lang="ts">
defineProps({
  data: Object
})
</script>