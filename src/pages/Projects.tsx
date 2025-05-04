// src/pages/Projects.tsx
import { useEffect, useState } from "react";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "../lib/firebase";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

type Project = {
  id: string;
  title: string;
  description: string;
  url: string;
  image_url?: string;
  languages?: string[];
  created_at?: Date;
};

export default function Projects() {
  const [items, setItems] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const q = query(
        collection(db, "portfolio"),
        orderBy("created_at", "desc")
      );
      const snap = await getDocs(q);
      setItems(snap.docs.map((d) => ({ id: d.id, ...(d.data() as any) })));
    };
    fetchProjects();
  }, []);

  return (
    <section id="projects" className="mb-16">
      <ul className="space-y-6">
        {items.map((p) => (
          <li key={p.id}>
            <Card className="bg-transparent border-0 hover:backdrop-blur-xs hover:backdrop-opacity-75 hover:ring-gray-800 hover:ring-[0.25px] hover:ring-inset transition-all duration-300 ease-in-out">
              <CardContent>
                <div className="grid grid-cols-1 gap-5 lg:grid-cols-[auto_1fr]">
                  <img
                    src={p.image_url}
                    alt=""
                    className="order-2 lg:order-1 w-full h-auto lg:w-32 lg:h-32 rounded-lg object-cover"
                  />
                  <div className="order-1 lg:order-2 text-gray-400 ">
                    <div className="flex items-end space-x-2">
                      <p className="font-medium text-white text-lg sm:text-xl lg:text-base">
                        {p.title}
                      </p>
                      {p.url && (
                        <a
                          href={p.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ArrowUpRight className="w-4 h-4 text-gray-400 hover:text-white" />
                        </a>
                      )}
                    </div>
                    <p className="mt-1 text-base sm:text-lg lg:text-sm">
                      {p.description}
                    </p>
                    {p.languages && (
                      <div className="flex flex-wrap gap-2 mt-2">
                        {p.languages.map((lang) => (
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
