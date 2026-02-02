const BOT_TOKEN =
  import.meta.env.VITE_TELEGRAM_BOT_TOKEN
const CHAT_ID =
  import.meta.env.VITE_TELEGRAM_CHAT_ID

const TELEGRAM_API = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

export async function sendLeadToTelegram({
  name,
  contact
}) {
  const leadId = crypto.randomUUID();

  const message = `
🚀 <b>New Lead — Avtoraketa</b>

🆔 <b>ID:</b> ${leadId}
👤 <b>Name:</b> ${name}
📞 <b>Contact:</b> ${contact}
⏱ <b>Time:</b> ${new Date().toLocaleString()}
`;

  const response = await fetch(TELEGRAM_API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text: message,
      parse_mode: "HTML",
    })
  });
  if (!response.ok) {
    throw new Error("Telegram API error");
  }

  return leadId;
}