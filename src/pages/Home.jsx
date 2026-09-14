import { Info } from 'lucide-react'
import styles from './Home.module.css'
import LeaderboardBanner from '../components/LeaderboardBanner/LeaderboardBanner'
import WatchAdBanner from '../components/WatchAdBanner/WatchAdBanner'
import ContactBanner from '../components/ContactBanner/ContactBanner'
import FollowEarnBanner from '../components/FollowEarnBanner/FollowEarnBanner'
import DailyBonusBanner from '../components/DailyBonusBanner/DailyBonusBanner'

export default function Home() {
  return (
    <main className={styles.page}>
      <section className={styles.stack} aria-label="VELOOP Rewards feature banners">
        <LeaderboardBanner />
        <WatchAdBanner />
        <ContactBanner />
        <FollowEarnBanner />
        <DailyBonusBanner />
      </section>

      <footer className={styles.footer}>
        <div className={styles.notice}>
          <Info size={21} aria-hidden="true" />
          <p>
            Demo / Placeholder Notice: Ranking, reward, and streak values are development
            placeholders for presentation purposes only and may change in the final product.
          </p>
        </div>
        <div className={styles.logoText} aria-label="VELOOP Rewards">
          <strong><span>VE</span>LOOP</strong>
          <small>REWARDS</small>
        </div>
      </footer>
    </main>
  )
}
