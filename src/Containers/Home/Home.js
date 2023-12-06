import "./home.css";
import { Link } from "react-router-dom";

import gryf1 from '../../Assets/gryf1.png';
import sly1 from '../../Assets/sly1.png';
import raven from '../../Assets/raven.png';
import huff from '../../Assets/huff.png';

function Home() {

  return (

    <div className="Home">


      <div className="homeWrapper">

        <div className="picHolder">

        <Link className="menu" to="/gryffindor"> <div className="crestPic"> <img src={gryf1} className="housePic" alt="Logo" /></div></Link>
        <Link className="menu" to="/slytherin"><div className="crestPic"> <img src={sly1} className="housePic" alt="Logo" /></div></Link>

        </div>

        <div className="presentation">
          <h1>Home</h1>

          <p> Comme vous le savez, ce vendredi 14 avril, le Conseil constitutionnel a validé pour l’essentiel la loi sur nos retraites, et je l’ai donc logiquement promulguée. Les évolutions prévues par cette loi entreront en vigueur progressivement à partir de cet automne.
          </p>

          <p>
            Adoptés conformément à ce que prévoit notre Constitution, ces changements étaient nécessaires, pour garantir la retraite de chacun et pour produire plus de richesses pour notre nation. Car en effet alors que le nombre de retraités augmente, que notre espérance de vie s’allonge, la réponse ne pouvait pas être de baisser les pensions, elle ne pouvait pas être non plus d’augmenter les cotisations de ceux qui travaillent, elle ne pouvait pas être comme je l’ai beaucoup entendu, de ne rien faire, car c’était lors laisser les déficits s’accumuler et notre dette augmenter pour les générations futures.
          </p>

        </div>

        <div className="picHolder">

        <Link className="menu" to="/ravenclaw">  <div className="crestPic"> <img src={raven} className="housePic" alt="Logo" /></div></Link>
        <Link className="menu" to="/hufflepuff"><div className="crestPic"><img src={huff} className="housePic" alt="Logo" /></div></Link>

        </div>

      </div>

    </div>
  );

}
export default Home;