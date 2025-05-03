import React, { useEffect, useState } from "react";
import { collection, getDocs, orderBy, query, Timestamp } from "firebase/firestore"
import { db } from "../lib/firebase";
import { Card, CardContent, CardTitle, CardHeader, CardDescription } from "@/components/ui/card";

type Job = {
  id: string;
  company: string;
  role: string;
  start_date: Date;    // store your dates as ISO strings in Firestore
  end_date?: Date;
  description: string;
};

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
export default function Work() {
  const [jobs, setJobs] = useState<(Job & { id: string })[]>([]);

  useEffect(() => {
    const fetchWork = async () => {
      const q = query(collection(db, "work"), orderBy("start_date", "desc"));
      const snapshot = await getDocs(q);

      const work: Job[] = snapshot.docs.map((doc) => {
        const data = doc.data() as {
          company: string;
          role: string;
          start_date: Timestamp;
          end_date?: Timestamp;
          description: string;
        };

        return {
          id: doc.id,
          company: data.company,
          role: data.role,
          start_date: data.start_date.toDate(),
          end_date: data.end_date ? data.end_date.toDate() : undefined,
          description: data.description,
        };
      });

      console.log("Loaded work:", work);
      setJobs(work);
    };

    fetchWork();
  }, []);
  return (
    <section id="work" className="mb-16">
      
      {/* <h2 className="text-3xl font-semibold text-white mb-4">Work</h2> */}
      <ul className="space-y-6">
        {jobs.map((job) => (
          <li key={job.id}>
            <Card className="bg-transparent border-0 hover:bg-zinc-900 transition-all duration-300 ease-in-out" >
                <CardContent >
                <div className="grid grid-cols-[auto_1fr] gap-5 items-baseline"> 
                  <div className="text-sm text-gray-400">
                    {months[job.start_date.getMonth()]} {job.start_date.getFullYear()} –{" "}
                    {job.end_date ? months[job.end_date.getMonth()] + " " + job.end_date.getFullYear() : "Present"}
                  </div>
                  <div className="text-sm text-gray-400 "> 
                    <div className="font-medium text-gray-300 text-base">{job.role} · {job.company}</div>
                    <div>{job.description}</div>
                  </div>
                </div>

                </CardContent>


            </Card>
          </li>
        ))}
      </ul>
    </section>
  );
}
