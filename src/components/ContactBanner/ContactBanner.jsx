import { useState } from 'react'
import { ArrowRight, Check, Copy, Headphones, HelpCircle, Mail, MessageSquare, Ticket } from 'lucide-react'
import { Link } from 'react-router-dom'
import usePointerParallax from '../../hooks/usePointerParallax'
import supportVisual from '../../assets/contact-support-stars.png'
import mobileSupportVisual from '../../assets/contact-mobile-visual.png'
import styles from './ContactBanner.module.css'

const email = 'velooprewardsofficial@gmail.com'

function SupportPanel({ copied, onCopy, className = '' }) {
  return (
    <aside className={`${styles.supportPanel} ${className}`} aria-label="VELOOP support options">
      <div className={styles.panelRow}>
        <span className={styles.iconBox}><Headphones size={18} aria-hidden="true" /></span>
        <div><strong>We’re here to help</strong></div>
      </div>

      <div className={styles.panelRow}>
        <span className={styles.iconBox}><Mail size={18} aria-hidden="true" /></span>
        <div className={styles.emailWrap}>
          <small>Email Us</small>
          <strong title={email}>{email}</strong>
        </div>
      </div>

      <button className={styles.copyButton} onClick={onCopy} type="button" aria-live="polite">
        {copied ? 'Copied!' : 'Copy Email'}
        {copied ? <Check size={16} aria-hidden="true" /> : <Copy size={16} aria-hidden="true" />}
      </button>

      <Link to="/contact" className={styles.textLink}>
        <HelpCircle size={17} aria-hidden="true" />
        <span>Help Center</span>
        <ArrowRight size={15} aria-hidden="true" />
      </Link>

      <Link to="/contact" className={styles.textLink}>
        <Ticket size={17} aria-hidden="true" />
        <span>Submit a Ticket</span>
        <ArrowRight size={15} aria-hidden="true" />
      </Link>
    </aside>
  )
}

export default function ContactBanner() {
  const [copied, setCopied] = useState(false)
  const motion = usePointerParallax()

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1600)
    } catch {
      window.prompt('Copy support email:', email)
    }
  }

  return (
    <article className={styles.banner} {...motion}>
      <div className={styles.visual}>
        <img src={mobileSupportVisual} alt="VELOOP support agent and support options" className={styles.mobileVisualImage} />

        <div className={styles.agentWrap}>
          <img src={supportVisual} alt="Friendly VELOOP customer support agent with headset, laptop and glowing stars" className={styles.agentImage} />
        </div>

        <SupportPanel copied={copied} onCopy={copyEmail} className={styles.compactPanel} />
      </div>

      <div className={styles.content}>
        <div className={styles.kicker}>
          <span className={styles.index}>03</span>
          <span className={styles.stage}>CONTACT US</span>
        </div>

        <h2>
          Need Help? <span>We’re Here.</span>
        </h2>

        <p>Have a question, concern, or need assistance? Get in touch with the VELOOP Rewards team.</p>

        <Link to="/contact" className={styles.cta} aria-label="Contact VELOOP Rewards support">
          Contact Support
          <MessageSquare size={19} aria-hidden="true" />
        </Link>
      </div>

      <SupportPanel copied={copied} onCopy={copyEmail} className={styles.mobilePanel} />
    </article>
  )
}
