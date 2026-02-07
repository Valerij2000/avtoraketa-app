<template>
  <SectionWrapper>
    <Breadcrumbs :items="breadcrumbs" />

    <n-h2>{{ t("profile.title") }}</n-h2>

    <n-card v-if="profile.isFilled">
      <n-descriptions column="1" bordered>
        <n-descriptions-item :label="t('profile.name')">
          {{ profile.name }}
        </n-descriptions-item>

        <n-descriptions-item :label="t('profile.contact')">
          {{ profile.contact }}
        </n-descriptions-item>

        <n-descriptions-item :label="t('profile.leadId')">
          {{ profile.leadId }}
        </n-descriptions-item>

        <n-descriptions-item :label="t('profile.submittedAt')">
          {{ formattedDate }}
        </n-descriptions-item>
      </n-descriptions>

      <n-button
        tertiary
        type="error"
        style="margin-top: 16px"
        @click="confirmClearProfile"
      >
        {{ t("profile.clear") }}
      </n-button>
    </n-card>

    <n-empty v-else :description="t('profile.empty')" />
  </SectionWrapper>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { useI18n } from "vue-i18n";
import { useLeadStore } from "@/stores/lead";
import { useProfileStore } from "@/stores/profile";
import { useDialog, useMessage } from "naive-ui";
import { sendProfileDeleted } from "@/services/telegram";
import Breadcrumbs from "../components/common/Breadcrumbs.vue";
import SectionWrapper from "@/components/common/SectionWrapper.vue";

onMounted(() => {
  profile.hydrate();
});

const { t } = useI18n();

const leadStore = useLeadStore();
const profile = useProfileStore();

const dialog = useDialog();
const message = useMessage();

const breadcrumbs = [
  { label: t("breadcrumbs.home"), to: "/" },
  { label: t("breadcrumbs.profile") },
];

const formattedDate = computed(() => {
  if (!profile.submittedAt) return "";
  return new Date(profile.submittedAt).toLocaleString();
});

function confirmClearProfile() {
  dialog.warning({
    title: t("profile.warning.title"),
    content: t("profile.warning.content"),
    positiveText: t("profile.warning.positiveText"),
    negativeText: t("profile.warning.negativeText"),
    onPositiveClick: clearProfile,
  });
}

async function clearProfile() {
  try {
    const leadId = leadStore.leadId;

    await sendProfileDeleted({ leadId });

    profile.clear();
    leadStore.clear();

    message.success(t("profile.warning.messageSuccess"));
  } catch (e) {
    console.error(e);
    message.error(t("profile.warning.messageError"));
  }
}
</script>
