<template>
  <section class="app-offer-buttons offers__suggest">
    <h4 class="app-offer-buttons__title offers__suggest-title">Я ХОЧУ</h4>

    <div class="app-offer-buttons__btns offers__suggest-btn">
      <button
        type="button"
        class="app-offer-buttons__btn offers__btn btn btn--red"
        @click="$emit('primary-click')"
      >
        Провести мероприятие
      </button>

      <button
        type="button"
        class="app-offer-buttons__btn offers__btn btn"
        @click="$emit('secondary-click')"
      >
        Стать арендатором
      </button>
    </div>
  </section>
</template>

<script setup>
defineEmits(["primary-click", "secondary-click"]);
</script>

<style lang="less">
.app-offer-buttons {
  @media (max-width: 799px) {
    margin-bottom: 90px;
  }
}
</style>