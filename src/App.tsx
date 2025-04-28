
import React from 'react'
function App() {

  return (
    <>
      <div className="container mx-auto flex flex-row gap-8 pt-16">
        {/* Left column: Name & title */}
        <div className="md:w-1/3">
          <h1 className="text-5xl font-bold text-white">Fareen Khan</h1>
          <p className="mt-2 text-2xl text-gray-400">Software Engineer</p>
        </div>

        {/* ---------- Right column ----------- */}

        {/* Right column: Bio */}
        <div className="md:w-2/3 space-y-4 text-gray-300">
          <p>
            I'm a software engineer with a passion for design and development.
            I am currently working on projects and getting my cloud certifications.
            I have a strong background in web development, with experience in
            building responsive and user-friendly web and mobile applications.
          </p>
        </div>
      </div>
      
    </>
  )
}

export default App
