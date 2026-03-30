import { useScrollTo } from '../hooks/useScrollTo';
import styles from './Navbar.module.css';

const links = ['about', 'skills', 'projects', 'contact'];

function MDLogo() {
  return (
    <div className={styles.logoWrap}>
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Hexagon background */}
        <path
          d="M22 2L40 12V32L22 42L4 32V12L22 2Z"
          fill="url(#hexGrad)"
          stroke="url(#strokeGrad)"
          strokeWidth="1"
        />
        {/* M letter */}
        <text x="5" y="29" fontFamily="'Space Grotesk', sans-serif" fontSize="17" fontWeight="900" fill="white" letterSpacing="-1">MD</text>
        <defs>
          <linearGradient id="hexGrad" x1="4" y1="2" x2="40" y2="42" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#4C1D95" />
          </linearGradient>
          <linearGradient id="strokeGrad" x1="4" y1="2" x2="40" y2="42" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#A78BFA" />
            <stop offset="100%" stopColor="#6D28D9" />
          </linearGradient>
        </defs>
      </svg>
      <div className={styles.logoText}>
        <span className={styles.logoName}>Marvellous</span>
        <span className={styles.logoDot}>.dev</span>
      </div>
    </div>
  );
}

export default function Navbar() {
  const scrollTo = useScrollTo();

  return (
    <nav className={styles.nav}>
      <MDLogo />
      <ul className={styles.links}>
        {links.map((l) => (
          <li key={l}>
            <button onClick={() => scrollTo(l)} className={styles.link}>
              {l.charAt(0).toUpperCase() + l.slice(1)}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
