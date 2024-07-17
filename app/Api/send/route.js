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
    // const { data, error } = await resend.emails.send({
    //   from: "Acme <hello@relyte.space>",
    //   to: ["agwamayatullah@gmail.com"],
    //   subject: "There is a new client",
    //   react: EmailContactTemplate({
    //     newClientName: obj.newClientName,
    //     email: obj.email,
    //     service: obj.service,
    //     budget: obj.budget,
    //     message: obj.message,
    //   }),
    // });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
