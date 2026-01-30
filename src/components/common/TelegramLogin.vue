<template>
  <div id="telegram-login"></div>
</template>

<script setup>
import { onMounted } from "vue";

function handleTelegramAuth(user) {
  console.log("Telegram user:", user);
  localStorage.setItem("tgUser", JSON.stringify(user));
}

const BOT_USERNAME = "Avtoraketa_Leads_bot";

onMounted(() => {
  // Load Telegram login script dynamically
  const script = document.createElement("script");
  script.src = "https://telegram.org/js/telegram-widget.js?15";
  script.setAttribute("data-telegram-login", BOT_USERNAME);
  script.setAttribute("data-size", "large");
  script.setAttribute("data-radius", "12");
  script.setAttribute("data-onauth", "handleTelegramAuth(user)");
  script.setAttribute("data-request-access", "write");
  script.async = true;
  document.getElementById("telegram-login").appendChild(script);
});
</script>
