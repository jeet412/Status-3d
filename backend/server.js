import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import nodemailer from 'nodemailer';
import connectDB from './config/db.js';
import Contact from './models/Contact.js'; // ✅ Import model

dotenv.config();
connectDB();

const app = express();
app.use(cors({ origin: 'http://localhost:5173' })); // ✅ Allow frontend access
app.use(express.json());

// === Contact Form Route ===
app.post('/api/contact', async (req, res) => {
  const { firstName, lastName, email, phone, subject, message } = req.body;

  try {
    // ✅ Save to MongoDB
    const newContact = new Contact({ firstName, lastName, email, phone, subject, message });
    await newContact.save();

    // ✅ Send Email
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false, // <-- this allows self-signed certificates
      },
    });

    const mailOptions = {
        from: process.env.GMAIL_USER,
        to: process.env.GMAIL_RECEIVER,
        subject: `New Contact Form Submission: ${subject || 'No Subject'}`,
        html: `
          <div style="font-family: Arial, sans-serif; padding: 20px; color: #333; line-height: 1.6;">
            <h2 style="color: #2d3748;">📩 New Contact Form Submission</h2>
            <hr style="margin: 20px 0;" />
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #1a73e8;">${email}</a></p>
            <p><strong>Phone:</strong> <a href="tel:${phone}" style="color: #1a73e8;">${phone}</a></p>
            <p><strong>Subject:</strong> ${subject || '—'}</p>
            <p><strong>Message:</strong></p>
            <div style="background: #f9f9f9; padding: 15px; border-left: 4px solid #2d3748; margin-top: 10px;">
              ${message.replace(/\n/g, '<br />')}
            </div>
            <hr style="margin: 30px 0;" />
            <p style="font-size: 13px; color: #888;">This message was sent from the CozyCloth contact form.</p>
          </div>
        `,
      };
      

    await transporter.sendMail(mailOptions);

    res.status(200).json({ success: true, message: 'Message sent and saved successfully' });
  } catch (error) {
    console.error('Contact API error:', error);
    res.status(500).json({ success: false, message: 'Failed to send message' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
