<template>
  <SectionWrapper>
    <Breadcrumbs :items="breadcrumbs" />
    <n-h2>{{ t("apply.title") }}</n-h2>

    <n-form :model="form" :rules="rules" ref="formRef" class="form-apply">
      <n-form-item :label="t('apply.form.name.label')" path="name">
        <n-input
          v-model:value="form.name"
          :placeholder="t('apply.form.name.placeholder')"
        />
      </n-form-item>

      <n-form-item :label="t('apply.form.contact.label')" path="contact">
        <n-input
          v-model:value="form.contact"
          @input="formatContact"
          :placeholder="t('apply.form.contact.placeholder')"
        />

        <template #feedback>
          <small>{{
            t("apply.form.contact.hint", {
              plusSeven: "(+7...)",
              atSign: "(@...)",
            })
          }}</small>
        </template>
      </n-form-item>

      <n-button
        type="primary"
        :loading="loading"
        @click="submit"
        class="form-button"
        :disabled="isCooldownActive"
      >
        {{ t("apply.form.submit") }}
      </n-button>
      <n-text v-if="isCooldownActive" depth="3" style="margin-top: 8px">
        {{ t("apply.form.cooldownHint") }}
      </n-text>
    </n-form>
  </SectionWrapper>
</template>

<script setup>
const SUBMIT_COOLDOWN_MS = 3 * 60 * 60 * 1000; // 3 hours
const LAST_SUBMIT_KEY = "avtoraketa_last_submit";

import { ref, reactive, computed } from "vue";
import { useRouter } from "vue-router";
import { useMessage } from "naive-ui";
import { useI18n } from "vue-i18n";
import SectionWrapper from "../components/common/SectionWrapper.vue";
import Breadcrumbs from "../components/common/Breadcrumbs.vue";
import { sendLeadToTelegram } from "../services/telegram";

const router = useRouter();
const message = useMessage();

const { t } = useI18n();

const breadcrumbs = [
  { label: t("apply.breadcrumbs.home"), to: "/" },
  { label: t("apply.breadcrumbs.apply") },
];

const formRef = ref(null);
const loading = ref(false);

const form = reactive({
  name: "",
  contact: "",
});

const isCooldownActive = computed(() => {
  const lastSubmit = localStorage.getItem(LAST_SUBMIT_KEY);
  if (!lastSubmit) return false;

  return Date.now() - Number(lastSubmit) < SUBMIT_COOLDOWN_MS;
});

function canSubmitForm() {
  const lastSubmit = localStorage.getItem(LAST_SUBMIT_KEY);

  if (!lastSubmit) return true;

  const elapsed = Date.now() - Number(lastSubmit);
  return elapsed >= SUBMIT_COOLDOWN_MS;
}

function formatContact(value) {
  if (!value) return;

  // Remove spaces
  value = value.replace(/\s+/g, "");

  // If numeric only, phone number
  if (/^\d+$/.test(value) && !value.startsWith("+7")) {
    value = "+7" + value;
  }

  // If starts with +7 and more than 10 digits after +7
  if (value.startsWith("+7")) {
    const digits = value.slice(2, 12); // only take first 10 digits
    value = "+7" + digits;
  }

  // If letters/numbers without @, prepend @
  if (/^[a-zA-Z_]\w*$/.test(value) && !value.startsWith("@")) {
    value = "@" + value;
  }

  form.contact = value;
}

const rules = {
  name: [
    {
      required: true,
      message: t("apply.form.name.required"),
      trigger: ["blur", "input"],
    },
  ],
  contact: [
    {
      required: true,
      message: t("apply.form.contact.required"),
      trigger: ["blur", "input"],
    },
  ],
};

async function submit() {
  if (!canSubmitForm()) {
    const remainingMs =
      SUBMIT_COOLDOWN_MS -
      (Date.now() - Number(localStorage.getItem(LAST_SUBMIT_KEY)));

    const remainingMinutes = Math.ceil(remainingMs / 60000);

    message.error(t("apply.messages.cooldown", { minutes }));

    return;
  }

  try {
    loading.value = true;

    await formRef.value.validate();
    const leadId = await sendLeadToTelegram(form);

    // Save timestamp AFTER successful submit
    localStorage.setItem(LAST_SUBMIT_KEY, Date.now().toString());

    router.push({
      name: "Success",
      state: { leadId },
    });

    form.name = "";
    form.contact = "";
  } catch (error) {
    console.error(error);
    message.error(t("apply.messages.error"));
  } finally {
    loading.value = false;
  }
}
</script>

<style scoped>
.form-apply {
  display: flex;
  flex-direction: column;
}

.form-button {
  display: flex;
  margin-top: 3vmin;
}
</style>
