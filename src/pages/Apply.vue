<template>
  <SectionWrapper>
    <Breadcrumbs :items="breadcrumbs" />
    <n-h2>Join Autoraketa</n-h2>

    <n-form :model="form" :rules="rules" ref="formRef">
      <n-form-item label="Name" path="name">
        <n-input v-model:value="form.name" />
      </n-form-item>

      <n-form-item label="Phone or Telegram" path="contact">
        <n-input v-model:value="form.contact" />
      </n-form-item>

      <n-button type="primary" :loading="loading" @click="submit">
        Submit
      </n-button>
    </n-form>
  </SectionWrapper>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import SectionWrapper from "../components/common/SectionWrapper.vue";
import Breadcrumbs from "../components/common/Breadcrumbs.vue";
import { sendApplication } from "../services/api";

const router = useRouter();

const breadcrumbs = [{ label: "Home", to: "/" }, { label: "Apply" }];

const formRef = ref(null);
const loading = ref(false);

const form = ref({
  name: "",
  contact: "",
});

const rules = {
  name: {
    required: true,
    message: "Please enter your name",
    trigger: "blur",
  },
  contact: {
    required: true,
    message: "Please enter your contact",
    trigger: "blur",
  },
};

function submit() {
  formRef.value?.validate(async (errors) => {
    if (errors) return;

    loading.value = true;

    // simulate API
    setTimeout(() => {
      loading.value = true;
      sendApplication(form.value).then(() => {
        loading.value = false;
        router.push("/success");
      });
    }, 1000);
  });
}
</script>
