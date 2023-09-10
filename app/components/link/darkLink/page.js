import styles from "./darkLink.module.css";
import classNames from "classnames";

export default function DarkLinkItem({ children, className, ...props }) {
  return (
    <a className={classNames(styles.linkItem, className)} {...props}>
      {children}
    </a>
  );
}
