import { Check, Gift } from 'lucide-react'
import { Link } from 'react-router-dom'
import usePointerParallax from '../../hooks/usePointerParallax'
import { streakDays } from '../../data/rewards'
import dailyVisual from '../../assets/daily-bonus-visual.webp'
import styles from './DailyBonusBanner.module.css'

function TodayCard({ className = '' }) {
  return (
    <aside className={`${styles.todayCard} ${className}`} aria-label="Today's bonus example">
      <small>TODAY’S BONUS</small>
      <strong>+25 GEMS</strong>
      <span>Available Now <i aria-hidden="true" /></span>
    </aside>
  )
}

function StreakCard({ className = '' }) {
  return (
    <aside className={`${styles.streak} ${className}`} aria-label="Seven-day reward streak example">
      <small>7-DAY STREAK</small>
      <div className={styles.days}>
        {streakDays.map(({ day, done }) => (
          <div key={day}>
            <b>{day}</b>
            <span className={done ? styles.done : ''}>
              {done ? <Check size={14} aria-hidden="true" /> : day}
            </span>
          </div>
        ))}
      </div>
      <strong>6 Days Completed</strong>
      <p>Come back tomorrow!</p>
    </aside>
  )
}

export default function DailyBonusBanner() {
  const motion = usePointerParallax()

  return (
    <article className={styles.banner} {...motion}>
      <div className={styles.visual}>
        <div className={styles.giftWrap}>
          <img src={dailyVisual} alt="Glowing reward gift box with VE coins" className={styles.giftImage} />
        </div>

        <TodayCard className={styles.summaryToday} />
        <StreakCard className={styles.summaryStreak} />
      </div>

      <div className={styles.content}>
        <div className={styles.kicker}>
          <span className={styles.index}>05</span>
          <span className={styles.stage}>DAILY BONUS</span>
        </div>

        <h2>
          Your Daily Bonus
          <span>Is Waiting</span>
        </h2>

        <p>Check in regularly and claim your available daily bonus before the opportunity resets.</p>

        <Link to="/daily-bonus" className={styles.cta}>
          Claim Bonus
          <Gift size={19} aria-hidden="true" />
        </Link>
      </div>

      <div className={styles.mobileDetails}>
        <TodayCard className={styles.detailToday} />
        <StreakCard className={styles.detailStreak} />
      </div>
    </article>
  )
}
