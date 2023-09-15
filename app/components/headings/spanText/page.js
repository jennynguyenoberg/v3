import styles from "./spanText.module.css";
import classNames from "classnames";

export default function SpanText({ children, className, ...props }) {
  return (
    <span className={classNames(styles.container, className)} {...props}>
      {children}
    </span>
  );
}
