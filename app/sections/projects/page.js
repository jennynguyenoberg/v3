import SpanText from "@/app/components/headings/spanText/page";
import styles from "./projects.module.css";
import SmallText from "@/app/components/headings/smallText/page";
import ProjectList from "@/app/projects/page";
import DarkButton from "@/app/components/button/darkButton/page";

export default function Projects() {
  return (
    <>
      <div id="projects" className={styles.container}>
        <div className={styles.subContainer}>
          <SmallText>Selected work</SmallText>
        </div>
        <ProjectList />
        <DarkButton>All projects</DarkButton>
      </div>
    </>
  );
}
