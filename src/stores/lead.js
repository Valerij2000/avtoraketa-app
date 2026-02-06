import { defineStore } from "pinia";

const LAST_SUBMIT_KEY = "avtoraketa_last_submit";
const LEAD_ID_KEY = "avtoraketaLeadId";

export const useLeadStore = defineStore("lead", {
  state: () => ({
    leadId: localStorage.getItem(LEAD_ID_KEY) || "",
    lastSubmit: Number(localStorage.getItem(LAST_SUBMIT_KEY)) || null,
  }),

  getters: {
    isCooldownActive: (state) => {
      if (!state.lastSubmit) return false;
      return Date.now() - state.lastSubmit < 3 * 60 * 60 * 1000;
    },
  },

  actions: {
    setLeadId(id) {
      this.leadId = id;
      localStorage.setItem(LEAD_ID_KEY, id);
    },
    markSubmitted() {
      const now = Date.now();
      this.lastSubmit = now;
      localStorage.setItem(LAST_SUBMIT_KEY, now.toString());
    },
  },
});