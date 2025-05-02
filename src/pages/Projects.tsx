import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore"
import { db } from "../lib/firebase";

type Project = {
  id: string;
  title: string;
  description: string;
  url: string;
  image_url?: string;
};

export default function Projects() {
  const [items, setItems] = useState<(Project & { id: string })[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const querySnapshot = await getDocs(collection(db, "portfolio"));
      const projects = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data() as Omit<Project, "id">,
      }));
      console.log("Loaded projects:", projects);
      setItems(projects);
    };
    fetchProjects();

  }, []);

  return (
    <section id="projects" className="mb-16">
      <h2 className="text-3xl font-semibold text-white mb-4">Projects</h2>
      <ul className="space-y-6">
        {items.map((p) => (
          <li key={p.id}>
            <a
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:text-white"
            >
              <h3 className="text-xl font-medium text-white">{p.title}</h3>
              <p className="text-gray-400">{p.description}</p>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
