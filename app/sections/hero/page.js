import styles from "./hero.module.css";
import TitleScroll from "@/app/components/headings/titleScroll/page";
import SpanText from "@/app/components/headings/spanText/page";
import DarkLinkItem from "@/app/components/link/darkLink/page";
import classNames from "classnames";

export default function Hero() {
  return (
    <div className={styles.container}>
      <div className={styles.rowWrapper}>
        <div className={styles.calloutText}>
          ↳ Current internship at <DarkLinkItem
            href="https://getbower.com/"
            className={classNames(styles.linkItem)}
            target="_blank"
            rel="noopener noreferrer"
          >
            Bower
          </DarkLinkItem>
        </div>
      </div>
      <TitleScroll />
      <div className={styles.spanContainer}>
        <SpanText>Designer & Developer</SpanText>
      </div>
    </div>
  );
}

// import styles from "./hero.module.css";
// import SubHeadingRotate from "@/app/components/headings/subHeadingRotate/page";
// import TitleScroll from "@/app/components/headings/titleScroll/page";
// import SpanText from "@/app/components/headings/spanText/page";

// export default function Hero() {
//   return (
//     <div className={styles.container}>
//       <div className={styles.rowWrapper}>
//         <div className={styles.calloutText}>
//           ↳ Looking for an internship starting in
//         </div>
//         <SubHeadingRotate>
//           <span>January</span>
//           <br />
//           <span>2024</span>
//         </SubHeadingRotate>
//       </div>
//       <TitleScroll />
//       <div className={styles.spanContainer}>
//         <SpanText>Designer & Developer</SpanText>
//       </div>
//     </div>
//   );
// }
