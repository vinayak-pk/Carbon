import React from 'react'
import { useHistory } from 'react-router-dom';
import './Home_Css.css'

export default function Fund_Button() {
    let history = useHistory(); 

    const redirect = () => {
      history.push('/new/fundraiser')
    }
  
    return (
        <div>
            <button onClick={redirect} className='home_button'>Start a Fundraiser for FREE</button>
        </div>
    )
}
