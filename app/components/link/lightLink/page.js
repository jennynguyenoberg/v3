import styles from "./lightLink.module.css";
import classNames from "classnames";

export default function LightLinkItem({ children, className, ...props }) {
  return (
    <a className={classNames(styles.linkItem, className)} {...props}>
      {children}
    </a>
  );
}
