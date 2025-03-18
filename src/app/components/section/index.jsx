import styles from './section.module.css';
import Card from '../cards'

const Section = ({titulo, children}) => {
  return (
    <section className={styles.newTrophies}>
    <h2>{titulo}</h2>
    <div className={styles.trophiesGrid}>
     {children}
    </div>
  </section>
  );
}

export default Section;