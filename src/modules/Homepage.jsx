import React from 'react'
import '../style/Homepage.css'
import { CgProfile } from "react-icons/cg";
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
function Homepage() {
    const location =useLocation();
    const {name} =location.state || {};
  return (
    <div className='homepage'>
        <div className='profile-name'>
          <CgProfile className='profile-icon'/>
          <h1>{name ? name: ''}</h1>
            
        </div>

        <div className='level-section'>
        <h1>SELECT QUIZ LEVEL</h1>
            <div className='easy'>
                <Link to="/Quiz" state={{difficulty: 'easy'}}>
                    <button>EASY</button>
                </Link>
            </div>
            <div className='medium'>
              <Link to="/Quiz" state={{difficulty: 'medium'}}>
                <button>MEDIUM</button>
              </Link>

            </div>
            <div className='hard'>
              <Link to="/Quiz" state={{difficulty: 'hard'}}>
                <button>HARD</button>
              </Link>

            </div>

        </div>
    </div>
  )
}

export default Homepage