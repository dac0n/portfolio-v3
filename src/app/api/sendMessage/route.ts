import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";
import { EmailTemplate } from "@/components/email-template/EmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

const schema = z.object({
  email: z.string().email(),
  name: z.string().min(1),
  message: z.string().min(1),
});

export async function POST(request: NextRequest) {
  console.log("POST function called");

  try {
    const body = await request.json();
    const { email, name, message } = schema.parse(body);
    console.log(body, email, name, message);

    const { data, error } = await resend.emails.send({
      from: "Test1 <emails@danielkonstantinov.com>", // Update this with your verified domain
      to: "daniel.konstantinov.work@gmail.com",
      subject: `New homepage message from ${name}`,
      react: EmailTemplate({ senderName: name, senderEmail: email, message }),
    });

    if (error) {
      console.error("Error sending email:", error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error in POST function:", error);

    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.issues }, { status: 400 });
    } else {
      return NextResponse.json(
        { error: "Internal server error" },
        { status: 500 },
      );
    }
  }
}
