import styles from "./subheadingScroll.module.css";
import classNames from "classnames";

export default function SubHeadingScroll({ children, className, ...props }) {
  return (
    <div className={classNames(styles.container, className)} {...props}>
      {children}
    </div>
  );
}