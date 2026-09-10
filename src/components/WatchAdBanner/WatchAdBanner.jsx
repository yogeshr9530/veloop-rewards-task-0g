import { ArrowRight, CircleDollarSign, Play, ShieldCheck, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'
import styles from './WatchAdBanner.module.css'

export default function WatchAdBanner() {
  return (
    <article className={styles.banner}>
      <div className={styles.content}>
        <div className={styles.kicker}>
          <span>02</span>
          <Play size={14} fill="currentColor" />
          ON-DEMAND REWARDS
        </div>

        <h2>
          Watch Ads.
          <span> Earn VEs.</span>
        </h2>

        <p>
          Watch eligible advertisements and earn VEs for completing available ad
          activities.
        </p>

        <div className={styles.badges}>
          <span><ShieldCheck size={15} /> No Daily Cap</span>
          <span><Zap size={15} /> Instant Credits</span>
        </div>

        <Link to="/watch-earn" className={styles.cta}>
          Watch & Earn
          <ArrowRight size={18} />
        </Link>
      </div>

      <div className={styles.visual} role="img" aria-label="Video player, VE wallet and reward coin illustration">
        <div className={styles.player}>
          <div className={styles.playButton}><Play fill="currentColor" /></div>
          <div className={styles.playerBar}>
            <span className={styles.line}><i /></span>
            <small>0:18</small>
          </div>
        </div>

        <div className={styles.wallet}>
          <CircleDollarSign className={styles.walletMark} />
          <strong>VE</strong>
          <span>WALLET</span>
        </div>

        {[0, 1, 2, 3].map((coin) => (
          <div key={coin} className={`${styles.coin} ${styles[`coin${coin}`]}`}>VE</div>
        ))}
      </div>
    </article>
  )
}
