<template>
  <section class="events-upcoming">
    <div class="events-upcoming__wrapper">
      <div class="events-upcoming__container">
        <h2 class=" section-title">Мероприятия</h2>

        <TheSwiper
          :component="EventCard"
          :list="list"
          class="events-upcoming__swiper"
        />

        <NuxtLink to="/events" class="events-upcoming__link">Смотреть все</NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import { EventCard } from "#components";

const list = ref([]);

const URL = "http://localhost:3000/json/events.json";

const { data } = await useAsyncData("events-upcoming", () => {
  return $fetch(URL);
});

if (data?.value) {
  list.value = data.value;
}
</script>

<style lang="less">
.events-upcoming {
  padding: 80px 30px 100px;
  background-color: #f8f8f8;

  &__wrapper {
    box-sizing: border-box;
    width: 100%;
    max-width: 1334px;
    margin: 0 auto;
    padding: 0;
  }

  &__container {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  &__title {
    margin: 0 0 60px;
    text-align: center;
  }

  &__swiper {
    position: relative;
    margin-bottom: 50px;
  }
  
  &__link {
    display: inline-block;
    align-self: flex-end;
    padding: 0;
    background-color: transparent;
    color: @black;
    text-decoration: none;
    font-size: 16px;
    font-weight: 400;
    border-radius: 0;
    transition: opacity 0.3s ease;

    &:hover {
      opacity: 0.7;
    }
  }

  @media @bw1020 {
    padding: 60px 0 80px;

    &__title {
      margin-bottom: 40px;
    }
  }

  @media @bw768 {
    padding: 40px 0 60px;

    &__title {
      margin-bottom: 30px;
    }
  }

  @media @bw500 {
    padding: 30px 0 50px;
  }

  @media (max-width: 999px) {
    padding-top: 0;
  }

}
</style>
