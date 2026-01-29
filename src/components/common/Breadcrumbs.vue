<template>
  <n-breadcrumb separator="/">
    <n-breadcrumb-item v-for="(item, index) in items" :key="index">
      <template v-if="item.to">
        <router-link :to="item.to">{{ item.label }}</router-link>
      </template>
      <template v-else>
        {{ item.label }}
      </template>
    </n-breadcrumb-item>
  </n-breadcrumb>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  items: {
    type: Array,
    default: () => [],
  },
});
</script>
