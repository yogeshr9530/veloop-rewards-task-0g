import { MessageSquare } from 'lucide-react'
import { Link } from 'react-router-dom'
import usePointerParallax from '../../hooks/usePointerParallax'
import supportVisual from '../../assets/contact-support-stars.png'
import styles from './ContactBanner.module.css'

export default function ContactBanner() {
  const motion = usePointerParallax()

  return (
    <article className={styles.banner} {...motion}>
      <div className={styles.visual}>
        <div className={styles.agentWrap}>
          <img
            src={supportVisual}
            alt="Friendly VELOOP customer support agent with headset, laptop and chat icons"
            className={styles.agentImage}
          />
        </div>
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
          Contact Us
          <MessageSquare size={19} aria-hidden="true" />
        </Link>
      </div>
    </article>
  )
}
