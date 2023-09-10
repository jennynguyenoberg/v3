import styles from './button.module.css';
import classNames from 'classnames';

export default function Button({ children, className, ...props }) {
  return (
    <div className={styles.main}>
      <button className={classNames(styles.container, className)} {...props}>
        {children}
      </button>
    </div>
  );
}
