<script setup>
import HeroSection from "../components/sections/HeroSection.vue";
import WhyUsSection from "../components/sections/WhyUsSection.vue";
import HowItWorksSection from "../components/sections/HowItWorksSection.vue";
import EarningsSection from "../components/sections/EarningsSection.vue";
import CallToActionSection from "../components/sections/CallToActionSection.vue";
import Header from "../components/layout/Header.vue";
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
