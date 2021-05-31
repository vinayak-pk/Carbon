import React from "react"
import { Link } from "react-router-dom"
import styles from "./Navbar.module.css"
import {useHistory} from "react-router-dom"
import { useSelector } from 'react-redux';
export function Navbar(){
    let User = useSelector(state=>state.auth.User)
    let history = useHistory();
    let reRoute = ()=>{
        history.push('/')
    }
    let user = User.split(' ')
    return(
        <div className={styles.navbar}>
            <img style={{cursor:"pointer"}} onClick={reRoute} src="https://ketto.gumlet.io/assets/images/logo-light-bg.svg?dpr=1.0&q=70&w=100" alt=""/>
            <p style={{display:"inline-block",marginLeft:"80px"}}>India’s most trusted crowdfunding site. Over Rs. 1100 Crs+ raised.</p>
            <div  className={styles.dropdown}>
                <button className={styles.dropbtn}>{user[0]}
                </button>
                <div className={styles.dropdowncontent}>
                    <Link to="/" href="#">{User}</Link>
                    <Link to="/" href="#">Sign out</Link>
                </div>
            </div> 
        </div>
    )
}