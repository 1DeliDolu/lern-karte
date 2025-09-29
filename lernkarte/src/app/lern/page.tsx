import { redirect } from 'next/navigation'

export default function LernIndex() {
  // Redirect to the first card so /lern doesn't 404 and users land on a card page.
  redirect('/lern/1')
}
// Placeholder note removed; this file intentionally redirects to /lern/1.
