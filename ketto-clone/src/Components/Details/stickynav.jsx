import React from "react"
import { Link } from "react-router-dom"
import styles from "./Sticky.module.css"
export function Stickynav() {
    const [scrolled,setScrolled]=React.useState(false);
    const handleScroll=() => {
        const offset=window.scrollY;
        if(offset > 200 ){
          setScrolled(true);
        }
        else{
          setScrolled(false);
        }
      }
    
      React.useEffect(() => {
        window.addEventListener('scroll',handleScroll)
      })
    let navbarClasses=['navbar'];
      if(scrolled){
        navbarClasses.push('scrolled');
      }
    return(
        <header className={navbarClasses.join(" ")}>

        <nav className={styles.navigation}>
           <Link>About</Link>
           <Link>Updates</Link>
           <Link>Comments</Link>
        </nav>

    </header>
    )
}