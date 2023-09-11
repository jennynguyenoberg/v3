import styles from "./titleScroll.module.css";
import classNames from "classnames";

export default function TitleScroll({ className, ...props }) {
  return (
    <div className={classNames(styles.container, className)} {...props}>
      <div className={styles.title}>
        Jenny Nguyen Öberg —
        Jenny Nguyen Öberg —
        Jenny Nguyen Öberg —
        Jenny Nguyen Öberg —
        Jenny Nguyen Öberg —
        Jenny Nguyen Öberg —
      </div>
    </div>
  );
}