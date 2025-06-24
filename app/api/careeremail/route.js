import { NextResponse } from 'next/server';
import { IncomingForm } from 'formidable';
import { Readable } from 'stream';
import fs from 'fs';
import nodemailer from 'nodemailer';


// // Disable default body parsing
// export const config = {
//     api: {
//         bodyParser: false,
//     },
// };

function streamToIncomingMessage(req) {
    const readable = Readable.from(req.body);
    readable.headers = Object.fromEntries(req.headers);
    readable.method = req.method;
    return readable;
}

async function parseForm(req) {
    const form = new IncomingForm();

    return new Promise((resolve, reject) => {
        form.parse(req, (err, fields, files) => {
            if (err) return reject(err);
            resolve({ fields, files });
        });
    });
}

export async function POST(req) {
    try {
        const incomingReq = streamToIncomingMessage(req);

        const { fields, files } = await parseForm(incomingReq);

        const { name, email, phone, position, coverLetter } = fields;
        // Grab the uploaded file safely
        const uploadedFile = files.file?.[0] || files.resume?.[0] || Object.values(files)[0];

        if (!uploadedFile) {
            return NextResponse.json({ success: false, error: 'No file uploaded' }, { status: 400 });
        }

        const filePath = uploadedFile.filepath;
        const fileName = uploadedFile.originalFilename;
        const fileContent = fs.readFileSync(filePath);

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.OFFICE_EMAIL,
            subject: `New Career Application: ${name}`,
            text: `
New Career Application 📥

Name: ${name}
Email: ${email}
Phone: ${phone}
Position: ${position}
Cover Letter: ${(coverLetter || 'N/A').slice(0, 500)}${coverLetter?.length > 500 ? '...' : ''}

📎 Resume is attached.

– Air Technic Careers System
`
            ,

            attachments: [
                {
                    filename: fileName,
                    content: fileContent,
                },
            ],
        });

        // Thank You Email to Candidate
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: email,
            subject: `Thanks for applying at Air Technic service!`,
            html: `
      <div style="font-family: sans-serif; padding: 20px;">
        <h3>Thank you, ${name}!</h3>
        <p>We received your application for <strong>${position}</strong>.</p>
        <p>If shortlisted, we will contact you soon.</p>
        <p>Best of luck!<br/>– Air Technic Team</p>
      </div>
    `

        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ success: false, error: error.message || 'Internal Server Error' }, { status: 500 });
    }
}