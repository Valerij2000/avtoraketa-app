<template>
  <SectionWrapper>
    <Breadcrumbs :items="breadcrumbs" />
    <n-h2>Agent Dashboard</n-h2>

    <n-space vertical size="large">
      <n-statistic label="Deals this month" :value="4" />
      <n-statistic label="Earnings" value="200,000 ₽" />
      <n-tag type="success">Active agent</n-tag>
    </n-space>
  </SectionWrapper>
</template>

<script setup>
import SectionWrapper from "../components/common/SectionWrapper.vue";
import Breadcrumbs from "../components/common/Breadcrumbs.vue";

const breadcrumbs = [{ label: "Home", to: "/" }, { label: "Dashboard" }];
</script>
