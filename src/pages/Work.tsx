// src/pages/Work.tsx
import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "../lib/firebase";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type Job = {
  id: string;
  company: string;
  role: string;
  start_date: Date;
  end_date?: Date;
  description: string;
  languages?: string[];
};

const months = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

export default function Work() {
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    const fetchWork = async () => {
      const q = query(
        collection(db, "work"),
        orderBy("start_date", "desc")
      );
      const snap = await getDocs(q);

      setJobs(
        snap.docs.map((d) => {
          const data = d.data() as any;
          return {
            id: d.id,
            company: data.company,
            role: data.role,
            start_date: data.start_date.toDate(),
            end_date: data.end_date?.toDate(),
            description: data.description,
            languages: data.languages,
          };
        })
      );
    };
    fetchWork();
  }, []);

  return (
    <section id="work" className="mb-16">
      <ul className="space-y-6">
        {jobs.map((job) => (
          <li key={job.id}>
            <Card className="bg-transparent border-0 hover:backdrop-blur-xs hover:backdrop-opacity-75 hover:ring-gray-800 hover:ring-[0.25px] hover:ring-inset transition-all duration-300 ease-in-out">
              <CardContent>
                <div className="grid grid-cols-1 items-baseline gap-5 lg:grid-cols-[auto_1fr]">
                  <div className="lg:text-left text-gray-400 text-base sm:text-lg lg:text-sm">
                    {months[job.start_date.getMonth()]}{" "}
                    {job.start_date.getFullYear()} –{" "}
                    {job.end_date
                      ? `${months[job.end_date.getMonth()]} ${job.end_date.getFullYear()}`
                      : "Present"}
                  </div>
                  <div className="space-y-2 text-gray-400">
                    <p className="font-medium text-white text-lg sm:text-xl lg:text-base">
                      {job.role} · {job.company}
                    </p>
                    <p className="text-base sm:text-lg lg:text-sm">
                      {job.description}
                    </p>
                    {job.languages && (
                      <div className="flex flex-wrap gap-2 mt-2">
                        {job.languages.map((lang) => (
                          <Badge
                            key={lang}
                            className="bg-zinc-800 text-gray-300 px-3 py-1 text-sm sm:text-base lg:text-sm rounded-full"
                          >
                            {lang}
                          </Badge>
                        ))}
                      </div>
                    )}
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
