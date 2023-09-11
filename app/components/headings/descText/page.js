import styles from "./descText.module.css";
import classNames from "classnames";

export default function DescText({ children, className, ...props }) {
  return (
    <div className={classNames(styles.container, className)} {...props}>
      {children}
    </div>
  );
}