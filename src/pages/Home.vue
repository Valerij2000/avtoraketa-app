<script setup>
import HeroSection from "../components/sections/HeroSection.vue";
import WhyUsSection from "../components/sections/WhyUsSection.vue";
import HowItWorksSection from "../components/sections/HowItWorksSection.vue";
import EarningsSection from "../components/sections/EarningsSection.vue";
import CallToActionSection from "../components/sections/CallToActionSection.vue";
import Header from "../components/layout/Header.vue";
import { useHead } from "@vueuse/head";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

useHead({
  title: t("seo.home.title"),
  meta: [
    {
      name: "description",
      content: t("seo.home.description"),
    },
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: "Avtoraketa" },
    { property: "og:title", content: t("seo.home.title") },
    { property: "og:description", content: t("seo.home.description") },
    { property: "og:image", content: t("seo.image") },
    { property: "og:url", content: t("seo.url") },
  ],
});
</script>

<template>
  <Header />
  <main>
    <HeroSection id="home" />
    <WhyUsSection id="why-us" />
    <HowItWorksSection />
    <EarningsSection id="calc" />
    <CallToActionSection />
  </main>
</template>
