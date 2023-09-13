// pages/projects/[id].js
import { useRouter } from "next/router";
import projectData from "@/app/config/projectsdata"; // Import your project data JSON file

export default function ProjectPage({ project }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
    </div>
  );
}

// This function gets called at build time
export async function getStaticPaths() {
  const paths = projectData.map((project) => ({
    params: { id: project.id },
  }));

  return { paths, fallback: true };
}

// This function gets called at build time as well
export async function getStaticProps({ params }) {
  const { id } = params;
  const project = projectData.find((p) => p.id === id);

  return {
    props: {
      project,
    },
  };
}