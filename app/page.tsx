import Image from 'next/image'
import { getProjects} from "@/sanity/sanity-utils";
import {Project} from "@/types/Project";

export default async function Home() {

  const project = await getProjects()

  return (
      <div>
          {
              project.map((project) => (
                  <div key={project._id}>
                      <h1>{project.name}</h1>
                  </div>
              ))
          }
        
      </div>
  )
}
