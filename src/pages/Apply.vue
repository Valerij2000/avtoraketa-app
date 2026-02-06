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
          @input="onContactInput"
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
        :disabled="leadStore.isCooldownActive"
      >
        {{ t("apply.form.submit") }}
      </n-button>
      <n-text
        v-if="leadStore.isCooldownActive"
        depth="3"
        style="margin-top: 8px"
      >
        {{ t("apply.form.cooldownHint") }}
      </n-text>
    </n-form>
  </SectionWrapper>
</template>

<script setup>
import { ref, reactive, computed, watch } from "vue";
import { useRouter, onBeforeRouteUpdate } from "vue-router";
import { useMessage } from "naive-ui";
import { useI18n } from "vue-i18n";
import SectionWrapper from "../components/common/SectionWrapper.vue";
import Breadcrumbs from "../components/common/Breadcrumbs.vue";
import { sendLeadToTelegram } from "../services/telegram";
import { useContactFormatter } from "@/composables/useContactFormatter";
import { useLeadStore } from "@/stores/lead";
import { useHead } from "@vueuse/head";

const leadStore = useLeadStore();
const router = useRouter();
const message = useMessage();

const { t } = useI18n();

const { formatContact } = useContactFormatter();

const breadcrumbs = [
  { label: t("apply.breadcrumbs.home"), to: "/" },
  { label: t("apply.breadcrumbs.apply") },
];

useHead({
  title: t("seo.apply.title"),
  meta: [
    {
      name: "description",
      content: t("seo.apply.description"),
    },
  ],
});

const formRef = ref(null);
const loading = ref(false);

const form = reactive({
  name: "",
  contact: "",
});

watch(
  () => form.contact,
  (value) => {
    const formatted = formatContact(value);
    if (formatted !== value) {
      form.contact = formatted;
    }
  },
);

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
  if (leadStore.isCooldownActive) {
    message.error(t("apply.form.cooldownHint"));
    return;
  }

  try {
    loading.value = true;

    await formRef.value.validate();
    const leadId = await sendLeadToTelegram(form);

    // Save timestamp AFTER successful submit
    leadStore.setLeadId(leadId);
    leadStore.markSubmitted();

    router.push({
      name: "Success",
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
