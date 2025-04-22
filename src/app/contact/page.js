'use client'
import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState(null)

  async function handleSubmit(e) {
    e.preventDefault()
    const formEl = e.currentTarget
    setStatus('Sending...')
    const res = await fetch('/api/contact', {
      method: 'POST',
      body: new FormData(formEl),
    })
    console.log('[contact page] response status:', res.status)
    if (res.ok) {
      setStatus('✅ Message sent!')
      formEl.reset()
    } else {
      setStatus('❌ Error sending message.')
    }
  }

  return (
    <section className="pt-[var(--header-height)] w-full flex justify-center px-4">
      <div className="max-w-2xl w-full text-[rgb(var(--foreground-rgb))]">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact</h1>
        <p className="text-lg mb-4">
          I'd love to hear from you! If you have any inquiries, requests, or anything else, please feel free to reach out
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="text-black w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="text-black w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="text-black w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <button
            type="submit"
            className="bg-primary text-onPrimary px-6 py-2 rounded hover:bg-primaryHover transition"
          >
            Send Message
          </button>
        </form>
        {status && <p className="mt-4">{status}</p>}
      </div>
    </section>
  );
}