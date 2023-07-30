<template>
  <section class="flex flex-col justify-center h-full py-10 max-w-[1200px] mx-auto gap-3 p-4">
    <span>{{ data?.uptitle }}</span>
    <GradientTitle :title="data?.title" :level="3" class="w-full sm:w-1/2"/>
  </section>
</template>

<script setup lang="ts">
defineProps({
  data: Object
})
</script>