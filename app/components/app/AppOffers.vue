<template>
  <section class="app-offers offers">
    <AppOfferButtons @primary-click="openPopup" />

    <ModalWindow
      :name="'getOffer'"
      :title="'Заполните форму<br />и мы подберем площадку'"
    >
      <EventsForm @close="closePopup" />
    </ModalWindow>
  </section>
</template>

<script setup>
import AppOfferButtons from "~/components/app/AppOfferButtons.vue";
import ModalWindow from "~/components/common/ModalWindow.vue";
import EventsForm from "~/components/events/EventsForm.vue";

const store = useStore();

const openPopup = () => {
  store.openModal("getOffer");
};

const closePopup = () => {
  store.closeModal("getOffer");
};
</script>
