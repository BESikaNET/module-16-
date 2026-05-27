<template>
  <div class="events">
    <AppListing title="Мероприятия" class="events__listing">
      <EventCard
        v-for="(card, index) in list"
        :key="index"
        :data="card"
        class="app-listing__card"
      />
    </AppListing>

    <AppOffers />

    <section class="app-listing__features">
      <div class="app-listing__features-row">
        <div class="app-listing__feature">
          <div class="app-listing__feature-square" aria-hidden="true">
            <SvgIcon class="app-listing__feature-icon" name="Vosk" width="20" height="20" />
          </div>
          <div class="app-listing__feature-title">Цены</div>
          <div class="app-listing__feature-text">Цены, указанные на сайте носят информационный характер. Мы придерживаемся индивидуального подхода в работе с клиентом.</div>
        </div>

        <div class="app-listing__feature">
          <div class="app-listing__feature-square" aria-hidden="true">
            <SvgIcon class="app-listing__feature-icon" name="Phone" width="20" height="20" />
          </div>
          <div class="app-listing__feature-title">Контакты</div>
          <div class="app-listing__feature-text">Отдел организации мероприятий<br/>8 (3822) 90-72-56<br/>idat@tusur.ru</div>
        </div>

        <div class="app-listing__feature">
          <div class="app-listing__feature-square" aria-hidden="true">
            <SvgIcon class="app-listing__feature-icon" name="Deal" width="20" height="20" />
          </div>
          <div class="app-listing__feature-title">Преимущество</div>
          <div class="app-listing__feature-text">Мы имеем все возможности для того, чтобы помочь как малому бизнесу и молодым талантам, так и большим корпорациям и холдингам.</div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import AppOffers from "~/components/app/AppOffers.vue";

const list = ref([]);

const URL = "http://localhost:3000/json/events.json";

const { data } = await useAsyncData("events", () => {
  return $fetch(URL);
});

if (data?.value) list.value = data.value;
</script>

<style lang="less">
.events {
  padding: 40px 0 0;

  &__listing {
    &--white {
      background-color: @white;
      width: 100%;
    }
  }

  &__services {
    max-width: 1414px;
    margin: 0 auto;
    padding: 0 40px 50px;
    box-sizing: border-box;
  }

  &__section-title {
    text-align: center;
    margin-bottom: 80px;
    font-family: @font2;
    font-weight: 500;
    font-size: 44px;
    line-height: 1.28;
    text-transform: uppercase;
    color: @black;

    &--sub {
      text-align: center;
      margin-bottom: 40px;
    }
  }

  &__section-description {
    max-width: 1400px;
    margin: 0 auto 60px;
    padding-left: 40px;
    text-align: left;
    font-size: 18px;
    line-height: 1.5;
    color: @black;
  }
}
</style>
