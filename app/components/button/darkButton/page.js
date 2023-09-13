import styles from './darkButton.module.css';
import classNames from 'classnames';

export default function DarkButton({ children, className, ...props }) {
  return (
    <div className={styles.main}>
      <button className={classNames(styles.container, className)} {...props}>
        {children}
      </button>
    </div>
  );
}
