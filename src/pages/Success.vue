<template>
  <SectionWrapper>
    <n-space vertical align="center" size="large">
      <n-h2>{{ t("success.title") }}</n-h2>

      <n-text depth="3"> {{ t("success.subtitle") }} </n-text>

      <n-space align="center" size="small">
        <n-text v-if="leadId" depth="2">
          {{ t("success.leadId") }} <b>{{ leadId }}</b>
        </n-text>

        <n-button v-if="leadId" size="small" type="default" @click="copyLeadId">
          {{ t("success.copyButton") }}
        </n-button>
      </n-space>

      <n-space>
        <n-button
          type="primary"
          tag="a"
          href="https://t.me/Pashkovskiyavto"
          target="_blank"
        >
          {{ t("success.telegramButton") }}
        </n-button>

        <router-link to="/">
          <n-button type="primary"> {{ t("success.homeButton") }} </n-button>
        </router-link>
      </n-space>
    </n-space>
  </SectionWrapper>
</template>

<script setup>
import { useRouter } from "vue-router";
import { ref, onMounted } from "vue";
import { useMessage } from "naive-ui";
import { useI18n } from "vue-i18n";
import SectionWrapper from "../components/common/SectionWrapper.vue";
import { onBeforeRouteLeave } from "vue-router";

const router = useRouter();
const leadId = ref(history.state?.leadId || "");
const message = useMessage();
const { t } = useI18n();

// Save leadID to localStorage for persistent access
onMounted(() => {
  if (leadId.value) {
    localStorage.setItem("avtoraketaLeadId", leadId.value);
  }
});

function copyLeadId() {
  if (!leadId.value) return;

  if (navigator?.clipboard) {
    navigator.clipboard
      .writeText(leadId.value)
      .then(() => {
        message.success(t("success.copySuccess"));
      })
      .catch(() => {
        message.success(t("success.copyError"));
      });
  } else {
    // fallback
    const el = document.createElement("textarea");
    el.value = leadId.value;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    message.success(t("success.copySuccess"));
  }
}
</script>
