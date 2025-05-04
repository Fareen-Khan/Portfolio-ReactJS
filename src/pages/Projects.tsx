import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore"
import { db } from "../lib/firebase";
import { Card, CardContent} from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";



type Project = {
  id: string;
  title: string;
  description: string;
  url: string;
  image_url?: string;
  languages?: string[];
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
      <ul className="space-y-6">
        {items.map((p) => (
          <li key={p.id}>
            <Card className="bg-transparent border-0 hover:bg-zinc-900 transition-all duration-300 ease-in-out" >
              <CardContent>
                <div className="grid grid-cols-[auto_1fr] gap-5 items-center">
                  <img src={p.image_url} alt="" className="w-32 h-32 rounded-lg object-cover" /> 
                  <div className="text-sm text-gray-400 ">
                    <div className="font-medium text-gray-300 text-base flex flex-row space-x-2 items-end">
                      <p>{p.title}</p>
                      {p.url &&
                        <a
                          href={p.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block hover:text-white">
                          <ArrowUpRight className="w-4 h-4" />
                        </a>
                      }
                    </div>
                    <div>{p.description}</div>
                    <div className="space-x-2">
                      {p.languages && (
                        <div className="flex flex-wrap gap-2">
                          {p.languages.map((lang) => (
                            <Badge
                              key={lang}
                              className="bg-zinc-800 text-gray-300 px-2 py-1 rounded-full mt-2"
                            >
                              {lang}
                            </Badge>
                          ))}
                        </div>
                      )}

                    </div>
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
