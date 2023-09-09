import styles from "./link.module.css";
import classNames from "classnames";

export default function LinkItem({ children, className, ...props }) {
  return (
    <a className={classNames(styles.linkItem, className)} {...props}>
      {children}
    </a>
  );
}
