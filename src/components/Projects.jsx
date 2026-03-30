import { projects } from '../data/portfolioData';
import styles from './Projects.module.css';

export default function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.titleWrap}>
          <h2 className={styles.title}>Featured <span>Projects</span></h2>
          <p className={styles.sub}>A selection of projects that showcase my skills and passion for development</p>
        </div>

        <div className={styles.grid}>
          {projects.map((p) => (
            <div key={p.id} className={styles.card}>
              <div className={styles.thumb}>
                <span className={styles.abbr}>{p.abbr}</span>
              </div>

              <div className={styles.body}>
                <div className={styles.header}>
                  <h3 className={styles.projectTitle}>{p.title}</h3>
                  {p.ongoing && (
                    <span className={styles.badge}>⏱ Ongoing</span>
                  )}
                </div>

                <p className={styles.desc}>{p.desc}</p>

                <div className={styles.tags}>
                  {p.tags.map((t) => (
                    <span key={t} className={styles.tag}>{t}</span>
                  ))}
                </div>

                <div className={styles.btns}>
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noreferrer" className={`${styles.btn} ${styles.btnCode}`}>
                      ⌥ Code
                    </a>
                  )}
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noreferrer" className={`${styles.btn} ${styles.btnLive}`}>
                      ↗ Live
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
