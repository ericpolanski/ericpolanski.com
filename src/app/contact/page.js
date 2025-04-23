'use client';
import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('sending');

    // Formsubmit AJAX endpoint for your email:
    const endpoint = 'https://formsubmit.co/ajax/contact@ericpolanski.com';
    const payload = new FormData();
    Object.entries(form).forEach(([k, v]) => payload.append(k, v));

    try {
      const res = await fetch(endpoint, { method: 'POST', body: payload });
      const json = await res.json();
      if (!res.ok) throw new Error(json.message || 'Submission failed');
      setStatus('sent');
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <section className="pt-[var(--header-height)] w-full flex justify-center px-4">
      <div className="max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            required
            className="w-full border p-2 rounded text-black"
          />
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your email"
            required
            className="w-full border p-2 rounded text-black"
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your message"
            rows={5}
            required
            className="w-full border p-2 rounded text-black"
          />
          <button
            type="submit"
            disabled={status === 'sending'}
            className="bg-primary text-white px-4 py-2 rounded"
          >
            {status === 'sending' ? 'Sending…' : 'Send Message'}
          </button>
        </form>
        {status === 'sent' && <p className="mt-4 text-green-600">Message sent!</p>}
        {status === 'error' && <p className="mt-4 text-red-600">Something went wrong.</p>}
      </div>
    </section>
  );
}