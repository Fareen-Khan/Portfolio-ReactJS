
import MouseFollower from "./components/MouseFollower";
import Spotify from "./components/Spotify";
import Work from "./pages/Work";
import Projects from "./pages/Projects";
import { Card, CardContent } from "./components/ui/card";
import { Github, Linkedin } from "lucide-react";

export default function App() {
  return (
    <>
      <MouseFollower />

      <div className="min-h-screen text-gray-300">
        <div className="container mx-auto flex flex-col md:flex-row">

          {/* ─── Sidebar ───────────────────────────── */}
          <aside className="w-full md:w-1/3 p-8 md:sticky md:top-0 flex flex-col md:h-screen">
            <h1 className="text-5xl font-bold text-white">Fareen Khan</h1>
            <p className="mt-2 text-2xl text-gray-400">
              Software Engineer
            </p>
            <div className="flex flex-row space-x-2 mt-4">
              <Github
                className="w-8 h-8 p-1 rounded-lg text-gray-400 hover:bg-zinc-800"
                onClick={() =>
                  window.open("https://github.com/fareen-khan")
                }
              />
              <Linkedin
                className="w-8 h-8 p-1 rounded-lg text-gray-400 hover:bg-zinc-800"
                onClick={() =>
                  window.open("https://www.linkedin.com/in/fareenkhan/")
                }
              />
            </div>
            <div className="mt-auto pt-8">
              <Spotify />
            </div>
          </aside>

          {/* ─── Main Content ─────────────────────── */}
          <main className="w-full md:flex-1 p-8 space-y-16 md:border-l md:border-gray-800">
            <section id="bio" className="text-gray-400 space-y-4">
              <Card className="bg-transparent border-0 text-gray-400">
                <CardContent className="space-y-4 hover:backdrop-blur-xs hover:backdrop-opacity-75">
                  <p>
                    I am a Software Engineer passionate about building
                    user-centric applications. My favorite work lies at the
                    intersection of mobile and web development, where I can
                    leverage my skills in Swift/SwiftUI, React/Next.js,
                    TypeScript, and cloud platforms like Firebase and Vercel.
                    I thrive on creating pixel-perfect interfaces in Figma and
                    automating CI/CD pipelines in Docker, always with a focus
                    on performance, maintainability, and delightful user
                    experiences.
                  </p>
                  <p>
                    In my most recent role at the Government of Canada, I
                    led feature development and performance optimizations on
                    the WeatherCAN iOS app—now serving over a million users.
                    I also contributed to the development of mobile
                    applications for startups, improving both performance and
                    user experience.
                  </p>
                  <p>
                    When I can, I build side projects to learn new
                    technologies and frameworks. Currently, I'm exploring AI
                    to generate personalized workout plans—experimenting with
                    how to merge AI and my development skills to create
                    something both useful and beautiful.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Work & Projects */}
            <Work />
            <Projects />
          </main>
        </div>
      </div>
    </>
  );
}
