import nodemailer from 'nodemailer'
import { NextResponse } from 'next/server'
export const runtime = 'edge'


export async function POST(request) {
  const form = await request.formData()
  const name = form.get('name')
  const email = form.get('email')
  const message = form.get('message')

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: +process.env.SMTP_PORT,
    secure: process.env.SMTP_PORT === '465', // true for 465, false for 587
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS.replace(/(^"|"$)/g, ''), // strip stray quotes
    },
  })
  // actually send
  try {
    const info = await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: 'contact@ericpolanski.com',
      subject: `New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    })
    return NextResponse.json({ ok: true, id: info.messageId })
  } catch (err) {
    return NextResponse.json({ ok: false, error: err.message }, { status: 500 })
  }
}