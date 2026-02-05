<template>
  <n-space justify="space-between" align="center" class="header">
    <div class="logo">
      <n-image class="nav-image" :src="LogoImg" preview-disabled />
    </div>
    <n-space align="center">
      <!-- Display Lead ID if exists -->
      <n-text v-if="leadId" depth="2" style="margin-right: 16px">
        {{ t("header.leadID") }}: <b>{{ leadId }}</b>
      </n-text>
      <n-button class="nav-btn" type="tertiary" @click="goWebSite()">{{
        t("header.home")
      }}</n-button>
      <n-button class="nav-btn" type="tertiary" @click="scrollTo('why-us')">{{
        t("header.whyUs")
      }}</n-button>
      <n-button class="nav-btn" type="tertiary" @click="scrollTo('calc')">{{
        t("header.calc")
      }}</n-button>
      <n-button class="nav-btn" type="primary" @click="goToApply">{{
        t("header.join")
      }}</n-button>
    </n-space>
  </n-space>
  <n-space>
    <n-button
      size="small"
      tertiary
      :type="locale === 'ru' ? 'primary' : 'default'"
      @click="switchLang('ru')"
    >
      RU
    </n-button>

    <n-button
      size="small"
      tertiary
      :type="locale === 'en' ? 'primary' : 'default'"
      @click="switchLang('en')"
    >
      EN
    </n-button>
  </n-space>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import LogoImg from "../../assets/logo.svg";

const router = useRouter();
const leadId = ref("");
const { locale, t } = useI18n();

onMounted(() => {
  leadId.value = localStorage.getItem("avtoraketaLeadId") || "";
});

function goWebSite() {
  window.location.href = "/";
}

function switchLang(lang) {
  locale.value = lang;
  localStorage.setItem("lang", lang);
}

function goToApply() {
  router.push("/apply");
}

function scrollTo(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}
</script>

<style scoped>
.header {
  padding: 2vmin 5vmin;
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 100;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}
.logo {
  font-weight: bold;
}

.nav-image {
  width: 100px;
  height: auto;
}
@media (max-width: 768px) {
  .header {
    gap: 0;
    padding: 3vmin 4vmin;
  }
  .nav-image {
    width: 60px;
  }
  .nav-btn {
    font-size: 12px;
    padding: 12px 11px;
  }
}
</style>
