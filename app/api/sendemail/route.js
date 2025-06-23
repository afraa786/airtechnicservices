export const dynamic = "force-dynamic";


import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import path from "path";
import { promises as fs } from "fs";

export async function POST(request) {
  try {
    const { name, email } = await request.json();

    // PDF path (inside public folder)
    const pdfPath = path.join(process.cwd(), "public", "quotation.pdf");
    const pdfFile = await fs.readFile(pdfPath);

    // Setup transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email content
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; color: #333; padding: 20px;">
        <h2 style="color: #004aad;">Hello ${name},</h2>
        <p>Thank you for showing interest in <strong>AIR TECHNIC SERVICES</strong>.</p>
        <p>We initiated our journey in 2014 by establishing a company that is specialized and highly professional in the installation & maintenance of air conditioning systems.</p>
        <p>Our business ideology is based on four strong pillars: <strong>Trust</strong>, <strong>Reliability</strong>, <strong>Superior Quality</strong>, and <strong>Optimum Pricing</strong>.</p>
        <p>From the beginning, customer satisfaction has been our greatest asset. With a team of 20+ skilled HVAC professionals, we have successfully delivered across residential, commercial, and industrial sectors.</p>
        <p>We have adopted a modern digital approach with proactive maintenance systems that ensure efficiency, reliability, and long-term savings.</p>
        <p>Attached is our quotation and company overview for your reference. We look forward to collaborating with you.</p>
        <p style="margin-top: 40px;">Warm regards,<br/><strong>Team AIR TECHNIC SERVICES</strong><br/>Mumbai, India</p>
      </div>
    `;

    // Send email
    await transporter.sendMail({
      from: `"Air Technic Services" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Company Overview and Quotation",
      html: htmlContent,
      attachments: [
        {
          filename: "quotation.pdf",
          content: pdfFile,
        },
      ],
    });

    return NextResponse.json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
