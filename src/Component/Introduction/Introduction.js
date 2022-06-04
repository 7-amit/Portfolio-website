import { useNavigate } from "react-router-dom"
import "./Introduction.css"


export const Introduction = () => {
    const navigate = useNavigate()
    return (
        <>
        
       <p>
       MY self Amit Pravin Narote. I completed my B.tech in Electronics & telecommunication from Dr.BABASAHEB AMBEDKAR TECHNOLOGY UNIVERSITY, LONERE.
       I am from aurangabad district situted in Maharshtra.    
       </p>
<button  onClick={() => navigate ('Contact')}>Show my contact Details</button>
    </>
    )
}
