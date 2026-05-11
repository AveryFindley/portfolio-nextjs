import Image from "next/image";
import styles from "./page.module.css";
import Nav from "@/components/navigation";

import Link from "next/link"
import {moodboards, posters, logos} from "@/app/data/projects"

export default function ProjectsPage() {
  return (

  
     
    <main>


      <Nav />


  

      <h2 className={styles.h2}>Moodboards</h2>
      <div className={styles.projects}>
        {moodboards.map((project) => (
          <Link key={project.slug} className={styles.project} href={`/designs/${project.slug}`}>
            <article>
              <div className={styles.projectImage}>
                <Image src={project.url} alt={project.title} fill />
              </div>
              <h2>{project.title}</h2>
            </article>
          </Link>
        ))}
      </div>
      
      <h2 className={styles.h2}>Posters</h2>
      <div className={styles.projects}>
        {posters.map((project) => (
          <Link key={project.slug} className={styles.project} href={`/designs/${project.slug}`}>
            <article>
              <div className={styles.projectImage}>
                <Image src={project.url} alt={project.title} fill />
              </div>
              <h2>{project.title}</h2>
            </article>
          </Link>
        ))}
      </div>

      <h2 className={styles.h2}>Logos</h2>
      <div className={styles.projects}>
        {logos.map((project) => (
          <Link key={project.slug} className={styles.project} href={`/designs/${project.slug}`}>
            <article>
              <div className={styles.projectImage}>
                <Image src={project.url} alt={project.title} fill />
              </div>
              <h2>{project.title}</h2>
            </article>
          </Link>
        ))}
      </div>

    </main>
  )
}