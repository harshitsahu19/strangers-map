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

# The Strangers Map — Spiti Winter Edition

## Run locally

```bash
npm install
npm run dev
```

## Brand asset

The supplied Stranger Map logo is stored at:

`src/assets/strangers-map-logo.png`

The homepage, details-page navigation and footer use this same image asset.

## Homepage hero carousel

The hero carousel contains three Spiti-focused scenes. The image layers are clipped to the hero bounds while the Ken Burns zoom runs, preventing the image from visually escaping the overlay. Hero photography is externally hosted by the image publishers; availability and reuse permissions are governed by those publishers' terms.

Current image sources:
- BanBanjara: https://banbanjara.com/tours/spiti-valley-in-winter
- The Land of Wanderlust: https://thelandofwanderlust.com/how-to-reach-spiti-valley-in-winter-road/
- Countryside India: https://countrysideindia.com/product/explore-spiti-the-land-of-grey-ghost/

## Trip content

Edit `src/data/upcoming-trip.json` to manage the Spiti trip information and itinerary.
