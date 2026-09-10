import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import FeaturePage from './components/FeaturePage/FeaturePage'

const featurePages = [
  {
    path: '/leaderboard',
    eyebrow: 'Leaderboard',
    title: 'Climb the rankings',
    text: 'This route is ready for the final leaderboard experience and backend integration.',
  },
  {
    path: '/watch-earn',
    eyebrow: 'Watch & Earn',
    title: 'Eligible ad rewards',
    text: 'This route is prepared for ad inventory, completion tracking, and VE reward rules.',
  },
  {
    path: '/contact',
    eyebrow: 'Support',
    title: 'Talk to the VELOOP Rewards team',
    text: 'This route is ready for support forms, help-center links, and ticket flows.',
  },
  {
    path: '/follow-earn',
    eyebrow: 'Follow & Earn',
    title: 'Official social campaigns',
    text: 'This route is ready for verified social channels and eligible campaign rules.',
  },
  {
    path: '/daily-bonus',
    eyebrow: 'Daily Bonus',
    title: 'Claim recurring rewards',
    text: 'This route is ready for real streak data, reset timers, and daily reward rules.',
  },
]

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {featurePages.map((page) => (
        <Route
          key={page.path}
          path={page.path}
          element={<FeaturePage {...page} />}
        />
      ))}
    </Routes>
  )
}
