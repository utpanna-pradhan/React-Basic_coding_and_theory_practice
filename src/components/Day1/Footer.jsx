import React from 'react'

function Footer() {
  return (
    <div className='bg-dark text-white position-absolute bottom-0 w-100'>
     <div className="row d-flex justify-content-between align-items-center mx-auto p-3 ">
        <div className="col-md-6">
            <p>copy right <span className='text-warning'>@Utpanna</span></p>
        </div>
        <div className="col-md-4">
            <nav>
                <ul className='d-flex list-unstyled'>
                   <li className='pe-3 ps-3 text-warning'>Home</li>
                    <li className='pe-3 ps-3'>About</li>
                    <li className='pe-3 ps-3'>Contact</li>
                </ul>
            </nav>
        </div>
     </div>
    </div>
  )
}

export default Footer
