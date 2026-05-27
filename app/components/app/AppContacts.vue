<template>
  <section class="contacts home__contacts">
    <h2 class="contacts__title section-title">Контакты</h2>

    <div class="contacts__container">
      <div class="contacts__wrapper">
        <ul class="contacts__list">
          <li class="contacts__item">
            <div class="contacts__item-mark">
              <img
                class="contacts__item-icon"
                src="/images/contacts/dot.jpg"
                alt="Местоположение"
                width="110"
                height="110"
              />
            </div>
            <div class="contacts__item-content">
              <h2 class="contacts__item-title">Томск, Красноармейская 146</h2>
              <div class="contacts__item-info">2 этаж</div>
              <div class="contacts__item-info">оф. 206</div>
            </div>
          </li>

          <li class="contacts__item">
            <div class="contacts__item-mark">
              <img
                class="contacts__item-icon"
                src="/images/contacts/home.jpg"
                alt="Отдел аренды"
                width="110"
                height="110"
              />
            </div>
            <div class="contacts__item-content">
              <h2 class="contacts__item-title">Отдел аренды</h2>
              <div class="contacts__item-info">8 (1556) 21-21-21</div>
              <div class="contacts__item-info">rent@lenni.ru</div>
            </div>
          </li>

          <li class="contacts__item">
            <div class="contacts__item-mark">
              <img
                class="contacts__item-icon"
                src="/images/contacts/star.jpg"
                alt="Отдел мероприятий"
                width="110"
                height="110"
              />
            </div>
            <div class="contacts__item-content">
              <h2 class="contacts__item-title">Отдел мероприятий</h2>
              <div class="contacts__item-info">8 (1556) 21-21-21</div>
              <div class="contacts__item-info">events@lenni.ru</div>
            </div>
          </li>
        </ul>
      </div>

      <div class="contacts__map">
        <TheMap class="contacts__map-element" />
      </div>
    </div>
  </section>
</template>

<style lang="less">
.contacts {
  padding: 80px 0 120px;



  &__container {
    .container();
    display: grid;
    grid-template-columns: minmax(0, 420px) minmax(0, 1fr);
    grid-template-areas: "wrapper map";
    gap: 30px;
    align-items: stretch;
  }

  &__wrapper {
    display: flex;
    align-items: stretch;
    grid-area: wrapper;
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  &__item {
    display: flex;
    align-items: center;
    gap: 20px;
    min-height: 140px;
    padding: 18px 20px;
    background-color: transparent;
    border: none;
    box-shadow: none;
  }

  &__item-mark {
    flex-shrink: 0;
    width: 84px;
    height: 84px;
    overflow: hidden;
    border-radius: 0;
  }

  &__item-icon {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__item-content {
    display: flex;
    flex-direction: column;
    gap: 4px;
    min-width: 0;
  }

  &__item-title {
    margin: 0;
    font-weight: 700;
    font-size: 20px;
    line-height: 1.25;
  }

  &__item-info {
    font-size: 16px;
    line-height: 1.35;
  }

  &__map {
    position: relative;
    min-height: 480px;
    overflow: hidden;
    border: 1px solid fade(@black, 12%);
    box-shadow: 0 8px 30px fade(@black, 8%);
    grid-area: map;
  }

  &__map-element {
    min-height: 480px;
  }

  @media @bw1020 {
    padding: 60px 0 100px;

    &__title {
      margin-bottom: 40px;
    }


    &__container {
      grid-template-columns: 1fr;
      grid-template-areas:
        "map"
        "wrapper";
    }

    &__map,
    &__map-element {
      min-height: 420px;
    }

    &__list {
      flex-direction: row;
      justify-content: center;
      gap: 24px;
      flex-wrap: wrap;
    }

    &__item {
      flex-direction: column;
      align-items: center;
      text-align: center;
      min-height: auto;
      padding: 12px 10px;
      width: 160px;
    }
  }

  @media @bw768 {
    padding: 40px 0 80px;

    &__title {
      margin-bottom: 30px;
    }

    &__item {
      min-height: 120px;
      padding: 16px;
    }

    &__item-mark {
      width: 72px;
      height: 72px;
    }

    &__item-title {
      font-size: 18px;
    }

    &__map,
    &__map-element {
      min-height: 360px;
    }
  }
}

/* Remove top spacing for contacts title on narrower screens (<1000px) */
@media (max-width: 999px) {
  .contacts {
    padding-top: 0;
  }

  .contacts__title.section-title {
    margin-top: 0;
  }
}
</style>
