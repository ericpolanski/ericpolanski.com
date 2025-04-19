export default function Contact() {
  return (
    <section className="pt-[80px] w-full flex justify-center px-4">
      <div className="max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact</h1>
        <p className="text-lg mb-4">
          I'd love to hear from you! If you have any inquiries, requests, or anything else, please feel free to reach out at{' '}
          <a
            href="mailto:contact@ericpolanski.com"
            className="text-primary underline hover:text-primaryHover"
          >
            contact@ericpolanski.com
          </a>
          .
        </p>
      </div>
    </section>
  );
}