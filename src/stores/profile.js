import { defineStore } from "pinia";

const STORAGE_KEY = "avtoraketa_profile";

export const useProfileStore = defineStore("profile", {
  state: () => ({
    name: "",
    contact: "",
    leadId: "",
    submittedAt: null,
  }),

  getters: {
    isFilled: (state) => !!state.leadId,
  },

  actions: {
    hydrate() {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;

      const data = JSON.parse(raw);
      this.name = data.name || "";
      this.contact = data.contact || "";
      this.leadId = data.leadId || "";
      this.submittedAt = data.submittedAt || null;
    },

    save({ name, contact, leadId }) {
      const now = Date.now();

      this.name = name;
      this.contact = contact;
      this.leadId = leadId;
      this.submittedAt = now;

      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          name,
          contact,
          leadId,
          submittedAt: now,
        }),
      );
    },

    clear() {
      this.$reset();
      localStorage.removeItem(STORAGE_KEY);
    },
  },
});