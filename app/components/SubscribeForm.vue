<template>
  <form class="subscribe-form" novalidate @submit.prevent="onSubmit">
    <h4 class="subscribe-form__title">Подпишись и будь в курсе происходящего</h4>

    <div class="subscribe-form__wrapper">
      <div class="subscribe-form__field-wrapper">
        <input
          v-model="email"
          type="email"
          placeholder="Email"
          class="subscribe-form__input"
        />

        <span
          v-if="submitCount && (!email || !emailIsValid)"
          class="subscribe-form__error field-error"
        >
          {{ email && !emailIsValid ? "Email указан неверно" : "Это поле обязательно" }}
        </span>
      </div>

      <button type="submit" class="subscribe-form__submit btn btn--red">Подписаться</button>
    </div>

    <label class="subscribe-form__check check">
      <input
        v-model="agreement"
        :true-value="1"
        :false-value="0"
        type="checkbox"
        class="check__input"
      />
      <span class="check__mark"></span>
      <span class="check__caption check__caption--s">Согласен на обработку персональных данных</span>
    </label>

    <span v-if="submitCount && !agreement" class="subscribe-form__error field-error">Это поле обязательно</span>
  </form>
</template>

<script setup>
import { ref, computed } from 'vue';

const email = ref('');
const agreement = ref(0);
const submitCount = ref(0);

const emailIsValid = computed(() => {
  return /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,6}$/.test(email.value);
});

const onSubmit = () => {
  submitCount.value += 1;
  if (!email.value || !emailIsValid.value || !agreement.value) return;

  console.log({ email: email.value, agreement: agreement.value });
  alert('Подписка оформлена');
  // reset
  email.value = '';
  agreement.value = 0;
  submitCount.value = 0;
};
</script>

<style lang="less">
.subscribe-form {
  width: 405px;
  max-width: 100%;

  &__title {
    margin: 0 0 25px;
    font-size: 16px;
    line-height: 22px;
    @media @bw500 {
      margin: 0 0 15px;
      font-weight: 400;
      font-size: 13px;
      line-height: 18px;
    }
  }

  &__wrapper {
    display: flex;
    gap: 12px;
    align-items: center;
    justify-content: space-between;
  }

  &__field-wrapper {
    flex: 1 1 auto;
  }

  &__input {
    width: 100%;
    padding: 12px 14px;
    border: 1px solid fade(@black, 12%);
    background: @white;
    box-sizing: border-box;
  }

  &__submit {
    flex: 0 0 auto;
    height: 44px;
    min-height: 44px;
    padding: 0 18px;
    background-color: rgba(31, 30, 30, 1);
    border-color: rgba(31, 30, 30, 1);

    &:hover,
    &:active {
      background-color: rgba(31, 30, 30, 1);
      color: @white;
    }
  }

  &__check {
    display: block;
    margin-top: 12px;
  }

  &__error {
    display: block;
    margin-top: 8px;
  }
}
</style>
