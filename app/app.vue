<template>
  <div class="app">
    <PageHeader class="app__header" />

    <main class="app__main">
      <NuxtPage />
    </main>

    <PageFooter class="app__footer" />
  </div>
</template>

<script setup>
import faviconIco from "~/assets/favicons/favicon.ico";
import favicon32 from "~/assets/favicons/favicon-32x32.png";
import favicon16 from "~/assets/favicons/favicon-16x16.png";
import favicon96 from "~/assets/favicons/favicon-96x96.png";
import appleTouchIcon from "~/assets/favicons/apple-icon-180x180.png";

const store = useStore();

useHead({
  htmlAttrs: {
    lang: () => "ru",
  },
  bodyAttrs: {
    class: {
      "overflow-nav": () => store.navActive,
      overflow: () => store.getModal,
    },
  },
  title: "LENNI ART",
  meta: [
    {
      name: "application-name",
      content: "LENNI ART",
    },
    {
      name: "apple-mobile-web-app-title",
      content: "LENNI ART",
    },
    {
      name: "og:title",
      property: "og:title",
      content: "LENNI ART",
    },
    {
      name: "description",
      content: "Арт пространство для людей, горящих сердцем и делом",
    },
    {
      name: "og:description",
      property: "og:description",
      content: "Арт пространство для людей, горящих сердцем и делом",
    },
    { name: "og:type", property: "og:type", content: "website" },
    {
      name: "og:site_name",
      property: "og:site_name",
      content: "LENNI ART",
    },
    { name: "theme-color", content: "#dedede" },
  ],
  link: [
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600;700&family=Open+Sans:wght@400;500;600;700&display=swap",
    },
    {
      rel: "shortcut icon",
      type: "image/vnd.microsoft.icon",
      href: `${faviconIco}?v=1`,
    },
    {
      rel: "icon",
      type: "image/png",
      href: favicon32,
      sizes: "32x32",
    },
    {
      rel: "icon",
      type: "image/png",
      href: favicon16,
      sizes: "16x16",
    },
    {
      rel: "icon",
      type: "image/png",
      href: favicon96,
      sizes: "96x96",
    },
    {
      rel: "apple-touch-icon",
      href: appleTouchIcon,
      sizes: "180x180",
    },
  ],
});
</script>

<style lang="less">
.app {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding-top: 147px;

  @media @bw1660 {
    padding-top: 111px;
  }

  @media @bw768 {
    padding-top: 70px;
  }
  &__main {
    flex: 1 0 auto;
  }
  &__footer {
    flex: 0 0 auto;
  }
}
</style>