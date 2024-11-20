import React, { useState } from 'react';
import "../style/Welcomepage.css";
import { Link } from 'react-router-dom';

function Welcomepage() {
  const [name, setName] = useState("");

  return (
    <div>
      <div className='username'>
        <h1>WELCOME</h1>
        <h2>ENTER YOUR DETAILS TO START QUIZ</h2>
        <div className='user-details'>
          <input
            type='text'
            placeholder='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Link to="/home" state={{name}}>
            <button>Submit</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Welcomepage;