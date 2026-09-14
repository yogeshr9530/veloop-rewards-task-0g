import { ArrowRight, Gift } from 'lucide-react'
import { Link } from 'react-router-dom'
import usePointerParallax from '../../hooks/usePointerParallax'
import followVisual from '../../assets/follow-earn-visual.webp'
import styles from './FollowEarnBanner.module.css'

export default function FollowEarnBanner() {
  const motion = usePointerParallax()

  return (
    <article className={styles.banner} {...motion}>
      <div className={styles.visual}>
        <div className={styles.phoneWrap}>
          <img src={followVisual} alt="VELOOP Rewards social profile on a phone with social engagement icons" className={styles.phoneImage} />
        </div>

        <aside className={styles.rewardCard} aria-label="Eligible social campaign reward example">
          <div className={styles.rewardIntro}>
            <span className={styles.giftIcon}><Gift size={24} aria-hidden="true" /></span>
            <p>Participate in eligible social campaigns and unlock rewards.</p>
          </div>
          <span className={styles.divider} />
          <strong>+500 SVEs</strong>
          <small>Demo Campaign</small>
        </aside>
      </div>

      <div className={styles.content}>
        <div className={styles.kicker}>
          <span className={styles.index}>04</span>
          <span className={styles.stage}>FOLLOW &amp; EARN</span>
        </div>

        <h2>Follow &amp; Earn</h2>

        <p>
          Follow VELOOP Rewards on our official channels and participate in eligible social
          campaigns to unlock rewards.
        </p>

        <Link to="/follow-earn" className={styles.cta}>
          Explore Our Channels
          <ArrowRight size={19} aria-hidden="true" />
        </Link>
      </div>
    </article>
  )
}
