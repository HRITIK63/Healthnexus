import React from 'react'
import { Link } from 'react-router-dom';

function Dsidenav() {
  return (
    <>
    <div className="col-2 h-100 pe-5" style={{overflow:"auto"}}>
      <div className="row h-100 bg-light rounded-4 pt-5">
        <ul type="none" >
          <li>
            <Link to={'/ddash'} className='nav-link bg-white py-2 ps-3 rounded-start my-2'>Dashbord</Link>
            <Link to={'/penapp'} className='nav-link bg-white py-2 ps-3 rounded-start my-2'>Pending Appointment</Link>
            <Link to={'/dcanapp'} className='nav-link bg-white py-2 ps-3 rounded-start my-2'>Cancel Appointment</Link>
            <Link to={'/dconapp'} className='nav-link bg-white py-2 ps-3 rounded-start my-2'>Confirm Appointment</Link>
            <Link to={'/dcomapp'} className='nav-link bg-white py-2 ps-3 rounded-start my-2'>Completed Appointment</Link>
            <Link to={'/dfeed'} className='nav-link bg-white py-2 ps-3 rounded-start my-2'>Give Feedback</Link>
            <Link to={'/dviewfeed'} className='nav-link bg-white py-2 ps-3 rounded-start my-2'>View Feedback</Link>
            <Link to={'/addblog'} className='nav-link bg-white py-2 ps-3 rounded-start my-2'>Add Blogs</Link>
            <Link to={'/dnews'} className='nav-link bg-white py-2 ps-3 rounded-start my-2'>View News</Link>

          </li>
        </ul>
      </div>
    </div>
    </>
  )
}

export default Dsidenav;