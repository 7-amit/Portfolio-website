import {NavLink} from "react-router-dom"


export const Navbar = () => {
    const navLinkStyles = ({ isActive }) => {
        return{ 
            fontWeight: isActive?  'bold' : 'normal' ,
            textDecoration: isActive? 'none' : 'underline' ,        
        }   
    }
    return (
    <nav>
        <NavLink style={navLinkStyles} to= '/'> Introduction </NavLink> 
        <NavLink style={navLinkStyles} to= '/about' > About</NavLink>
        <NavLink style={navLinkStyles} to= '/Skill' > Skill</NavLink> 
        <br></br>
        <h1>Amit Pravin Narote</h1>
    </nav>
    )
  } 
  