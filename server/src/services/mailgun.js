// server/src/services/mailgun.js
// Mailgun email sending utility

const MAILGUN_API_KEY = process.env.MAILGUN_API_KEY;
const MAILGUN_DOMAIN = process.env.MAILGUN_DOMAIN;
const MAILGUN_FROM = process.env.MAILGUN_FROM || "contact@regulate2learn.com";

export async function sendContactEmail({ name, email, message }) {
  const url = `https://api.mailgun.net/v3/${MAILGUN_DOMAIN}/messages`;
  const form = new URLSearchParams();
  form.append("from", `${name} <${MAILGUN_FROM}>`);
  form.append("to", "contact@regulate2learn.com");
  form.append("subject", `New Contact Form Submission from ${name}`);
  form.append("text", `Name: ${name}\nEmail: ${email}\n\n${message}`);

  const res = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: "Basic " + btoa(`api:${MAILGUN_API_KEY}`),
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: form.toString(),
  });
  if (!res.ok) {
    const error = await res.text();
    throw new Error(`Mailgun error: ${error}`);
  }
  return true;
}
