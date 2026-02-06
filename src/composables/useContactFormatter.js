export function useContactFormatter() {
  function formatContact(value) {
    if (!value) return "";

    // Remove spaces
    value = value.replace(/\s+/g, "");

    // Phone number (digits only)
    if (/^\d+$/.test(value) && !value.startsWith("+7")) {
      value = "+7" + value;
    }

    // Limit +7 phone length
    if (value.startsWith("+7")) {
      const digits = value.slice(2, 12); // max 10 digits
      value = "+7" + digits;
    }

    // Telegram username
    if (/^[a-zA-Z_]\w*$/.test(value) && !value.startsWith("@")) {
      value = "@" + value;
    }

    return value;
  }

  return {
    formatContact,
  };
}
