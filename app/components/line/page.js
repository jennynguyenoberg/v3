import styles from "./line.module.css";
import classNames from "classnames";

export default function Line({ children, className, ...props }) {
  return (
    <>
      <div className={styles.spaceTop}></div>
        <div className={classNames(styles.container, className)} {...props}>
            {children}
        </div>
      <div className={styles.spaceBottom}></div>
    </>
  );
}