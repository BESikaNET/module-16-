<template>
  <article class="event-card">
    <NuxtLink :to="`/events/${data.slug}`" class="event-card__link">
      <picture class="event-card__picture">
        <source type="image/webp" :srcset="data.img_webp" />

        <img :src="data.img" :alt="data.alt" class="event-card__img" />
      </picture>

      <h1 class="event-card__title">{{ data.title }}</h1>

      <p class="event-card__description">{{ data.description }}</p>

      <time v-if="date" :datetime="data.date" class="event-card__time">
        {{ date }}
      </time>
    </NuxtLink>
  </article>
</template>

<script setup>
const props = defineProps({
  data: {
    type: Object,
    default: () => ({}),
  },
});

const date = computed(() => {
  try {
    const date = new Date(props.data.date);
    return `${date.toLocaleDateString()} | начало ${date.toLocaleTimeString(
      "ru-RU",
      {
        hour: "2-digit",
        minute: "2-digit",
      },
    )}`;
  } catch {
    return null;
  }
});
</script>

<style lang="less">
.event-card {
  display: flex;
  width: 100%;
  height: 100%;
  min-width: 260px;

  &__link {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    color: #1f1e1e;
    text-decoration: none;
    &:hover {
      .event-card__title {
        color: @red;
        text-decoration-color: @red;
      }
    }
  }

  &__picture {
    display: block;
    position: relative;
    width: 100%;
    margin: 0 0 25px;
    font-size: 0;
    text-decoration: none;
    overflow: hidden;
    @media @bw1660 {
      margin-bottom: 20px;
    }
    &::after {
      content: "";
      display: block;
      width: 100%;
      padding-top: 107.16%;
    }
  }

  &__img {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__title {
    margin: 0 0 15px;
    min-height: 66px;
    color: @black;
    font-weight: 600;
    font-size: 24px;
    line-height: 33px;
    text-decoration: underline transparent;
    transition: color 0.2s, text-decoration-color 0.2s;
    @media @bw1660 {
      margin-bottom: 10px;
    }
    @media @bw1340 {
      font-size: 20px;
      line-height: 27px;
      min-height: 54px;
    }
    @media @bw768 {
      font-size: 16px;
      line-height: 22px;
      min-height: 45px;
    }
  }

  &__description {
    margin: 0 0 auto;
    min-height: 72px;
    @media @bw768 {
      font-size: 14px;
      line-height: 19px;
      min-height: 54px;
    }
  }

  &__time {
    margin: 15px 0 0;
    font-weight: 300;
    font-size: 14px;
    line-height: 1.35;
  }
}
</style>
