<template>
  <section class="flex flex-col justify-center h-full py-10 max-w-[1200px] mx-auto gap-3 p-4">
    <p>{{ data?.uptitle }}</p>
    <GradientTitle :title="data?.title" :level="2" class="w-full sm:w-2/3" />
    <Swiper 
    class="max-w-[1200px]"
      :slides-per-view="3"
      :space-between="20"
      :pagination="{ clickable: true }"
      :navigation="{prevEl: '.swiper-navigation-prev', nextEl: '.swiper-navigation-next'}"
    >
      <SwiperSlide v-for="(card, index) in data?.cards" :key="index">
        <div class="shadow-xl h-auto">
          <nuxt-img :src="`http://localhost:1337${card?.image.data?.attributes.url}`" alt=""/>
          <div class="p-4">
            <GradientTitle :title="card?.title" :level="3" />
            <p>{{ card.description }}</p>
            <GradientButton :link="card?.button.link" :label="card?.button.label" variant="secondary" />
          </div>
        </div>
      </SwiperSlide>
      <SwiperNavigation class="swiper-navigation-prev" slot="prev">qfffqs</SwiperNavigation>
      <SwiperNavigation class="swiper-navigation-next" slot="next">qfsfs</SwiperNavigation>
      <SwiperPagination></SwiperPagination>
    </Swiper>
  </section>
</template>

<script setup lang="ts">
defineProps({
  data: Object
})
</script>
