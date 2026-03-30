import { info, about } from '../data/portfolioData';
import styles from './About.module.css';

// Drop your photo at: src/assets/profile.jpg
// If no photo yet, the initials fallback shows instead
let profilePhoto = null;
try {
  profilePhoto = new URL('../assets/profile.jpg', import.meta.url).href;
} catch {
  profilePhoto = null;
}

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.titleWrap}>
          <h2 className={styles.title}>About <span>Me</span></h2>
          <p className={styles.sub}>Driven developer with a passion for creating impactful solutions</p>
        </div>

        <div className={styles.grid}>
          <div className={styles.photoWrap}>
            {profilePhoto ? (
              <img src={profilePhoto} alt="Marvellous Daimari" className={styles.photo} />
            ) : (
              <div className={styles.photoFallback}>MD</div>
            )}
            <div className={styles.photoBorder} />
            <div className={styles.photoGlow} />
          </div>

          <div className={styles.content}>
            <p className={styles.bio}>{info.bio1}</p>
            <p className={styles.bio}>{info.bio2}</p>

            <div className={styles.rows}>
              {about.map((item) => (
                <div key={item.title} className={styles.row}>
                  <div className={styles.rowIcon}>{item.icon}</div>
                  <div>
                    <strong className={styles.rowTitle}>{item.title}</strong>
                    <p className={styles.rowValue}>{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
