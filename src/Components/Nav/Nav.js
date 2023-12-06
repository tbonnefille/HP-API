import "./nav.css";
import { Link } from "react-router-dom";


function Nav() {

    return (
        <div className="Nav">

            <Link className="menu" to="/gryffindor">Gryffindor</Link>
            <Link className="menu" to="/slytherin">Slytherin</Link>
            <Link className="menu" to="/hufflepuff">Hufflepuff</Link>
            <Link className="menu" to="/ravenclaw">Ravenclaw</Link>
            <Link className="menu" to="/spells">Spells</Link>
            HARRY POTTER
            <Link className="menu" to="/">Home</Link>

        </div>
    );

}
export default Nav;