import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore"
import { db } from "../lib/firebase";

type Job = {
  id: string;           
  company: string;
  role: string;
  start_date: string;    // store your dates as ISO strings in Firestore
  end_date?: string;
  description: string;
};

export default function Work() {
  const [jobs, setJobs] = useState<(Job & { id: string })[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const querySnapshot = await getDocs(collection(db, "work"));
      const work = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data() as Omit<Job, "id">,
      }));
      console.log("Loaded projects:", work);
      setJobs(work);
    };
    fetchProjects();

  }, []);
  return (
    <section id="work" className="mb-16">
      <h2 className="text-3xl font-semibold text-white mb-4">Work</h2>
      <ul className="space-y-6">
        {jobs.map((job) => (
          <li key={job.id}>
            <h3 className="text-xl font-medium text-white">
              {job.company} • {job.start_date} — {job.end_date || "Present"}
            </h3>
            <p className="text-gray-400">{job.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
