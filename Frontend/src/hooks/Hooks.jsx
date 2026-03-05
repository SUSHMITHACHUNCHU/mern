import React, { children } from 'react'
import { Link, Outlet } from 'react-router-dom'
import './Hooks.css'

const Hooks = () => {
  return (
    <div>
      <ul className='nestedList'>
        <li> <Link to="useState" className='nestedLink'>useState</Link></li>
        <li> <Link to="form" className='nestedLink'>Form</Link></li>
        <li> <Link to="useEffect" className='nestedLink'>Effect</Link></li>
        <li> <Link to="useEffectApi" className='nestedLink'>Effect With api</Link></li>
        <li> <Link to="useRef" className='nestedLink'>Ref</Link></li>
      </ul>
      <Outlet/>
    </div>
  )
}

export default Hooks