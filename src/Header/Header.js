import styles from './Header.module.css';
import { FaReddit } from "react-icons/fa";
import { GiSeaTurtle } from "react-icons/gi";
export function Header() {
    return (
        <>
        <header>
            <div>
                <GiSeaTurtle />
                <FaReddit />
                 <p>
                    Reddit<span>Minimal</span>
                 </p>
            </div> 
            <form>
                <input
                  type="text"
                  placeholder="Search"
                  aria-label= "Search posts"/>
                <button type="submit" aria-label="Search"></button>  
            </form>
              

        </header>
        </>
    )
}