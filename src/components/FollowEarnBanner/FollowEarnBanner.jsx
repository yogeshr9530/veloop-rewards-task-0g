import { ArrowRight, Bell, Gift, Heart, Instagram, Linkedin, Star, Users, Youtube } from 'lucide-react'
import { FaXTwitter } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import styles from './FollowEarnBanner.module.css'

export default function FollowEarnBanner() {
  return (
    <article className={styles.banner}>
      <div className={styles.content}>
        <div className={styles.kicker}>
          <span>04</span>
          FOLLOW & EARN
        </div>
        <h2>
          Follow & Earn
          <span>Stay Connected.</span>
        </h2>
        <p>
          Follow VELOOP Rewards on our official channels and participate in eligible
          social campaigns to unlock rewards.
        </p>
        <Link to="/follow-earn" className={styles.cta}>
          Explore Our Channels
          <ArrowRight size={18} />
        </Link>
      </div>

      <div className={styles.visual} role="img" aria-label="VELOOP social profile, channel icons and eligible campaign reward illustration">
        <div className={styles.phone}>
          <div className={styles.phoneTop} />
          <div className={styles.logo}>V</div>
          <strong>VELOOP Rewards</strong>
          <small>@velooprewards</small>
          <div className={styles.followPill}>Following <Bell size={13} aria-hidden="true" /></div>
          <div className={styles.stats}>
            <span><b>128</b>Posts</span>
            <span><b>24.5K</b>Followers</span>
            <span><b>8</b>Following</span>
          </div>
        </div>

        <div className={`${styles.social} ${styles.ig}`}><Instagram /></div>
        <div className={`${styles.social} ${styles.in}`}><Linkedin /></div>
        <div className={`${styles.social} ${styles.yt}`}><Youtube /></div>
        <div className={`${styles.social} ${styles.x}`}><FaXTwitter /></div>
        <div className={`${styles.social} ${styles.users}`}><Users /></div>
        <div className={`${styles.social} ${styles.heart}`}><Heart /></div>
        <div className={`${styles.social} ${styles.star}`}><Star /></div>

        <div className={styles.rewardCard}>
          <Gift />
          <p>Participate in eligible social campaigns and unlock rewards.</p>
          <strong>+500 SVEs</strong>
          <small>Demo Campaign</small>
        </div>
      </div>
    </article>
  )
}
