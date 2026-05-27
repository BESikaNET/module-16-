<template>
  <section class="app-listing">
    <h1 class="app-listing__title section-title">{{ title }}</h1>

    <div class="app-listing__list">
      <slot />
    </div>

    <button type="button" class="more-btn app-listing__more-btn">
      Показать всё

      <SvgIcon class="more-btn__arrow" name="arrow_down" width="62" height="92" />
    </button>

    <section class="app-listing__services">
      <h2 class="app-listing__services-title section-title">
        Дополнительные услуги
      </h2>

      <p class="app-listing__services-text">
        Перед запуском проекта, мы подготавливаем подробную смету и согласуем
        ее с клиентом. Убедившись, что все пожеланию учтены и мы можем
        приступать к реализациии проекта, начинается сложная, но интересная
        работа, результатом которой будет проведение вашего мероприятия на
        высшем уровне.
      </p>

      <div class="app-listing__services-table">
        <table class="app-listing__table">
          <thead>
            <tr class="app-listing__table-head-top">
              <th scope="col"></th>
              <th scope="col">ТАРИФ</th>
              <th scope="col">ТАРИФ</th>
              <th scope="col">ТАРИФ</th>
            </tr>
            <tr class="app-listing__table-head-bottom">
              <th scope="col"></th>
              <th scope="col">ТАРИФ «LIGHT»</th>
              <th scope="col">ТАРИФ «PROMO»</th>
              <th scope="col">ТАРИФ «ALL STARS»</th>
            </tr>
          </thead>

          <tbody>
            <tr class="app-listing__table-row--striped">
              <th scope="row">Стоимость за час</th>
              <td>1 000 ₽</td>
              <td>3 000 ₽</td>
              <td>от 6 000 ₽</td>
            </tr>
            <tr class="app-listing__table-row--highlight">
              <th scope="row">Ведущий мероприятия</th>
              <td><span class="app-listing__table-mark">—</span></td>
              <td><span class="app-listing__table-mark app-listing__table-mark--yes"></span></td>
              <td><span class="app-listing__table-mark app-listing__table-mark--yes"></span></td>
            </tr>
            <tr class="app-listing__table-row--striped">
              <th scope="row">Фотосъемка</th>
              <td><span class="app-listing__table-mark app-listing__table-mark--yes"></span></td>
              <td><span class="app-listing__table-mark app-listing__table-mark--yes"></span></td>
              <td><span class="app-listing__table-mark app-listing__table-mark--yes"></span></td>
            </tr>
            <tr class="app-listing__table-row--highlight">
              <th scope="row">Видеосъемка</th>
              <td><span class="app-listing__table-mark">—</span></td>
              <td><span class="app-listing__table-mark">—</span></td>
              <td><span class="app-listing__table-mark app-listing__table-mark--yes"></span></td>
            </tr>
            <tr class="app-listing__table-row--striped">
              <th scope="row">Организация питания</th>
              <td><span class="app-listing__table-mark">—</span></td>
              <td><span class="app-listing__table-mark app-listing__table-mark--yes"></span></td>
              <td><span class="app-listing__table-mark app-listing__table-mark--yes"></span></td>
            </tr>
            <tr class="app-listing__table-row--highlight">
              <th scope="row">Декор</th>
              <td><span class="app-listing__table-mark">—</span></td>
              <td><span class="app-listing__table-mark">—</span></td>
              <td><span class="app-listing__table-mark app-listing__table-mark--yes"></span></td>
            </tr>
            <tr class="app-listing__table-row--striped">
              <th scope="row">Звуковое сопровождение</th>
              <td><span class="app-listing__table-mark">—</span></td>
              <td><span class="app-listing__table-mark app-listing__table-mark--yes"></span></td>
              <td><span class="app-listing__table-mark app-listing__table-mark--yes"></span></td>
            </tr>
            <tr class="app-listing__table-row--highlight">
              <th scope="row">Дополнительное освещение</th>
              <td><span class="app-listing__table-mark">—</span></td>
              <td><span class="app-listing__table-mark">—</span></td>
              <td><span class="app-listing__table-mark app-listing__table-mark--yes"></span></td>
            </tr>
            <tr class="app-listing__table-row--klining">
              <th scope="row">Клининг</th>
              <td><span class="app-listing__table-mark">—</span></td>
              <td><span class="app-listing__table-mark" >—</span></td>
              <td><span class="app-listing__table-mark app-listing__table-mark--yes"></span></td>
            </tr>
            <tr class="app-listing__table-row--empty" aria-hidden="true">
              <th></th>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>

      </div>
    </section>
  </section>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: "",
  },
});
</script>

<style lang="less">
.app-listing {
    .container;
    margin: 0 auto;
  display: flex;
  flex-direction: column;

  &__title {
    margin-top: 10px;
  }

  @media (max-width: 619px) {
    /* remove container side paddings so table can occupy full viewport */
    padding-left: 0;
    padding-right: 0;
  }

  &__list {
    display: flex;
    flex-wrap: wrap;
    gap: 115px 58px;
    /* spread cards across the full row so the leftmost and rightmost cards
       are flush with the listing edges (taking padding into account) */
    justify-content: space-between;
    @media @bw1660 {
      gap: 90px 40px;
    }
    @media @bw1020 {
      gap: 90px 30px;
    }
    @media @bw650 {
      gap: 60px 0;
      justify-content: center;
    }
  }

  &__card {
    /* three cards per row on wide screens */
    flex: 0 0 calc(33.3333% - 50px);
    width: calc(33.3333% - 50px);
    max-width: none;

    @media @bw1660 {
      /* keep the same three-column layout below 1340px */
      flex: 0 0 calc(33.3333% - 50px);
      width: calc(33.3333% - 50px);
      max-width: none;
    }

    @media @bw1020 {
      /* switch to two columns below 1020px */
      width: calc((100% - 30px) / 2);
      flex: 0 0 calc((100% - 30px) / 2);
      max-width: none;
    }

    @media @bw650 {
      width: 100%;
      flex: 0 0 100%;
      max-width: none;
    }
  }

  &__more-btn {
    margin: 70px auto 0;
    width: 150px;
    padding: 20px;
    text-transform: none;
    text-decoration: none;
    &:hover {
      color: @red;
      text-decoration-color: @red;
    }
  }

  &__services {
    margin-top: 100px;
    margin-bottom: 100px;
  }

  &__services-title {
    margin-top: 0;
  }

  &__services-text {
    margin: 0;
    max-width: 840px;
    color: @black;
    font-family: @font1;
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0;
    text-align: left;
  }

  &__services-table {
    width: 100%;
    max-width: 1334px;
    margin-top: 60px;
    overflow-x: auto;
    @media (max-width: 619px) {
      /* use full viewport width on mobile */
      max-width: none;
      width: 100%;
      margin-left: 0;
      margin-right: 0;
      overflow-x: hidden;
    }
  }

  &__table {
    width: 100%;
    border-collapse: collapse;
    table-layout: fixed;
    color: @black;
    font-family: @font1;
    font-size: 16px;
    line-height: 22px;

    th,
    td {
      padding: 12px 8px;
      border-bottom: 1px solid fade(@black, 12%);
      border-right: 1px solid fade(@black, 12%);
      vertical-align: middle;
    }

    thead th {
      border-bottom: none;
    }

    tbody tr:last-child th,
    tbody tr:last-child td {
      border-bottom: none;
      border-top: 1px solid fade(@black, 12%);
    }

    tbody tr:nth-last-child(2) th,
    tbody tr:nth-last-child(2) td {
      border-bottom: none;
    }

    /* desktop striping removed — striping will be applied only on mobile */

    &-row--empty {
      height: 48px;
    }

    th:last-child,
    td:last-child {
      border-right: none;
    }

    thead th {
      font-weight: 700;
      text-transform: uppercase;
      text-align: center;
    }

    tbody th {
      width: 32%;
      font-weight: 400;
      text-align: left;
    }

    tbody td {
      text-align: center;
    }

    /* Mobile layout: stack rows, show tariff headers top and bottom */
    @media (max-width: 619px) {
      display: block;

      thead {
        display: block;
      }

      thead tr {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      thead tr th {
        flex: 1 1 33.3333%;
        text-align: center;
      }

      thead tr th:first-child {
        display: none;
      }

      tbody {
        display: block;
      }

      tbody tr {
        display: block;
        padding: 0;
      }

      /* make the service name take full width as its own row */
      tbody tr th {
        display: block;
        width: 100%;
        text-align: center;
        padding: 14px 8px;
        border-top: 1px solid fade(@black, 12%);
        border-bottom: 1px solid fade(@black, 12%);
        background: transparent;
      }

      /* values row: show three columns */
      tbody tr td {
        display: inline-block;
        width: 33.3333%;
        box-sizing: border-box;
        text-align: center;
        padding: 12px 8px;
        border-right: 1px solid fade(@black, 12%);
        border-bottom: none;
        vertical-align: middle;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      tbody tr td:last-child {
        border-right: none;
      }

      .app-listing__table-footer {
        display: block;
        margin-top: 20px;
      }

      .app-listing__table-footer-row {
        display: flex;
        justify-content: space-between;
        background: transparent;
      }

      .app-listing__table-footer-row div {
        flex: 1 1 33.3333%;
        text-align: center;
        padding: 12px 8px;
        height: 52px;
        line-height: 52px;
      }

      .app-listing__table-footer-names div {
        font-weight: 700;
      }

      /* Mobile typography: Open Sans SemiBold 14/19 centered */
      thead tr th,
      tbody tr th,
      tbody tr td,
      .app-listing__table-footer-row div {
        font-family: @font1;
        font-weight: 600;
        font-size: 14px;
        line-height: 19px;
        letter-spacing: 0;
        text-align: center;
      }

      /* Mobile-only highlights:
         - highlight odd service rows (1/3/5...) where the service name is full-width
         - highlight the central tariff column (middle of three) */
      tbody tr:nth-child(odd) th {
        background-color: rgba(191, 191, 191, 1);
      }

      /* Explicitly highlight the requested service rows on mobile */
      tbody tr.app-listing__table-row--highlight th {
        background-color: rgba(191, 191, 191, 1);
      }

      /* use nth-of-type to target the 2nd td (middle tariff column) regardless of th */
      tbody tr td:nth-of-type(2) {
        background-color: rgba(191, 191, 191, 1);
      }

      /* When the middle column contains '-', keep the cell compact and 52px tall */
      tbody tr.app-listing__table-row--highlight td:nth-of-type(2) {
        height: 52px;
        padding-top: 0;
        padding-bottom: 0;
        line-height: 52px;
      }

      /* Keep the whole dash/check row at 52px total height */
      tbody tr.app-listing__table-row--highlight th,
      tbody tr.app-listing__table-row--highlight td {
        height: 52px;
        line-height: 52px;
        padding-top: 0;
        padding-bottom: 0;
      }

      /* The Klining row keeps the middle column shorter on mobile */
      tbody tr.app-listing__table-row--klining td:nth-of-type(2) {
        height: 52px;
        padding-top: 0;
        padding-bottom: 0;
        line-height: 30px;
      }

      /* Remove the bottom outer border on mobile */
      tbody tr.app-listing__table-row--highlight td,
      tbody tr.app-listing__table-row--highlight th,
      tbody tr.app-listing__table-row--empty {
        border-bottom: none;
      }

      /* Hide the trailing empty row on mobile, keep the row with dashes/checks */
      tbody tr.app-listing__table-row--empty {
        display: none;
      }
    }

    /* Footer: hidden on desktop, visible on mobile only */
    .app-listing__table-footer {
      display: none;
      margin-top: 20px;
      width: 100%;
      box-sizing: border-box;
    }

    .app-listing__table-footer-row {
      display: flex;
      width: 100%;
      justify-content: space-between;
    }

    .app-listing__table-footer-row div {
      flex: 1 1 33.3333%;
      text-align: center;
      padding: 12px 8px;
    }

    /* Hide the duplicated 'ТАРИФ' top row we previously added */
    .app-listing__table-head-top {
      display: none;
    }
  }

  &__table-mark {
    display: inline-block;
    min-width: 14px;
    font-size: 18px;
    line-height: 1;
    color: @black;

    &--yes {
      position: relative;
      width: 24px;
      height: 24px;
      min-width: 24px;
      border-radius: 50%;
      background-color: @black;
      color: transparent;
      font-size: 0;

      &::after {
        content: "✓";
        position: absolute;
        top: 50%;
        left: 50%;
        color: @white;
        font-size: 14px;
        font-weight: 700;
        line-height: 1;
        transform: translate(-50%, -58%);
      }
    }
  }
}

/* Features (three squares with titles and texts) */
.app-listing__features {
  margin-top: 60px;
  margin-bottom: 0;
  padding-bottom: 120px;
  .container;

  &-row {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: space-between;
    align-items: flex-start;

    @media (max-width: 1000px) {
      justify-content: center;
    }

    @media @bw650 {
      flex-direction: column;
      gap: 24px;
      align-items: center;
    }
  }

  .app-listing__feature {
    flex: 0 0 calc(33.3333% - 20px);
    width: 100%;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 1000px) {
      flex: 0 0 calc(50% - 15px);
      max-width: 400px;
    }

    @media (max-width: 1000px) {
      &:nth-child(3) {
        flex-basis: 100%;
      }
    }

    @media @bw650 {
      flex: 0 0 100%;
      align-items: center;
      text-align: center;
    }

    @media (max-width: 500px) {
      max-width: 200px;
    }
  }

  .app-listing__feature-square {
    width: 110px;
    height: 110px;
    background: #000;
    margin-bottom: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .app-listing__feature-icon {
    display: block;
    width: 20px;
    height: 20px;
  }

  .app-listing__feature-title {
    font-family: @font1;
    font-weight: 600;
    font-size: 20px;
    line-height: 27px;
    letter-spacing: 0;
    color: @black;
    margin-bottom: 12px;
    text-align: center;
  }

  .app-listing__feature-text {
    font-family: @font1;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: 0;
    color: @black;
    text-align: center;
  }
}
</style>
