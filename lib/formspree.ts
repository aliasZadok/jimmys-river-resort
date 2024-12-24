import { BookingSubmission } from '@/types/booking';

export async function getSubmissions(): Promise<BookingSubmission[]> {
  const FORM_ID = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID;
  const API_KEY = process.env.FORMSPREE_API_KEY;

  if (!FORM_ID || !API_KEY) {
    throw new Error('Formspree configuration is missing');
  }

  const response = await fetch(
    `https://formspree.io/api/forms/${FORM_ID}/submissions`,
    {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        'Content-Type': 'application/json',
      },
    }
  );

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  return data.submissions as BookingSubmission[];
}