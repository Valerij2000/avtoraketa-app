import { createI18n } from "vue-i18n";
import en from "./en";
import ru from "./ru";

const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem("lang") || "ru",
  fallbackLocale: "en",
  messages: { en, ru },
});

export default i18n;
