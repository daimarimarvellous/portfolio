import { skills, softSkills } from '../data/portfolioData';
import styles from './Skills.module.css';

export default function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.titleWrap}>
          <h2 className={styles.title}>Technical <span>Skills</span></h2>
          <p className={styles.sub}>Technologies and tools I work with to bring ideas to life</p>
        </div>

        <div className={styles.grid}>
          {skills.map((s) => (
            <div key={s.cat} className={styles.card}>
              <h4 className={styles.cat}>{s.cat}</h4>
              <div className={styles.tags}>
                {s.items.map((item) => (
                  <span key={item} className={styles.tag}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.softWrap}>
          <p className={styles.softLabel}>Also skilled in</p>
          <div className={styles.softTags}>
            {softSkills.map((s) => (
              <span key={s} className={styles.softTag}>{s}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
