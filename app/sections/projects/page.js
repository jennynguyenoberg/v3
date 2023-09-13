import SpanText from "@/app/components/headings/spanText/page";
import styles from "./projects.module.css";
import SmallText from "@/app/components/headings/smallText/page";
import DataList from "@/app/projects/page";

export default function Projects() {
  return (
    <>
      <div id="projects" className={styles.container}>
        <div className={styles.subContainer}>
          <SmallText>Selected work</SmallText>
        </div>
        <DataList />
      </div>
    </>
  );
}
