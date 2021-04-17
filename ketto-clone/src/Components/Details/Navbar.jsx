import react from "react"
import { Link } from "react-router-dom"
import styles from "./Navbar.module.css"
export function Navbar(){
    return(
        <div className={styles.navbar}>
            <img src="https://ketto.gumlet.io/assets/images/logo-light-bg.svg?dpr=1.0&q=70&w=100" alt=""/>
            <p style={{display:"inline-block",marginLeft:"80px"}}>India’s most trusted crowdfunding site. Over Rs. 1100 Crs+ raised.</p>
            <div style={{marginRight:"150px"}} className={styles.dropdown}>
                <button className={styles.dropbtn}>Dropdown 
                </button>
                <div className={styles.dropdowncontent}>
                    <Link href="#">Link 1</Link>
                    <Link href="#">Link 2</Link>
                    <Link href="#">Link 3</Link>
                </div>
            </div> 
            <div  className={styles.dropdown}>
                <button className={styles.dropbtn}>Dropdown 
                </button>
                <div className={styles.dropdowncontent}>
                    <Link href="#">Link 1</Link>
                    <Link href="#">Link 2</Link>
                    <Link href="#">Link 3</Link>
                </div>
            </div> 
        </div>
    )
}