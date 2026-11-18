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
