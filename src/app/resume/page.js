"use client";
import { useState } from 'react';
import dynamic from 'next/dynamic';

// Lazy-load react-pdf Document and Page components on client-side only
const Document = dynamic(
  async () => {
    const mod = await import('react-pdf');
    const pdfjs = mod.pdfjs;
    pdfjs.GlobalWorkerOptions.workerSrc =
      `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${mod.pdfjs.version}/pdf.worker.min.js`;
    return mod.Document;
  },
  { ssr: false }
);
const Page = dynamic(
  () => import('react-pdf').then((mod) => mod.Page),
  { ssr: false }
);
// Client-side resume PDF viewer

export default function ResumePage() {
  const [numPages, setNumPages] = useState(null);
  const [loadError, setLoadError] = useState('');

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  function onDocumentLoadError(error) {
    console.error('Error while loading PDF:', error);
    setLoadError(error?.message || 'Failed to load resume.');
  }

  if (loadError) {
    return (
      <section className="pt-[80px] w-full flex flex-col items-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Resume</h1>
        <p className="text-red-600">{loadError}</p>
      </section>
    );
  }
  return (
    <section className="pt-[80px] w-full flex flex-col items-center px-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-6">Resume</h1>
      <div className="w-full max-w-4xl">
        <Document
          file={{ url: '/eric_polanski_resume_april_2025.pdf' }}
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={onDocumentLoadError}
          loading={<p>Loading resume...</p>}
          noData={<p>No resume file specified.</p>}
        >
          {Array.from(new Array(numPages), (_el, index) => (
            <Page
              key={`page_${index + 1}`}
              pageNumber={index + 1}
              className="mb-4"
              width={800}
            />
          ))}
        </Document>
      </div>
    </section>
  );
}