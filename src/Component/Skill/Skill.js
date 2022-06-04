import { Link , Outlet } from "react-router-dom";


export const Skill = () => {
    return(
    <> 
    <nav>
    <Link  to='Javascript' > Javascript</Link> 
    <Link  to='Reactjs' > Reactjs</Link>
    </nav>
    <Outlet/>
    </>
    )
}