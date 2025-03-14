import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      firstName,
      lastName,
      email,
      phone,
      place,
      industry,
      businessDetails,
      importance,
      existingSocialMedia,
      website,
      service,
      find,
    } = body;

    if (!firstName || !lastName || !email) {
      return NextResponse.json(
        { message: "These fields are required" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"${firstName} ${lastName}" <${email}>`,
      to: process.env.RECIPIENT_EMAIL,
      subject: "New Contact Form Submission",
      text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\nPlace: ${place}\nIndustry: ${industry}\nBusiness Details: ${businessDetails}\nImportance: ${importance}\nExisting Social Media: ${existingSocialMedia}\nWebsite: ${website}\nService: ${service}\nFind: ${find}`,
    });

    return NextResponse.json(
      { message: "Email sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json(
      { message: "Email failed to send." },
      { status: 500 }
    );
  }
}
