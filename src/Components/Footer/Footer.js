import "./footer.css";

import { Link } from "react-router-dom";



function Footer() {

  return (
    <div className="Footer">

<Link to= "https://github.com/tbonnefille/hp-api"> <div className="footerDiv">  - projet disponible ici - </div></Link>
      
<div className="footerDiv">tbonnefille ©2023-2024</div>
     
    </div>
  );

}
export default Footer;