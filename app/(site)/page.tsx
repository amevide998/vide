import Image from 'next/image'
import { getProjects} from "@/sanity/sanity-utils";
import {Project} from "@/types/Project";
import Link from "next/link";

export default async function Home() {

    const project = await getProjects()

    return (
      <div className="max-w-5xl mx-auto py-20">
          <h1 className="text-7xl font-extrabold">
              Hello I&apos;m
              <span className="bg-gradient-to-tr from-blue-500 via-purple-500 to-red-500 bg-clip-text text-transparent">
                  {" "}vide !
              </span>
          </h1>

          <p>
              Hello everyone! Checkout my website
          </p>

          <h2 className="mt-24 font-bold text-gray-700 text-3xl">
              My Project
          </h2>

          <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {
                  project.map((project) => (
                      <Link
                          href={`/projects/${project.slug}`}
                          key={project._id}
                          className="border border-gray-500 rounded-lg p-3 hover:scale-105 hover:border-blue-500 transition"
                      >
                          {
                              project.image && (
                                  <Image
                                      src={project.image}
                                      alt={project.name}
                                      height={200}
                                      width={750}
                                      className="object-cover h-[200px] rounded-lg border border-gray-500"
                                  />
                              )
                          }
                          <div className="mt-2 font-extrabold bg-gradient-to-br from-green-400 to-blue-600 bg-clip-text text-transparent text-3xl">
                              {project.name}
                          </div>
                      </Link>
                  ))
              }
          </div>
      </div>
    )
}
