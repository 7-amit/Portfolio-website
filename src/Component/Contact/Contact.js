import { useNavigate } from "react-router-dom"
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';


export const Contact = () => {

  const navigate = useNavigate()

    return( 
      <div>
    <div><CallOutlinedIcon style={{color: "red"}}/>7219004242</div>
<br></br>
  <div><EmailOutlinedIcon style={{color: "red"}}/>7amitnarote@gmail.com</div> 
  <br></br> 
<div>Git Url: https://github.com/7-amit</div>
<br></br>
    <button onClick={() => navigate(-1)}> Go back</button>
    </div>
    )
    
  }
  
  