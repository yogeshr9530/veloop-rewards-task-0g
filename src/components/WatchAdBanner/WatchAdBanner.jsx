import { ArrowRight, Check, Play, ShieldCheck, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import usePointerParallax from '../../hooks/usePointerParallax'
import watchVisual from '../../assets/watch-earn-visual-clean.png'
import styles from './WatchAdBanner.module.css'

const floatingVECoins = [
  { key: 'leftTop', label: 'VE', className: styles.coinLeftTop },
  { key: 'leftMid', label: 'VE', className: styles.coinLeftMid },
  { key: 'rightTop', label: 'VE', className: styles.coinRightTop },
  { key: 'rightUpper', label: 'VE', className: styles.coinRightUpper },
  { key: 'rightCenter', label: 'VE', className: styles.coinRightCenter },
  { key: 'rightInner', label: 'VE', className: styles.coinRightInner },
  { key: 'rightOuter', label: 'VE', className: styles.coinRightOuter },
  { key: 'rightBottom', label: 'VE', className: styles.coinRightBottom },
]

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
        <div className={styles.visualStage}>
          <img src={watchVisual} alt="Video reward screen with VE wallet and floating reward coins" className={styles.visualImage} />

          {floatingVECoins.map((coin) => (
            <span key={coin.key} className={`${styles.veCoin} ${coin.className}`} aria-hidden="true">
              {coin.label}
            </span>
          ))}

          <button type="button" className={styles.playHotspot} onClick={previewReward} aria-label="Preview watch and earn interaction">
            <Play fill="currentColor" aria-hidden="true" />
          </button>

          <div className={styles.rewardToast} role="status" aria-live="polite">
            <Check size={16} aria-hidden="true" /> Reward preview · +38 VEs
          </div>
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
