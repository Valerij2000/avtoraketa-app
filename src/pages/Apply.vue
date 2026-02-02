<template>
  <SectionWrapper>
    <Breadcrumbs :items="breadcrumbs" />
    <n-h2>Join Autoraketa</n-h2>

    <n-form :model="form" :rules="rules" ref="formRef">
      <n-form-item label="Name and Surname" path="name">
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
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";
import { useMessage } from "naive-ui";
import SectionWrapper from "../components/common/SectionWrapper.vue";
import Breadcrumbs from "../components/common/Breadcrumbs.vue";
import { sendLeadToTelegram } from "../services/telegram";

const router = useRouter();
const message = useMessage();

const breadcrumbs = [{ label: "Home", to: "/" }, { label: "Apply" }];

const formRef = ref(null);
const loading = ref(false);

const form = reactive({
  name: "",
  contact: "",
});

const rules = {
  name: [
    {
      required: true,
      message: "Please enter your name",
      trigger: ["blur", "input"],
    },
  ],
  contact: [
    {
      required: true,
      message:
        "Enter a valid phone number starts with 7 or Telegram username with @",
      trigger: ["blur", "input"],
    },
    {
      validator(_, value) {
        const phoneRegex = /^\+?\d{10,15}$/;
        const telegramRegex = /^@[\w\d_]{4,}$/;
        return phoneRegex.test(value) || telegramRegex.test(value);
      },
    },
  ],
};

async function submit() {
  if (!formRef.value) return;

  try {
    loading.value = true;

    await formRef.value.validate();
    const leadId = await sendLeadToTelegram(form);

    router.push("/success");

    form.name = "";
    form.contact = "";
  } catch (error) {
    console.error(error);
    message.error("Submission failed. Please try again.");
  } finally {
    loading.value = false;
  }
}
</script>
