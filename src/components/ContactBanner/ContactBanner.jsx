import { useState } from 'react'
import { ArrowRight, Check, Copy, Headphones, HelpCircle, Mail, MessageSquare, Ticket } from 'lucide-react'
import { Link } from 'react-router-dom'
import styles from './ContactBanner.module.css'

const email = 'velooprewardsofficial@gmail.com'

export default function ContactBanner() {
  const [copied, setCopied] = useState(false)

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
    <article className={styles.banner}>
      <div className={styles.content}>
        <div className={styles.kicker}>
          <span>03</span>
          CONTACT US
        </div>
        <h2>
          Need Help?
          <span> We’re Here.</span>
        </h2>
        <p>
          Have a question, concern, or need assistance? Get in touch with the
          VELOOP Rewards team.
        </p>
        <Link to="/contact" className={styles.cta} aria-label="Contact VELOOP Rewards support">
          Contact Support
          <MessageSquare size={18} aria-hidden="true" />
        </Link>
      </div>

      <div className={styles.visual}>
        <div className={styles.agent} role="img" aria-label="Friendly VELOOP customer support agent">
          <div className={styles.head}>
            <div className={styles.hair} />
            <div className={styles.face}>
              <span className={styles.eyeOne} />
              <span className={styles.eyeTwo} />
              <span className={styles.smile} />
            </div>
            <Headphones className={styles.headset} aria-hidden="true" />
          </div>
          <div className={styles.body}>
            <strong>V</strong>
          </div>
          <div className={styles.laptop}>
            <span>V</span>
          </div>
          <MessageSquare className={`${styles.chat} ${styles.chatOne}`} aria-hidden="true" />
          <MessageSquare className={`${styles.chat} ${styles.chatTwo}`} aria-hidden="true" />
        </div>

        <div className={styles.supportPanel} aria-label="VELOOP support options">
          <div className={styles.panelRow}>
            <HelpCircle size={18} aria-hidden="true" />
            <div>
              <small>We’re here to help</small>
              <strong>Support Center</strong>
            </div>
          </div>

          <div className={styles.panelRow}>
            <Mail size={18} aria-hidden="true" />
            <div className={styles.emailWrap}>
              <small>Email Us</small>
              <strong title={email}>{email}</strong>
            </div>
          </div>

          <button
            className={styles.copyButton}
            onClick={copyEmail}
            type="button"
            aria-live="polite"
            aria-label={copied ? 'Support email copied' : 'Copy VELOOP support email'}
          >
            {copied ? 'Copied!' : 'Copy Email'}
            {copied ? <Check size={16} aria-hidden="true" /> : <Copy size={16} aria-hidden="true" />}
          </button>

          <Link to="/contact" className={styles.textLink}>
            <HelpCircle size={16} aria-hidden="true" />
            Help Center
            <ArrowRight size={15} aria-hidden="true" />
          </Link>

          <Link to="/contact" className={styles.textLink}>
            <Ticket size={16} aria-hidden="true" />
            Submit a Ticket
            <ArrowRight size={15} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  )
}
