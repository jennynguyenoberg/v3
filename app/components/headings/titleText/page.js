import styles from "./titleText.module.css";
import classNames from "classnames";

export default function TitleText({ children, className, ...props }) {
  return (
    <span className={classNames(styles.container, className)} {...props}>
      {children}
    </span>
  );
}
