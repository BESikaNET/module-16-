<template>
  <form class="events-form" @submit="onSubmit">
    <div class="events-form__list events-form__list--main">
      <div class="events-form__group events-form__group--w50">
        <FieldRadio
          name="format"
          :options="[
            {
              label: 'Мастер-класс/семинар',
              value: 'seminar',
            },
            {
              label: 'Концерт/выступление',
              value: 'concert',
            },
            {
              label: 'Выставка/показ',
              value: 'show',
            },
            {
              label: 'Другое',
              value: 'other',
            },
          ]"
          :initialValue="'seminar'"
          :rules="{ required: true }"
          :submitCount="submitCount"
          :label="'Формат мероприятия:'"
          class="events-form__field"
        />
      </div>

      <div class="events-form__group events-form__group--w50">
        <FieldSelect
          name="amount"
          :options="[
            {
              label: 'до 20 человек',
              value: '20',
            },
            {
              label: 'от 20 до 100 человек',
              value: '100',
            },
            {
              label: 'от 100 до 500 человек',
              value: '500',
            },
            {
              label: 'более 500 человек',
              value: '1000',
            },
          ]"
          :initialValue="'20'"
          :rules="{ required: true }"
          :submitCount="submitCount"
          label="Планируемое количество посетителей:"
          placeholder="Выберите количество"
          class="events-form__field"
        />

        <FieldDate
          name="date"
          label="Дата проведения:"
          :rules="{ required: true }"
          :submitCount="submitCount"
        />
      </div>

      <div class="events-form__section">
        <h3 class="events-form__section-title field-title">
          Контактные данные:
        </h3>

        <div class="events-form__list events-form__list--grid">
          <FieldInput
            name="first_name"
            label="Имя"
            placeholder="Имя"
            :rules="{ required: true }"
            :submitCount="submitCount"
            class="events-form__field events-form__field--w50"
          />

          <FieldInput
            name="last_name"
            label="Фамилия"
            placeholder="Фамилия"
            :rules="{ required: true }"
            :submitCount="submitCount"
            class="events-form__field events-form__field--w50"
          />

          <FieldInput
            name="phone"
            label="Телефон"
            placeholder="+7 (___) ___-__-__"
            :rules="{ required: true, phone: true }"
            mask="+7 (###) ###-##-##"
            :submitCount="submitCount"
            class="events-form__field events-form__field--w50"
          />

          <FieldInput
            name="email"
            label="Email"
            type="email"
            placeholder="Email"
            :rules="{ required: true, email: true }"
            :submitCount="submitCount"
            class="events-form__field events-form__field--w50"
          />
        </div>
      </div>

      <div class="events-form__section">
        <h3 class="events-form__section-title field-title">
          Есть пожелания? Напишите нам:
        </h3>

        <FieldText
          name="message"
          placeholder=""
          :submitCount="submitCount"
          class="events-form__field"
        />
      </div>
    </div>

    <FieldCheck
      name="agreement"
      :rules="{ required: true }"
      :submitCount="submitCount"
      :label="`Я соглашаюсь с <a href='#' target='_blank'>пользовательским соглашением</a> и с <a href='#' target='_blank'>политикой</a> использования персональных данных`"
      smallLabel
      class="events-form__field events-form__agreement"
    />

    <div class="events-form__btns">
      <button type="submit" class="btn events-form__submit">Отправить</button>

      <button type="button" class="events-form__close-btn" @click="close">
        Закрыть
      </button>
    </div>
  </form>
</template>

<script setup>
import { useForm } from "vee-validate";

const emits = defineEmits(["close"]);

const { submitCount, handleSubmit } = useForm();

const close = () => {
  emits("close");
};

const onSubmit = handleSubmit((submitValues) => {
  console.log(submitValues);
  alert("Отправлено");
});
</script>

<style lang="less">
.events-form {
  display: flex;
  flex-direction: column;
  gap: 24px;

  &__list {
    display: flex;
    align-items: flex-start;
  }

  &__list--main {
    gap: 25px;
    margin-top: 70px;
    flex-wrap: wrap;
  }

  &__list--grid {
    gap: 24px;
    flex-wrap: wrap;
    margin-top: 14px;
    width: 100%;

    .events-form__field {
      margin-bottom: 0;
    }
  }

  &__group {
    flex: 1 1 0;
    min-width: 0;
  }

  &__group--w50 {
    flex: 1 1 calc(50% - 24px);
    max-width: calc(50% - 24px);
  }

  &__section {
    width: 100%;
    margin-top: 14px;
  }

  &__section-title {
    margin: 0 0 6px;
  }

  &__field {
    margin-bottom: 22px;
  }

  &__field--w50 {
    flex: 1 1 calc(50% - 12px);
    min-width: 240px;
  }

  &__agreement {
    margin: 4px 0 8px;
  }

  &__btns {
    display: flex;
    align-items: center;
    gap: 150px;
    margin-top: 6px;
  }

  &__submit {
    width: 100%;
    max-width: 406px;
    background-color: @gray;
    border-color: @gray_dark;
    color: @black;
  }

  &__close-btn {
    border: none;
    background: transparent;
    padding: 0;
    color: @black;
    font-family: @font1;
    font-size: 16px;
    font-weight: 600;
    line-height: 22px;
    letter-spacing: 0;
    text-align: left;
    text-transform: uppercase;
    border-bottom: none;
    text-decoration: underline;
    text-decoration-thickness: 2px;
    text-underline-offset: 4px;
  }

  @media @bw768 {
    &__list--main {
      flex-direction: column;
      gap: 24px;
    }

    &__list--grid {
      flex-direction: column;
    }

    &__group--w50 {
      max-width: 100%;
    }
  }

  /* For screens narrower than 760px make fields stack and take full width */
  @media (max-width: 760px) {
    &__list--main {
      flex-direction: column;
      gap: 20px;
    }

    &__list--grid {
      flex-direction: column;
    }

    &__group--w50 {
      flex: 1 1 100%;
      max-width: 100%;
    }

    &__field--w50 {
      flex: 1 1 100%;
      min-width: 0;
      width: 100%;
    }

    .events-form__field {
      width: 100%;
    }

    &__btns {
      flex-direction: column;
      gap: 12px;
      align-items: stretch;
    }
  }
}
</style>
