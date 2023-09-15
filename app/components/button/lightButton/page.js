import styles from "./lightButton.module.css";
import classNames from "classnames";

export default function LightButton({ children, className, ...props }) {
  return (
    <div className={styles.main}>
      <button className={classNames(styles.container, className)} {...props}>
        {children}
      </button>
    </div>
  );
}
