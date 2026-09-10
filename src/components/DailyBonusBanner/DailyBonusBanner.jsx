import { ArrowRight, Check, Gift, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import { streakDays } from '../../data/rewards'
import styles from './DailyBonusBanner.module.css'

export default function DailyBonusBanner() {
  return (
    <article className={styles.banner}>
      <div className={styles.content}>
        <div className={styles.kicker}>
          <span>05</span>
          DAILY BONUS
        </div>

        <h2>
          Your Daily Bonus
          <span>Is Waiting</span>
        </h2>

        <p>
          Check in regularly and claim your available daily bonus before the
          opportunity resets.
        </p>

        <Link to="/daily-bonus" className={styles.cta}>
          Claim Bonus
          <Gift size={18} />
        </Link>
      </div>

      <div className={styles.visual} role="img" aria-label="Daily reward gift, today bonus and seven-day streak illustration">
        <div className={styles.giftScene}>
          <Sparkles className={styles.sparkleA} />
          <Sparkles className={styles.sparkleB} />
          <div className={styles.bow}>✦</div>
          <div className={styles.lid} />
          <div className={styles.box}>
            <span>VE</span>
          </div>
          <div className={`${styles.coin} ${styles.coinA}`}>VE</div>
          <div className={`${styles.coin} ${styles.coinB}`}>VE</div>
        </div>

        <div className={styles.todayCard}>
          <small>TODAY’S BONUS</small>
          <strong>+25 GEMS</strong>
          <span>Available Now <i /></span>
        </div>

        <div className={styles.streak}>
          <small>7-DAY STREAK</small>
          <div className={styles.days}>
            {streakDays.map(({ day, done }) => (
              <div key={day}>
                <b>{day}</b>
                <span className={done ? styles.done : ''}>
                  {done ? <Check size={13} /> : day}
                </span>
              </div>
            ))}
          </div>
          <strong>6 Days Completed</strong>
          <p>Come back tomorrow!</p>
        </div>
      </div>
    </article>
  )
}
