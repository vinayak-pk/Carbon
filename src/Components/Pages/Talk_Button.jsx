import React from 'react'
import { useHistory } from 'react-router-dom';
import './Home_Css.css'

export default function Talk_Button() {
    let history = useHistory(); 
    
    const redirect1 = () => {
      history.push('/how_it_works')
    }
    return (
        <div>
            <button onClick={redirect1} className='home_button11'>TALK TO US</button>

        </div>
    )
}
