import { FaGithub, FaLinkedin, FaWhatsapp, FaPhone } from 'react-icons/fa';
import { useScrollTo } from '../hooks/useScrollTo';
import { info } from '../data/portfolioData';
import styles from './Hero.module.css';

export default function Hero() {
  const scrollTo = useScrollTo();

  return (
    <section className={styles.hero}>
      <div className={styles.glow} />
      <div className={styles.content}>
        <p className={styles.greeting}>Hello, I'm</p>

        <h1 className={styles.name}>{info.name}</h1>
        <p className={styles.title}>{info.title}</p>
        <p className={styles.tagline}>{info.tagline}</p>

        <div className={styles.btns}>
          <button className={styles.btnPrimary} onClick={() => scrollTo('projects')}>
            View Projects
          </button>
          <button className={styles.btnOutline} onClick={() => scrollTo('contact')}>
            Contact Me
          </button>
        </div>

        <div className={styles.socials}>
          <a href={info.github} target="_blank" rel="noreferrer" className={styles.socialBtn} title="GitHub">
            <FaGithub size={20} />
          </a>
          <a href={info.linkedin} target="_blank" rel="noreferrer" className={styles.socialBtn} title="LinkedIn">
            <FaLinkedin size={20} />
          </a>
          <a href={`https://wa.me/${info.phone.replace(/\D/g,'')}`} target="_blank" rel="noreferrer" className={styles.socialBtn} title="WhatsApp">
            <FaWhatsapp size={20} />
          </a>
          <a href={`tel:${info.phone}`} className={styles.socialBtn} title="Call">
            <FaPhone size={18} />
          </a>
        </div>
      </div>

      <div className={styles.scrollHint}>↓</div>
    </section>
  );
}
