import { Link } from 'react-router-dom'

import styles from './Container.module.css'

import logo from '../../img/costs_logo.png'

function Navbar(){
    return(
        
        <nav className={styles.navbar}>
            <div className={styles.container}>
                <Link>
                <img src={logo} alt="costs" />
                </Link>
                <ul className={styles.list}>
                    <li className={styles.item}><Link to='/'>Home</Link></li>

                    <li className={styles.item}><Link to='/ProjectCard'>Projetos</Link></li>
                             
                    <li className={styles.item}><Link to='/company'>Empresa</Link></li>

                    <li className={styles.item}><Link to='/contact'>Contato</Link></li>
                </ul>
           </div>           
        </nav >
      
    )
}
export default Navbar;