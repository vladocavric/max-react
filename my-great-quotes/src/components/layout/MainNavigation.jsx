import { NavLink } from 'react-router-dom'
import classes from './MainNavigation.module.css'
const MainNavigation = () => {
    return(
        <section className={classes.header}>
            <div className={classes.logo}>Great Quotes </div>
            <nav className={classes.nav}>
                <ul>
                    <li>
                        <NavLink to='/quotes?sort=asc' activeClassName={classes.active} exact>All Quotes</NavLink>
                    </li>
                    <li>
                        <NavLink to='/quotes/new' activeClassName={classes.active} exact>Add a Quote</NavLink>
                    </li>
                </ul>
            </nav>
        </section>
    )
}

export default MainNavigation