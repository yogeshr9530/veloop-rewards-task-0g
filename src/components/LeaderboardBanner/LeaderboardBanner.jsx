import { ArrowRight, Trophy } from 'lucide-react'
import { Link } from 'react-router-dom'
import usePointerParallax from '../../hooks/usePointerParallax'
import leaderboardVisual from '../../assets/leaderboard-visual-user.png'
import styles from './LeaderboardBanner.module.css'

export default function LeaderboardBanner() {
  const motion = usePointerParallax()

  return (
    <article className={styles.banner} {...motion}>
      <div className={styles.sparkles} aria-hidden="true">
        <i /><i /><i /><i /><i />
      </div>

      <div className={styles.visual} aria-hidden="true">
        <span className={styles.halo} />
        <img src={leaderboardVisual} alt="" className={styles.visualImage} />
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
