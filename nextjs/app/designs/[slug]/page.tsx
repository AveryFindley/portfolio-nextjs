import Image from "next/image";
import {moodboards, logos, posters} from "@/app/data/projects"
import Nav from "@/components/navigation";

export default async function ProjectPage({ params }: any) {
  const { slug } = await params;

  const projects = [...moodboards, ...logos, ...posters];
  const project = projects.find((project) => project.slug === slug);
  const wrapperStyle: any = {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    color: "#991a40",
    fontFamily: "Avenir Next LT Pro"
  };

  if (!project) {
    return <h1>Project not found</h1>;
  }

  return (
    <main>
      <Nav />
      <div style={wrapperStyle}>
          <h1>{project.title}</h1>
          <Image src={project.url} alt={project.title} width={600} height={400} />
      </div>
    </main>
  );
}

