import React from 'react'

function Header() {
  return (
    <div>
      <nav>
        <ul className='d-flex flex-row bg-dark text-white list-unstyled p-2 justify-content-end fs-5'>
            <li className='pe-3 ps-3 text-warning'>Home</li>
            <li className='pe-3 ps-3'>About</li>
            <li className='pe-3 ps-3'>Contact</li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
