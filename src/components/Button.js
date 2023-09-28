import React from 'react'
import {Link} from "react-router-dom"

function Button({name, dest}) {
  return (
    <Link to={dest}>
      <button
      type='button'
      className="inline-block rounded p-1 px-2 text-sm border border-secondary leading-normal text-secondary hover:bg-secondary hover:text-white transition-all"
      >
        {name}
      </button>
    </Link>
  )
}

export default Button