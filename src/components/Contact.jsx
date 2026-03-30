import { FaGithub, FaLinkedin, FaWhatsapp, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { info } from '../data/portfolioData';
import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.titleWrap}>
          <h2 className={styles.title}>Get In <span>Touch</span></h2>
          <p className={styles.sub}>Have a project in mind or want to collaborate? Feel free to reach out!</p>
        </div>

        <div className={styles.centerCard}>
          <h3 className={styles.heading}>Let's work together</h3>
          <p className={styles.text}>
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision. Let's create something
            amazing together!
          </p>

          <div className={styles.cards}>
            <InfoCard icon={<FaPhone size={16} />}         label="Phone"    value={info.phone}        href={`tel:${info.phone}`} />
            <InfoCard icon={<FaMapMarkerAlt size={16} />}  label="Location" value={info.location} />
            <InfoCard icon={<FaWhatsapp size={16} />}      label="WhatsApp" value="Chat on WhatsApp"  href={`https://wa.me/${info.phone.replace(/\D/g,'')}`} />
          </div>

          <div className={styles.reachBtns}>
            <a href={`tel:${info.phone}`} className={styles.reachBtn}>
              <span className={styles.reachIcon}><FaPhone size={16} /></span>
              <span className={styles.reachLabel}>Call Me</span>
              <span className={styles.reachArrow}>›</span>
            </a>
            <a href={`https://wa.me/${info.phone.replace(/\D/g,'')}`} target="_blank" rel="noreferrer" className={styles.reachBtn}>
              <span className={styles.reachIcon}><FaWhatsapp size={16} /></span>
              <span className={styles.reachLabel}>WhatsApp</span>
              <span className={styles.reachArrow}>›</span>
            </a>
            <a href={info.github} target="_blank" rel="noreferrer" className={styles.reachBtn}>
              <span className={styles.reachIcon}><FaGithub size={16} /></span>
              <span className={styles.reachLabel}>View GitHub</span>
              <span className={styles.reachArrow}>›</span>
            </a>
            <a href={info.linkedin} target="_blank" rel="noreferrer" className={styles.reachBtn}>
              <span className={styles.reachIcon}><FaLinkedin size={16} /></span>
              <span className={styles.reachLabel}>Connect on LinkedIn</span>
              <span className={styles.reachArrow}>›</span>
            </a>
          </div>
        </div>

        <footer className={styles.footer}>
          <span>© 2026 Marvellous Daimari. All rights reserved.</span>
          <span>Made by Marv</span>
        </footer>
      </div>
    </section>
  );
}

function InfoCard({ icon, label, value, href }) {
  const content = (
    <div className={styles.infoCard}>
      <div className={styles.infoIcon}>{icon}</div>
      <div>
        <p className={styles.infoLabel}>{label}</p>
        <p className={styles.infoValue}>{value}</p>
      </div>
    </div>
  );
  return href ? <a href={href} className={styles.infoCardLink}>{content}</a> : content;
}
