import Mailjet from "node-mailjet";

const mailjet = Mailjet.apiConnect(
  process.env.MAILJET_API_KEY!,
  process.env.MAILJET_SECRET_KEY!,
);

export async function sendEmail({
  to,
  subject,
  text,
  html,
}: {
  to: string;
  subject: string;
  text?: string;
  html?: string;
}) {
  const request = mailjet.post("send", { version: "v3.1" }).request({
    Messages: [
      {
        From: {
          Email: process.env.SENDER_EMAIL!,
          Name: "Shade to shade tattoo",
        },
        To: [{ Email: to }],
        Subject: subject,
        TextPart: text,
        HTMLPart: html,
      },
    ],
  });

  const result = await request.catch((err) => {
    console.error(
      "Mailjet Full Error:",
      JSON.stringify(err.response?.data?.Messages?.[0]?.Errors, null, 2),
    );
    throw err;
  });
  return result.body;
}
