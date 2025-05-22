import styles from './Header.module.css';
import { FaReddit } from "react-icons/fa";
import { GiSeaTurtle } from "react-icons/gi";
import { HiOutlineSearch } from "react-icons/hi";
//import { useDispatch, useSelector } from 'react-redux';
export function Header() {
    return (
        <>
        <header>
            <div className={styles.first}>
                <GiSeaTurtle />
                <FaReddit />
                 <p className={styles.minimal}>
                    Reddit<span>Minimal</span>
                 </p>
            </div> 
            <form>
                <input
                  type="text"
                  placeholder="Search"
                  aria-label= "Search posts"/>
                <button type="submit" aria-label="Search"> <HiOutlineSearch /></button>  
            </form>
              

        </header>
        </>
    )
}