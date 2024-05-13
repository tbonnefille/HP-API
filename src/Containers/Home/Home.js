import "./home.css";

import { Link } from "react-router-dom";

import gryf1 from '../../Assets/gryf1_1.webp';
import sly1 from '../../Assets/sly1.webp';
import raven from '../../Assets/raven.webp';
import huff from '../../Assets/huff_1.webp';

function Home() {

  return (

    <div className="Home">


      <div className="homeWrapper">

        <div className="picHolder">

          <Link className="menu" to="/gryffindor">
            <div className="crestPic"> <img src={gryf1} className="housePic" alt=" house gryffindor" /></div>
            <div>gryffindor</div>
          </Link>

          <Link className="menu" to="/slytherin">
            <div className="crestPic"> <img src={sly1} className="housePic" alt=" house slytherin" /></div>
            <div>slytherin</div>
          </Link>

        </div>

        <div className="presentation">

          <h1>Home</h1>

          <h2>Présentation</h2>

          <p> A la suite d’une lettre qui l’invite à l’école des sorciers, le destin du jeune Harry Potter change. Ce jeune orphelin apprend l’amitié et la magie dans la prestigieuse mais inquiétante école de Poudlard. Au cours de ses aventures, il découvre l’origine de sa cicatrice en forme d’éclair sur le front, découvrant qui étaient ses parents, les circonstances et de leur décès et leur héritage laissé à Harry : la cape d’invisibilité. Cette relique familiale attire le sorcier Voldemort qui cherche à rassembler les reliques qui lui permettront  d’atteindre le plus haut degré de puissance : l’immortalité. Harry et ses amis doivent stopper ce mage assoiffé de puissance et son armée malfaisante en retrouvant avant lui les objets qui conservent les parties de son âme noire... et ils comprennent qu'Harry lui-même constitue la dernière pièce manquante.  La saga s’étend sur 7 livres et 8 films où les thèmes de la famille, de l’amour et de la mort s’entrelacent. Dans ce site vous entrerez dans le merveilleux et sombre de l’univers d’Harry Potter.
          </p>

          <h2>Les maisons (Houses)</h2>

          <Link to= "/gryffindor"><h3>Gryffondor (GRYFFINDOR)</h3></Link>
         
          <p>
            la maison des courageux, aventuriers, des jeunes loyaux mais audacieux qui contournent parfois les règlements pour accomplir une bonne chose !
          </p>

          <Link to= "/ravenclaw"><h3>Serdaigle (RAVENCLAW)</h3></Link>
          <p>la maison de ceux qui sont perspicaces, des entreprenants créatifs aux idées originales.</p>

          <Link to= "/slytherin"><h3>Serpentard (SLYTHERIN)</h3></Link>
          <p>ses membres sont très attachés à la noblesse, ce sont d’ingénieux leaders ambitieux et fiers.</p>

          <Link to= "/hufflepuff"><h3>Poufsouffle (HUFFLEPUFF)</h3></Link>
          <p>ils sont loyaux, c’est la maison du bienfaiteur désintéressé. De fidèles amis enthousiastes et optimistes.</p>

        </div>

        <div className="picHolder">

          <Link className="menu" to="/ravenclaw">
            <div className="crestPic"> <img src={raven} className="housePic" alt=" house ravenclaw" /></div>
            <div>ravenclaw</div>
          </Link>

          <Link className="menu" to="/hufflepuff">
            <div className="crestPic"><img src={huff} className="housePic" alt=" house hufflepuff" /></div>
            <div>hufflepuff</div>
          </Link>

        </div>

      </div>

    </div>
  );

}
export default Home;