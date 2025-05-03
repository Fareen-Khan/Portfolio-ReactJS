
import React from 'react'

import Spotify from './components/Spotify'
import Projects from './pages/Projects'
import Work from './pages/Work'
import MouseFollower from './components/MouseFollower'
function App() {

  return (
    <>
      <MouseFollower />

      {/* full-screen flex, center its child horizontally */}
      <div className="h-screen flex justify-center">
        {/* this inner flex is half the viewport width (1/2), so gutters are each 1/4 */}
        <div className="flex w-7/12 ">

          {/* ─── Left Column ───────────────────────────── */}
          <aside className="w-2/3 p-8 border-r border-gray-800 flex flex-col">
            <h1 className="text-5xl font-bold text-white">Fareen Khan</h1>
            <p className="mt-2 text-2xl text-gray-400">
              Software Engineer
            </p>
            <div className="mt-auto">
              <Spotify />
            </div>
          </aside>

          {/* ─── Right Column ──────────────────────────── */}
          <main className="w-2/3 p-8 overflow-y-auto overflow-hidden no-scrollbar">
            {/* Optional Bio Section */}
            <section id="bio" className="mb-16 text-gray-400">
              I'm a software engineer with a passion for design and development.
              I am currently working on projects and getting my cloud certifications.
              I have a strong background in web development, with experience in
              building responsive and user-friendly applications.
            </section>

            <Work />
            <Projects />
          </main>

        </div>
      </div>
    </>
  )
}

export default App
