# VELOOP Rewards – Task 0G

React/Vite implementation of the five VELOOP Rewards utility banners, rebuilt to closely match the supplied premium dark fintech/rewards reference UI while keeping the components responsive, accessible, interactive, and reusable.

## Banners implemented

1. **Leaderboard** — competition stage label, prize pool, ranking CTA, 3D trophy/podium visual, gold/blue/bronze lighting and motion.
2. **Watch Ads & Earn** — eligible-ad messaging, benefit chips, video/wallet/VE visual, interactive play hotspot and reward-preview feedback.
3. **Contact Us** — focused support CTA with a medium-size 3D support-agent illustration and responsive button interaction.
4. **Follow & Earn** — official-channel messaging, social-profile visual, eligible-campaign wording and demo reward card.
5. **Daily Bonus** — claim CTA, 3D gift/VE visual, current bonus card and seven-day streak UI.

## Assignment requirements covered

- App body background remains `#161827`.
- All banners use `100%` of the available container width.
- Desktop banner height: `430px` (inside the required `410–450px` range).
- Tablet banner height: responsive `450–500px` depending on viewport/component (inside the required `380–540px` range).
- Mobile banner height: responsive `425–510px` depending on viewport/component (inside the required `330–520px` range).
- Large visual composition is included in every banner.
- Each banner has meaningful hover/pointer interaction or functional interaction.
- High-contrast CTA buttons include hover, active and keyboard-focus behavior.
- Responsive layouts are included for desktop, tablet and mobile.
- Visuals use transparent PNG/WebP assets with lightweight CSS motion instead of heavy video backgrounds.
- Contact Us uses a clear, keyboard-accessible CTA that routes to the support page.
- Watch & Earn includes an interactive reward preview.
- `prefers-reduced-motion` is respected.
- Dummy reward/ranking/streak values remain clearly development-only.

## Implementation screenshots

Current project screenshots are stored in `docs/screenshots/` for quick review of all five banners.

## Visual assets

The complex 3D illustrations were isolated/recreated as transparent assets so the surrounding banner remains real React/CSS UI:

```text
src/assets/
├── leaderboard-visual-user.png
├── watch-earn-visual.webp
├── contact-support-visual.webp
├── follow-earn-visual.webp
└── daily-bonus-visual.webp
```

This keeps text, CTAs, support information, reward cards and responsive behavior editable rather than flattening the entire banner into a screenshot.

## Tech stack

- React.js 19
- Vite 7
- React Router DOM
- Bootstrap
- CSS Modules
- React Hooks
- Lucide React
- React Icons

## Project structure

```text
src/
├── assets/
├── components/
│   ├── LeaderboardBanner/
│   ├── WatchAdBanner/
│   ├── ContactBanner/
│   ├── FollowEarnBanner/
│   ├── DailyBonusBanner/
│   └── FeaturePage/
├── data/
├── hooks/
│   └── usePointerParallax.js
├── pages/
└── styles/
```

## Installation

Do not copy an existing `node_modules` folder between operating systems. Install dependencies fresh on the machine where the project will run:

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Routes

- `/` — all five banners
- `/leaderboard`
- `/watch-earn`
- `/contact`
- `/follow-earn`
- `/daily-bonus`

`vercel.json`, `netlify.toml`, and `public/_redirects` are included so SPA routes can be refreshed directly after deployment.

## Reviewer feedback update

The latest pass follows the document height/width rules across desktop, tablet, and mobile. Desktop keeps balanced split layouts, while tablet/mobile compact the visual and content into the available height without shrinking the illustration excessively. Motion is kept subtle and contained so animated elements stay inside each banner.

## Interaction details

- Responsive composition: split layouts on desktop and compact visual-first stacking where appropriate on tablet/mobile.
- Pointer-based parallax and focal glow movement on the main illustrations.
- Leaderboard sparkle motion and responsive trophy/podium composition.
- Watch-ad play hotspot with temporary `+38 VEs` reward-preview feedback.
- Contact Us uses a single clear support CTA as requested in the latest review.
- Social-phone composition with interactive CTA and live HTML reward card.
- Daily gift composition with live HTML bonus and streak panels.
- Global focus-visible and reduced-motion support.

## Deployment

Existing repository: `https://github.com/yogeshr9530/veloop-rewards-task-0g`

Existing Vercel project: `https://veloop-rewards-task-0g.vercel.app`

After pushing this updated source, trigger a fresh Vercel deployment so the live URL reflects the redesigned UI.

## Submission checklist

- [x] Leaderboard banner redesigned
- [x] Watch Ads & Earn banner redesigned
- [x] Contact Us banner redesigned
- [x] Follow & Earn banner redesigned
- [x] Daily Bonus banner redesigned
- [x] Full-width responsive banners
- [x] Required height ranges implemented
- [x] `#161827` application background retained
- [x] Large illustration in each banner
- [x] Meaningful interactions/animations
- [x] Premium fintech/rewards visual direction
- [x] Mobile/tablet/desktop CSS breakpoints
- [x] Accessible focus states and labels
- [x] Optimized transparent visual assets
- [x] SPA deployment configuration
- [x] Professional README
- [x] Push the updated source to GitHub
- [x] Redeploy the updated source to Vercel/Netlify
- [x] Capture fresh implementation screenshots after deployment

## Demo data notice

Ranking values, prize amounts, campaign rewards, daily rewards and streak information are development placeholders only. Replace them with approved production rules/data when backend integration is available.

## Final submission fixes

- Section 03 (Contact Us): support artwork uses a safe inset and `object-fit: contain` so the head, sparkles, laptop, and chat elements stay fully visible.
- Section 04 (Follow & Earn): the `+500 SVEs` reward card is separated from the phone illustration on mobile; it no longer overlays the artwork.
- Section 05 (Daily Bonus): mobile bonus/streak typography was increased for better readability while keeping the banner within the required height range.
- Main illustrations were rebalanced to fill their parent visual regions without stretching or clipping.
- Responsive behavior is covered for desktop, tablet, and mobile, with subtle contained motion and reduced-motion support.

## Author

Yogesh Rathor

## Final reviewer pass

The current UI preserves the supplied premium Task 0G visual language while following the documented responsive height ranges. Desktop remains balanced and horizontal, while tablet/mobile reduce unused vertical space and keep illustrations, copy, CTA, and supporting UI readable. Motion remains subtle and professional.

## Animation polish

- Leaderboard rank labels use restrained floating motion while the trophy and podium remain anchored.
- Watch & Earn keeps VE labels attached to their coins with only micro-motion and a soft play pulse.
- Contact, Follow & Earn, and Daily Bonus use subtle illustration drift/glow while utility cards remain stable.
- Pointer parallax is intentionally limited to a few pixels so illustrations never feel detached or move outside their layout.
- `prefers-reduced-motion` is respected.

## Final responsive polish

- Leaderboard rank labels (02 / 01 / 03) are centered inside the artwork circles and use restrained micro-motion.
- Watch & Earn VE labels are aligned to the upper area of the corresponding coins and move only subtly with the coin artwork.
- Illustration padding is reduced on tablet/mobile and visual/content separator borders are removed.
- Desktop, tablet, and mobile layouts remain responsive with oversized illustrations kept within each banner flow.

## Height compliance update

- Desktop banners use `430px`.
- Tablet banners adapt between `450px` and `500px`.
- Mobile banners adapt between `425px` and `510px`.
- Every banner remains `100%` of its available parent width.
- Supporting cards are condensed/contained where needed so no banner exceeds the assignment maximum height.
- Animation travel is reduced on compact layouts so floating elements remain inside their visual region.

### Reviewer responsive illustration pass

- Increased the five main feature illustrations so they use their visual parent areas more effectively without stretching the artwork.
- Preserved assignment height ranges and 100% banner width across desktop, tablet, and mobile.
- Rebalanced Follow & Earn (section 04): large social-phone artwork with a stable reward card on desktop/tablet and a separate compact reward card below the illustration on mobile.
- Kept animation movement subtle and contained so animated artwork does not leave its banner region.
