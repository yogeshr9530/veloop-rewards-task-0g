import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import styles from './FeaturePage.module.css'

export default function FeaturePage({ eyebrow, title, text }) {
  return (
    <main className={styles.page}>
      <div className={styles.card}>
        <span className={styles.eyebrow}>{eyebrow}</span>
        <h1>{title}</h1>
        <p>{text}</p>
        <Link className={styles.back} to="/">
          <ArrowLeft size={18} />
          Back to banners
        </Link>
      </div>
    </main>
  )
}
