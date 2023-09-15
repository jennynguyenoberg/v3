import styles from "./subHeadingRotate.module.css";
import classNames from "classnames";

export default function SubHeadingRotate({ children, className, ...props }) {
  return (
    <div className={classNames(styles.container, className)} {...props}>
      {children}
    </div>
  );
}
