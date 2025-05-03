// src/App.tsx
import React from "react"
import MouseFollower from "./components/MouseFollower"
import Spotify from "./components/Spotify"
import Work from "./pages/Work"
import Projects from "./pages/Projects"
import { Card, CardContent } from "./components/ui/card"

export default function App() {
  return (
    <>
      <MouseFollower />

      {/* min-height so footer/gutters can grow past 100vh */}
      <div className="min-h-scree text-gray-300">
        {/* center everything in a container */}
        <div className="container mx-auto flex">

          {/* ─── Sidebar ───────────────────────────── */}
          <aside className="w-1/3 p-8  sticky top-0 self-start flex flex-col h-screen">
            <h1 className="text-5xl font-bold text-white">Fareen Khan</h1>
            <p className="mt-2 text-2xl text-gray-400">
              Software Engineer
            </p>
            <div className="mt-auto pt-8">
              <Spotify />
            </div>
          </aside>

          {/* ─── Main Content ─────────────────────── */}
          <main className="flex-1 p-8 space-y-16">
            {/* Bio Section */}
            <section id="bio" className="text-gray-400 space-y-4">
              <Card className="bg-transparent border-0 text-gray-400">
                <CardContent>
                  <p>
                    I'm a software engineer with a passion for design and development. I am
                    currently working on projects and getting my cloud certifications. I have
                    a strong background in web development, with experience in building responsive
                    and user-friendly applications.
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
  )
}
