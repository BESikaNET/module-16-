<template>
  <div class="home">
    <section class="offers">
      <h2 class="offers__title">Арт-пространство</h2>

      <picture class="offers__logo">
        <source type="image/webp" srcset="/images/offers/LENNI.webp" />
        <img src="/images/offers/LENNI.png" class="offers__img" alt="Lenni" />
      </picture>

      <div class="offers__slogan">
        <h3 class="offers__slogan-text">Для людей, горящих сердцем и делом</h3>
        <h3 class="offers__slogan-text">Место для настоящего</h3>
      </div>

      <AppOffers />
    </section>

    <section class="about">
      <h2 class="section-title about__title">о нас</h2>
      <div class="about__info">
        <h3 class="about__info-title">Проект «Millennials»</h3>
        <p class="about__info-text">
          Мы развиваем арт-пространство и делаем это : быстрый старт,
          SSR и удобная работа с контентом. У нас есть площадка и опыт, у вас —
          идеи и энергия.
        </p>
      </div>
      <div class="about__container">
        <div class="about__block2">
          <picture class="about__picture">
            <source type="image/webp" srcset="/images/pic1.webp" />
            <img src="/images/pic1.jpg" class="about__img" alt="about" />
          </picture>
          <h3 class="about__title">Мы предоставляем площадки для мероприятий</h3>
          <picture class="about__picture2">
            <source type="image/webp" srcset="/images/pic2.webp" />
            <img src="/images/pic2.jpg" class="about__img" alt="about" />
          </picture>
          <p class="about__text">
            И помогаем с организацией, если это нужно. Наша цель — вовлечь в
            культурную жизнь города как можно больше людей и дать старт новым
            творческим историям.
          </p>
        </div>

        <div class="about__story">
          <div class="about__story-media">
            <div class="about__story-bg"></div>
            <picture class="about__story-picture">
              <img src="/images/about.jpg" class="about__story-img" alt="story" />
            </picture>
          </div>
          <div class="about__story-content">
            <p class="about__story-text">
              Мы уже успешно организовали и провели более 100 проектов.
              Посмотрите, как это было классно.
            </p>
            <a href="#" class="about__story-link">
              Смотреть
              <svg class="about__story-arrow" width="60" height="40">
                <use :xlink:href="`${iconsSprite}#arrow`"></use>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>

    <EventsUpcoming />

    <div class="listing--white">
      <section class="listing home__listing">
        <h2 class="section-title listing__title">Блог</h2>
        <div class="listing__article-list">
          <article class="article-card">
            <a href="#" class="article-card__link">
              <picture class="article-card__picture">
                <source type="image/webp" srcset="/images/blog/article.webp" />
                <img src="/images/blog/article.jpg" alt="article" class="article-card__img" />
              </picture>

              <div class="article-card__content">
                <time datetime="2026-12-07" class="article-card__time">07.12.2026</time>
                <h4 class="article-card__title">Как мы запускаем события</h4>
                <p class="article-card__description">
                  Практика SSR, удобные шаблоны и скорость разработки — наш опыт и
                  советы.
                </p>
              </div>

              <div class="article-card__arrow" aria-hidden="true">
                <svg class="article-card__arrow-icon" width="92" height="62">
                  <use :xlink:href="`${iconsSprite}#arrow`"></use>
                </svg>
              </div>
            </a>
          </article>

          <article class="article-card">
            <a href="#" class="article-card__link">
              <picture class="article-card__picture">
                <source type="image/webp" srcset="/images/blog/article.webp" />
                <img src="/images/blog/article.jpg" alt="article" class="article-card__img" />
              </picture>

              <div class="article-card__content">
                <time datetime="2026-12-10" class="article-card__time">10.12.2026</time>
                <h4 class="article-card__title">События, которые хочется повторить</h4>
                <p class="article-card__description">
                  Истории участников и команд, которые сделали классный проект.
                </p>
              </div>

              <div class="article-card__arrow" aria-hidden="true">
                <svg class="article-card__arrow-icon" width="92" height="62">
                  <use :xlink:href="`${iconsSprite}#arrow`"></use>
                </svg>
              </div>
            </a>
          </article>

          <article class="article-card">
            <a href="#" class="article-card__link">
              <picture class="article-card__picture">
                <source type="image/webp" srcset="/images/blog/article.webp" />
                <img src="/images/blog/article.jpg" alt="article" class="article-card__img" />
              </picture>

              <div class="article-card__content">
                <time datetime="2026-12-14" class="article-card__time">14.12.2026</time>
                <h4 class="article-card__title">Почему мы любим локальные проекты</h4>
                <p class="article-card__description">
                  Поддерживаем городские инициативы и открываем новые имена.
                </p>
              </div>

              <div class="article-card__arrow" aria-hidden="true">
                <svg class="article-card__arrow-icon" width="92" height="62">
                  <use :xlink:href="`${iconsSprite}#arrow`"></use>
                </svg>
              </div>
            </a>
          </article>
        </div>
        <a href="#" class="listing__link">Смотреть все</a>
      </section>
    </div>

    <AppContacts />

    <section class="home__promise">
      <div class="home__promise-inner">
        <p class="home__promise-text">
          <span class="home__promise-line home__promise-line--1">Просто делайте, что нравится,</span>
          <span class="home__promise-line home__promise-line--2">а мы вам поможем</span>
        </p>
      </div>
    </section>
  </div>
</template>

<script setup>
import AppOffers from "~/components/app/AppOffers.vue";

const iconsSprite = "/icons/symbols.svg";
</script>

<style lang="less">
.home {
  &__promise {
    padding: 0 0 120px;
  }

  &__promise-inner {
    .container();
  }

  &__promise-text {
    margin: 0;
    max-width: 100%;
    color: @black;
    font-family: @font3;
    font-weight: 700;
    font-size: 90px;
    line-height: 1.2;
    letter-spacing: 0;
    text-align: left;
  }

  &__promise-line {
    display: block;
    width: fit-content;
    white-space: nowrap;
  }

  &__promise-line--2 {
    padding-left: 360px;
  }

  @media @bw1660 {
    &__promise-text {
      font-size: 86px;
    }

    &__promise-line--2 {
      padding-left: 300px;
    }
  }

  @media @bw1340 {
    &__promise {
      padding-bottom: 100px;
    }

    &__promise-text {
      font-size: 72px;
    }

    &__promise-line--2 {
      padding-left: 235px;
    }
  }

  @media @bw1020 {
    &__promise-text {
      font-size: 56px;
    }

    &__promise-line--2 {
      padding-left: 175px;
    }
  }

  @media @bw768 {
    &__promise {
      padding-bottom: 80px;
    }

    &__promise-text {
      font-size: 36px;
    }

    &__promise-line--2 {
      padding-left: 95px;
    }
  }

  @media @bw500 {
    &__promise-text {
      font-size: 28px;
    }

    &__promise-line--2 {
      padding-left: 48px;
    }
  }

  /* Ensure promise text doesn't overflow on medium screens */
  @media (max-width: 900px) {
    &__promise-text {
      max-width: 90%;
      overflow-wrap: break-word;
    }

    &__promise-line--2 {
      padding-left: 0;
    }
  }

  /* Prevent overflow: allow lines to wrap and reduce size on medium screens */
  @media (max-width: 1100px) {
    &__promise-text {
      /* smaller intermediate size to avoid overflow */
      font-size: 64px;
      line-height: 1.15;
    }

    &__promise-line {
      white-space: normal;
      width: 100%;
      display: block;
    }

    &__promise-line--2 {
      padding-left: 0;
    }
  }

  /* Typography rules for promise text at specific breakpoints */
  @media (max-width: 1439px) {
    &__promise-text {
      font-family: 'Mak', @font3;
      font-weight: 700;
      font-size: 90px;
      line-height: 1.2;
      letter-spacing: 0;
      text-align: left;
    }
  }

  @media (max-width: 999px) {
    &__promise-text {
      font-family: 'Mak', @font3;
      font-weight: 700;
      font-size: 80px;
      line-height: 1.2;
      letter-spacing: 0;
      text-align: left;
    }
  }

  @media (max-width: 699px) {
    &__promise-text {
      font-family: 'Mak', @font3;
      font-weight: 700;
      font-size: 40px;
      line-height: 1.2;
      letter-spacing: 0;
      text-align: left;
    }
  }
}

/* Blog listing horizontal article cards */
.listing__article-list {
  display: flex;
  flex-direction: column;
  gap: 34px;
}

/* Center listing block */

.home__listing,
.listing {
  max-width: 1334px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 30px;
  padding-right: 30px;
  padding-bottom: 0;
}

.home__listing {
  display: flex;
  flex-direction: column;
}

.home__listing .listing__link {
  align-self: flex-end;
  margin-top: 12px; /* space above the link */
}

/* remove bottom border for last article */
.listing__article-list .article-card:last-child .article-card__link {
  border-bottom: none;
  padding-bottom: 0;
}

.article-card {
  width: 100%;
}

.article-card__link {
  display: grid;
  grid-template-columns: 260px minmax(0, 1fr) 92px;
  gap: 32px;
  align-items: center;
  text-decoration: none;
  color: @black;
  padding-bottom: 24px;
  border-bottom: 1px solid fade(@black, 20%);
}

.article-card__picture {
  position: relative;
}

.article-card__picture::after {
  content: "";
  display: block;
  padding-top: 58%;
}

.article-card__img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.article-card__content {
  min-width: 0;
}

.article-card__time {
  display: block;
  margin-bottom: 18px;
  font-weight: 300;
  color: fade(@black, 70%);
}

.article-card__title {
  margin: 0 0 12px;
  font-size: 20px;
  font-weight: 600;
  text-decoration: underline transparent;
}

.article-card__description {
  margin: 0;
  color: fade(@black, 85%);
  font-size: 15px;
  line-height: 1.4;
}

.article-card__arrow {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.article-card__arrow-icon {
  width: 92px;
  height: 62px;
  color: @black;
  fill: currentColor;
}

@media @bw1020 {
  .article-card__link {
    grid-template-columns: 220px minmax(0, 1fr) 78px;
    gap: 24px;
  }
}

@media @bw768 {
  .article-card__link {
    grid-template-columns: 1fr;
    gap: 18px;
  }

  .article-card__arrow {
    justify-content: flex-start;
  }
}

@media (max-width: 799px) {
  .article-card__arrow {
    justify-content: flex-end;
  }
}

@media (max-width: 599px) {
  .article-card__arrow {
    justify-content: flex-end;
  }

  .article-card__arrow-icon {
    margin-left: auto;
    display: block;
  }
}

/* make listing link use same styles as events-upcoming__link */
.listing__link {
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
</style>
