# rift.clb Portfolio v2 - Handoff

Live preview is on Vercel (URL added at end of deploy).
Repo: `puppymp4/riftclb-portfolio`
Stack: Next.js 16 + Tailwind v4 + Framer Motion + (Sanity, deferred)

---

## What's live now

Six real-looking project tiles seeded with placeholder Unsplash imagery. Aesthetic = paper texture + cutout type + magazine layout. Click any tile to see the project detail page template (route `/work/[slug]`).

The whole site is structured so swapping mock data for live Sanity content is a 30-second change in `lib/projects.ts`.

---

## When you're ready for self-serve uploads (~10 min)

1. **Create the Sanity project**
   ```
   cd ~/Desktop/rm-web-builds/riftclb-portfolio
   npx sanity@latest init --create-project "rift.clb Studio" --dataset production
   ```
   This will open a browser window - log in with Google or GitHub. Pick "Clean project, no schemas" when asked.

2. **Copy your Project ID** from the terminal output (or from sanity.io/manage).

3. **Drop it into `.env.local`** - copy `.env.local.example` to `.env.local` and paste your Project ID:
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=xxxxxxxx
   NEXT_PUBLIC_SANITY_DATASET=production
   ```

4. **Tell me you've done it** - I'll wire up the Studio (admin panel), define the schema (project fields: title, cover, video URL, description, tags), mount it at `yourdomain.com/studio`, and switch the homepage from mock data to live data.

5. **Add the same env vars to Vercel** - Project Settings → Environment Variables → paste both. Redeploy. Done.

After that, you log in at `riftmedia.cc/studio`, hit "New Project," upload cover + video URL + description, hit Publish, and the site updates in ~30 seconds.

---

## Where things live

```
app/
  page.tsx                  # homepage
  layout.tsx                # global layout, fonts, metadata
  globals.css               # design tokens (paper, ink, fonts, type scale)
  not-found.tsx             # custom 404
  work/[slug]/page.tsx      # project detail page template

components/
  Nav.tsx                   # sticky top nav
  Hero.tsx                  # cutout RIFT.CLB hero
  Marquee.tsx               # scrolling ticker
  WorkGrid.tsx              # project tiles
  About.tsx                 # split layout, halftone portrait, stats
  Contact.tsx               # email, IG, "currently booking" card
  Footer.tsx                # dark footer

lib/
  projects.ts               # mock data - Sanity-shaped, ready to swap
  sanity.ts                 # client + queries (waiting for project ID)

next.config.ts              # image domain whitelist
.env.local.example          # what env vars you'll need
```

---

## Editing copy / projects right now (without Sanity)

Open `lib/projects.ts` - every project is a JS object. Edit any field, save, refresh. To add a project, copy one of the existing entries and change the values.

Once Sanity is wired this file goes away.
