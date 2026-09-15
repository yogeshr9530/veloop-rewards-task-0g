import { ArrowRight, Trophy } from 'lucide-react'
import { Link } from 'react-router-dom'
import leaderboardVisual from '../../assets/leaderboard-visual-clean.png'
import styles from './LeaderboardBanner.module.css'

const floatingRanks = [
  {
    key: 'left',
    rank: '02',
    name: 'User B',
    value: '11,820 VEs',
    className: styles.rankLeft,
  },
  {
    key: 'center',
    rank: '01',
    name: 'User A',
    value: '12,450 VEs',
    className: styles.rankCenter,
  },
  {
    key: 'right',
    rank: '03',
    name: 'User C',
    value: '10,970 VEs',
    className: styles.rankRight,
  },
]

export default function LeaderboardBanner() {
  return (
    <article className={styles.banner}>
      <div className={styles.sparkles} aria-hidden="true">
        <i /><i /><i /><i /><i />
      </div>

      <div className={styles.visual} aria-hidden="true">
        <span className={styles.halo} />

        <div className={styles.visualStage}>
          <img src={leaderboardVisual} alt="" className={styles.visualImage} />

          {floatingRanks.map((item) => (
            <div
              key={item.key}
              className={`${styles.rankLayer} ${item.className}`}
            >
              <span className={styles.floatBadge}>{item.rank}</span>
              <span className={styles.floatCopy}>
                <strong>{item.name}</strong>
                <em>{item.value}</em>
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.kicker}>
          <span className={styles.index}>01</span>
          <span className={styles.stage}>
            <Trophy size={15} aria-hidden="true" />
            COMPETITION STAGE ACTIVE
          </span>
        </div>

        <h2>
          Rank Higher.
          <span>Earn More.</span>
        </h2>

        <p>
          Complete activities, earn rewards, gain XP, and compete with other users to climb
          the leaderboard.
        </p>

        <div className={styles.prize}>
          <Trophy size={16} aria-hidden="true" />
          <span>Current pool:</span>
          <strong>50,000 VEs</strong>
          <span>in prizes</span>
        </div>

        <Link to="/leaderboard" className={styles.cta} aria-label="Check VELOOP leaderboard rankings">
          Check Rankings
          <ArrowRight size={19} aria-hidden="true" />
        </Link>
      </div>
    </article>
  )
}
