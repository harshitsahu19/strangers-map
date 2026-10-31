# The Strangers Map

Community-first group travel landing page built with React, Vite, Framer Motion and Lucide icons.

## Run locally

```bash
npm install
npm run dev
```

## Manage trips

Edit `src/data/trips.json` to add or update local getaways and future adventures. Trip cards are rendered from this single JSON source.

## Enquiry form / WhatsApp

The Plan a trip, Join this trip, and Get updates CTAs open a short enquiry form. On submit, the entered details are encoded into a WhatsApp message and opened for the user to send.

In `src/main.jsx`, replace the demo WhatsApp destination `919876543210` with the official business number in international format (digits only, including country code).

The website does not store or submit form data to a server; it only opens WhatsApp after the user submits the form.
