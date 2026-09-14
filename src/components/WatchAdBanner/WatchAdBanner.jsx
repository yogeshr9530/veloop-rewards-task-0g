import { useState } from 'react'
import { ArrowRight, Check, Play, ShieldCheck, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'
import usePointerParallax from '../../hooks/usePointerParallax'
import watchVisual from '../../assets/watch-earn-visual.webp'
import styles from './WatchAdBanner.module.css'

export default function WatchAdBanner() {
  const [previewed, setPreviewed] = useState(false)
  const motion = usePointerParallax()

  function previewReward() {
    setPreviewed(true)
    window.setTimeout(() => setPreviewed(false), 1800)
  }

  return (
    <article className={`${styles.banner} ${previewed ? styles.previewed : ''}`} {...motion}>
      <div className={styles.visual}>
        <img src={watchVisual} alt="Video reward screen with VE wallet and reward coins" className={styles.visualImage} />
        <button type="button" className={styles.playHotspot} onClick={previewReward} aria-label="Preview watch and earn interaction">
          <Play fill="currentColor" aria-hidden="true" />
        </button>
        <div className={styles.rewardToast} role="status" aria-live="polite">
          <Check size={16} aria-hidden="true" /> Reward preview · +38 VEs
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.kicker}>
          <span className={styles.index}>02</span>
          <span className={styles.stage}>
            <Play size={14} fill="currentColor" aria-hidden="true" />
            ON-DEMAND REWARDS
          </span>
        </div>

        <h2>
          Watch Ads. <span>Earn VEs.</span>
        </h2>

        <p>Watch eligible advertisements and earn VEs for completing available ad activities.</p>

        <div className={styles.badges} aria-label="Watch and earn benefits">
          <span><ShieldCheck size={17} aria-hidden="true" /> No Daily Cap</span>
          <span><Zap size={17} aria-hidden="true" /> Instant Credits</span>
        </div>

        <Link to="/watch-earn" className={styles.cta}>
          Watch &amp; Earn
          <ArrowRight size={19} aria-hidden="true" />
        </Link>
      </div>
    </article>
  )
}
