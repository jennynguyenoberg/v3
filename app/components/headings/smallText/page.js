import styles from "./smalltext.module.css";
import classNames from "classnames";

export default function SmallText({ children, className, ...props }) {
  return (
    <span className={classNames(styles.container, className)} {...props}>
      {children}
    </span>
  );
}