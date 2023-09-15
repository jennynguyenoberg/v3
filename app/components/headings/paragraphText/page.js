import styles from "./paragraphText.module.css";
import classNames from "classnames";

export default function ParagraphText({ children, className, ...props }) {
  return (
    <p className={classNames(styles.container, className)} {...props}>
      {children}
    </p>
  );
}
