import styles from './Home.module.css'
import LeaderboardBanner from '../components/LeaderboardBanner/LeaderboardBanner'
import WatchAdBanner from '../components/WatchAdBanner/WatchAdBanner'
import ContactBanner from '../components/ContactBanner/ContactBanner'
import FollowEarnBanner from '../components/FollowEarnBanner/FollowEarnBanner'
import DailyBonusBanner from '../components/DailyBonusBanner/DailyBonusBanner'

export default function Home() {
  return (
    <main className={styles.page}>
      <header className={styles.topbar}>
        <div>
          <span className={styles.brandMark}>V</span>
          <div>
            <strong>VELOOP</strong>
            <small>REWARDS</small>
          </div>
        </div>
        <p>Task 0G · Rewards & Engagement</p>
      </header>

      <section className={styles.stack} aria-label="VELOOP Rewards feature banners">
        <LeaderboardBanner />
        <WatchAdBanner />
        <ContactBanner />
        <FollowEarnBanner />
        <DailyBonusBanner />
      </section>

      <footer className={styles.footer}>
        <p>
          Demo / Placeholder Notice: ranking, reward and streak values are development
          placeholders and may change in the final product.
        </p>
        <div className={styles.logoText}>
          <strong>VELOOP</strong>
          <span>REWARDS</span>
        </div>
      </footer>
    </main>
  )
}
