<template>
  <n-button type="primary" size="large" @click="goToApply">
    {{ props.text }}
  </n-button>
</template>

<script setup>
import { defineProps } from "vue";
import { useRouter } from "vue-router";

const props = defineProps({
  text: {
    type: String,
    required: true,
  },
});

const router = useRouter();

function goToApply() {
  router.push("/apply");
}
</script>
