import { Resend } from "resend";
import EmailContactTemplate from "../../_components/EmailContactTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  const obj = {
    newClientName: "Away",
    email: "agwamayatullah@gmail.com",
    service: "service",
    budget: "1000",
    message: "testing",
  };

  const res = await request.json();
  console.log(res);

  try {
    const { data, error } = await resend.emails.send({
      from: "Relyte Space <hello@relyte.space>",
      to: ["agwamayatullah@gmail.com"],
      subject: "There is a new client",
      react: EmailContactTemplate({
        newClientName: res.name,
        email: res.email,
        service: res.service,
        budget: res.budget,
        message: res.message,
      }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
