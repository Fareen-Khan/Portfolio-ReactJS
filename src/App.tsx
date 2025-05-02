
import React from 'react'
import Spotify from './components/Spotify'
import  Projects  from './pages/Projects'
function App() {

  return (
    <div className="flex h-screen bg-gray-900 text-gray-300">

      {/* ─── Left Column ─────────────────────────────────────── */}
      <aside className="w-1/3 p-8 border-r border-gray-700 flex flex-col h-screen">
        <h1 className="text-5xl font-bold text-white">Fareen Khan</h1>
        <p className="mt-2 text-2xl text-gray-400">Software Engineer</p>

        {/* Spacer grows, pushing this down */}
        <div className="mt-auto">
          <Spotify />
        </div>
      </aside>

      {/* ─── Right Column (scrollable) ───────────────────────── */}
      <main className="w-2/3 p-8 overflow-y-auto">
        {/* Bio Section */}
        <section id="bio" className="mb-16">
          <p className="text-gray-400">
            I'm a software engineer with a passion for design and development.
            I am currently working on projects and getting my cloud certifications.
            I have a strong background in web development, with experience in
            building responsive and user-friendly web and mobile applications.
          </p>
        </section>
        {/* Projects Section */}
        <Projects />

        {/* Skills Section */}

        {/* Work / Experience Section */}
        <section id="work">
          <h2 className="text-3xl font-semibold text-white mb-4">Work</h2>
          <ul className="space-y-6">
            <li>
              <h3 className="text-xl font-medium">Company A • 2022–Present</h3>
              <p className="text-gray-400">
                Your role & key responsibilities at Company A.
              </p>
            </li>
            <li>
              <h3 className="text-xl font-medium">Company B • 2020–2022</h3>
              <p className="text-gray-400">
                Your role & key responsibilities at Company B.
              </p>
            </li>
            {/* …add more work entries here */}
          </ul>
        </section>

      </main>
    </div>
  )
}

export default App
