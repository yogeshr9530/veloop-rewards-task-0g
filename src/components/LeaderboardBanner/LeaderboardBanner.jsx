import { ArrowRight, BarChart3, Crown, Trophy } from 'lucide-react'
import { Link } from 'react-router-dom'
import { leaderboardUsers } from '../../data/rewards'
import styles from './LeaderboardBanner.module.css'

export default function LeaderboardBanner() {
  return (
    <article className={styles.banner}>
      <div className={styles.content}>
        <div className={styles.kicker}>
          <span>01</span>
          <Trophy size={15} />
          COMPETITION STAGE ACTIVE
        </div>

        <h2>
          Rank Higher.
          <span> Earn More.</span>
        </h2>

        <p>
          Complete activities, earn rewards, gain XP, and compete with other users
          to climb the leaderboard.
        </p>

        <div className={styles.prize}>
          <Trophy size={16} />
          Current pool: <strong>50,000 VEs in prizes</strong>
        </div>

        <Link to="/leaderboard" className={styles.cta}>
          Check Rankings
          <ArrowRight size={18} />
        </Link>
      </div>

      <div className={styles.visual} role="img" aria-label="Leaderboard podium, trophy and top three ranking illustration">
        <div className={styles.chart} aria-hidden="true">
          <BarChart3 />
        </div>
        <div className={styles.trophyWrap} aria-hidden="true">
          <Crown className={styles.crown} />
          <Trophy className={styles.bigTrophy} />
        </div>

        <div className={styles.podium}>
          {leaderboardUsers.map((user) => (
            <div
              key={user.rank}
              className={`${styles.rankCard} ${styles[user.medal]}`}
            >
              <span className={styles.rankBubble}>{user.rank}</span>
              <strong>{user.name}</strong>
              <small>{user.reward}</small>
            </div>
          ))}
        </div>
      </div>
    </article>
  )
}
