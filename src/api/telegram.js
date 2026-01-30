export async function sendToTelegram(form) {
  const message = `
🚀 New Agent

👤 ${form.name} ${form.surname}
📞 ${form.phone}
📧 ${form.email}
  `

  await fetch('https://api.telegram.org/bot<TOKEN>/sendMessage', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: '<CHAT_ID>',
      text: message
    })
  })
}