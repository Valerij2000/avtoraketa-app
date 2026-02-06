import { defineStore } from "pinia";

export const useAppStore = defineStore("app", {
  state: () => ({
    lang: localStorage.getItem("lang") || "ru",
  }),

  actions: {
    setLang(lang) {
      this.lang = lang;
      localStorage.setItem("lang", lang);
    },
  },
});
