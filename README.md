# VELOOP Rewards – Task 0G

React/Vite implementation of the five VELOOP Rewards utility banners, rebuilt to closely match the supplied premium dark fintech/rewards reference UI while keeping the components responsive, accessible, interactive, and reusable.

## Banners implemented

1. **Leaderboard** — competition stage label, prize pool, ranking CTA, 3D trophy/podium visual, gold/blue/bronze lighting and motion.
2. **Watch Ads & Earn** — eligible-ad messaging, benefit chips, video/wallet/VE visual, interactive play hotspot and reward-preview feedback.
3. **Contact Us** — support CTA, 3D support-agent visual, real support email, copy-email interaction, help-center and ticket actions.
4. **Follow & Earn** — official-channel messaging, social-profile visual, eligible-campaign wording and demo reward card.
5. **Daily Bonus** — claim CTA, 3D gift/VE visual, current bonus card and seven-day streak UI.

## Assignment requirements covered

- App body background remains `#161827`.
- All banners use `100%` of the available container width.
- Desktop banner height: `450px` (inside the required 410–450px range).
- Tablet banner height: `540px` (inside the required 380–540px range).
- Mobile banner height: `520px` (inside the required 330–520px range).
- Large visual composition is included in every banner.
- Each banner has meaningful hover/pointer interaction or functional interaction.
- High-contrast CTA buttons include hover, active and keyboard-focus behavior.
- Responsive layouts are included for desktop, tablet and mobile.
- Visuals use transparent PNG/WebP assets with lightweight CSS motion instead of heavy video backgrounds.
- Copy Email is functional with accessible feedback.
- Watch & Earn includes an interactive reward preview.
- `prefers-reduced-motion` is respected.
- Dummy reward/ranking/streak values remain clearly development-only.

## Reference design

The supplied target UI is stored in `docs/reference/` for implementation comparison:

- `docs/reference/exact-ui-top.png`
- `docs/reference/exact-ui-bottom.png`

![Reference UI – top banners](docs/reference/exact-ui-top.png)

![Reference UI – remaining banners](docs/reference/exact-ui-bottom.png)

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

The latest pass follows the review direction to keep the **visual/image on top and the content below it** across all five banners. The top visual zones use subtle floating/tilt motion, while the lower content zones remain clean, readable and action-focused. These animations are implemented with lightweight CSS keyframes plus the existing pointer-parallax variables, so no heavy runtime animation library is required.

## Interaction details

- Top-first visual composition on every banner, with content placed below.
- Pointer-based parallax and focal glow movement on the main illustrations.
- Leaderboard sparkle motion and responsive trophy/podium composition.
- Watch-ad play hotspot with temporary `+38 VEs` reward-preview feedback.
- Working support email copy action with `Copied!` state.
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
- [ ] Push the updated source to GitHub
- [ ] Redeploy the updated source to Vercel/Netlify
- [ ] Capture fresh implementation screenshots after deployment

## Demo data notice

Ranking values, prize amounts, campaign rewards, daily rewards and streak information are development placeholders only. Replace them with approved production rules/data when backend integration is available.

## Author

Yogesh Rathor

## Final reviewer pass
The current UI preserves the supplied premium Task 0G visual language while applying the latest reviewer instruction: each feature now presents its animated visual first and its heading, explanation, supporting value and CTA beneath it. Motion remains subtle and professional to keep the fintech/rewards experience polished rather than game-like.
