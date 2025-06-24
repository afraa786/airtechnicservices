export const dynamic = "force-dynamic";
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import path from "path";
import { promises as fs } from "fs";

export async function POST(request) {
  try {
    const { name, email, phone, service_require, project_details } = await request.json();

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

    // ✉️ Email to the user
    await transporter.sendMail({
      from: `"Air Technic Services" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Company Overview and Quotation",
      html: `
      <div style="font-family: Arial, sans-serif; color: #333; padding: 20px;">
        <h2 style="color: #004aad;">Hello ${name},</h2>
        <p>Thank you for reaching out to <strong>AIR TECHNIC SERVICES</strong>.</p>
        <p>We’ve received your request and our team will get back to you shortly with further details.</p>
        <p>You can expect a callback soon from our support team.</p>
        <p style="margin-top: 40px;">Warm regards,<br/><strong>Team AIR TECHNIC SERVICES</strong><br/>Mumbai, India</p>
      </div>
    `,
    
    });

    // ✅ Email to the office/admin with submitted form data

    await transporter.sendMail({
      from: `"Air Technic Services" <${process.env.EMAIL_USER}>`,
      to: process.env.OFFICE_EMAIL,
      subject: "New Quotation Request Received",
      html: `
      <div style="font-family: Arial, sans-serif; color: #333; padding: 20px;">
        <h2 style="color: #004aad;">New Quotation Request 🧾</h2>
        <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
          <tr>
            <td style="padding: 8px; font-weight: bold;">Name:</td>
            <td style="padding: 8px;">${name}</td>
          </tr>
          <tr style="background-color: #f9f9f9;">
            <td style="padding: 8px; font-weight: bold;">Email:</td>
            <td style="padding: 8px;">${email}</td>
          </tr>
          <tr>
            <td style="padding: 8px; font-weight: bold;">Phone:</td>
            <td style="padding: 8px;">${phone}</td>
          </tr>
          <tr style="background-color: #f9f9f9;">
            <td style="padding: 8px; font-weight: bold;">Service Required:</td>
            <td style="padding: 8px;">${service_require}</td>
          </tr>
          <tr>
            <td style="padding: 8px; font-weight: bold;">Project Details:</td>
            <td style="padding: 8px;">${project_details || 'N/A'}</td>
          </tr>
        </table>
        
      </div>
    `,
    });

    return NextResponse.json({ success: true, message: "Emails sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
